import styled from 'styled-components';
import PostImage from '../../components/Post/PostImage';
import PostText from '../../components/Post/PostText';
import PostButton from '../../components/Post/PostButton';
import { useWindowSize } from '../../hooks/useWindowSize';
import Confetti from 'react-confetti';
import PostBottomSheet from '../../components/Post/PostBottomSheet';
import { useState } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { useParams } from 'react-router';
import { isOverThan } from '../../utils/utils';
import { useGetPost } from '../../hooks/queries/post/useGetPost';
import { usePutPost } from '../../hooks/mutations/post/usePutPost';
import Loading from '../../components/common/Loading/Loading';
import PostRetry from '../../components/Post/PostRetry';
import { IcArrow } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';

export default function PostResultPage() {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const { id = '' } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);

  // GET - 포스트 조회
  const userId = localStorage.getItem('userId') || '';
  const storeId = localStorage.getItem('storeId') || '';

  const { data, refetch } = useGetPost({
    userId: userId,
    storeId: storeId,
    postingId: id,
  });
  const posting = data?.data.posting;

  // POST - 포스트 수정
  const [isOpen, setIsOpen] = useState(false);
  const { mutate, isPending } = usePutPost({
    onSuccess: (res) => {
      console.log('✈ /api/posting >>', res);

      if (!res.isSuccess) {
        alert(res.message);
        return;
      }

      console.log('Refetch!');
      refetch();
    },
    onError: (error) => {
      console.error('✈ /api/posting ERROR >>', error);
    },
  });
  if (isPending) return <Loading />;

  function handleOpen() {
    if (!posting) {
      alert('포스트 조회 후 가능합니다.');
      return;
    }

    setIsOpen(true);
  }

  function handleRetry(type: string) {
    if (!posting) {
      alert('포스트가 조회되지 않았습니다.');
      return;
    }

    const lastModifiedDate =
      type === 'Text' ? posting.postingText_modifiedDate : posting.postingImage_modifiedDate;
    if (!isOverThan(lastModifiedDate, 15)) {
      console.log('>> 15초가 지나지 않았습니다');
      alert('15초 후에 재생성 가능합니다. ');
      return;
    }

    setIsOpen(false);
    mutate({ userId: userId, postingId: id, modifyTarget: type });
  }

  return (
    <PostResultContainter>
      <PostHeaderContainer>
        <IcArrow style={{ width: '24px' }} onClick={() => navigate(-1)} />
      </PostHeaderContainer>

      {/* 상단 */}
      <PostResultTitle>
        <span>포스트</span>가 완성되었어요!
      </PostResultTitle>

      {/* 중간 - 이미지, 텍스트 */}
      {posting?.postingType === 'Text' ? (
        <>
          <PostText text={posting?.postingText} width='100%' onLoad={() => setIsLoaded(true)} />
        </>
      ) : (
        <>
          <PostImage url={posting?.postingImage} width='100%' onLoad={() => setIsLoaded(true)} />
          <PostText text={posting?.postingText} width='100%' />
        </>
      )}

      {/* 중간 - 다시 생성하기 */}
      <PostRetry onRetry={handleOpen} />

      {/* 하단 */}
      <PostButton
        image={posting?.postingImage}
        text={posting?.postingText}
        sns={posting?.postingChannel}
      />

      {isLoaded}
      {/* 기타 - 컨페티, 바텀시트 */}
      {isLoaded && <Confetti width={width} height={height} recycle={false} />}
      {posting && (
        <PostBottomSheet
          txtCnt={posting.postingText_modifiedCount}
          imgCnt={posting.postingImage_modifiedCount}
          type={posting.postingType}
          open={isOpen}
          onDismiss={() => setIsOpen(false)}
          onSelect={handleRetry}
        />
      )}
    </PostResultContainter>
  );
}

const PostResultContainter = styled.div`
  width: 100vw;
  max-width: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 2rem calc(3.125rem + 3.125rem + 1rem + 1rem);
`;

const PostHeaderContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexBox('row', 'flex-start', 'center')};
`;

const PostResultTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1.5rem 0;
  ${({ theme }) => theme.fonts.PostingTitle};

  > span {
    color: ${({ theme }) => theme.colors.main};
  }
`;
