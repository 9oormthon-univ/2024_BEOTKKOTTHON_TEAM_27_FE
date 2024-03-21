import styled from 'styled-components';
import PostTitle from '../../components/PostResult/PostTitle';
import PostImage from '../../components/PostResult/PostImage';
import PostText from '../../components/PostResult/PostText';
import PostButton from '../../components/PostResult/PostButton';
import { useWindowSize } from '../../hooks/useWindowSize';
import Confetti from 'react-confetti';
import PostBottomSheet from '../../components/PostResult/PostBottomSheet';
import { useState } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { useParams } from 'react-router';
import { getImageFullUrl, isOverThan } from '../../utils/utils';
import { useGetPost } from '../../hooks/queries/post/useGetPost';
import { usePutPost } from '../../hooks/mutations/post/usePutPost';
import Loading from '../../components/common/Loading/Loading';

const initialPosting = {
  postingImage: '',
  postingText: '',
  postingChannel: '',
  postingImage_modifiedCount: 0,
  postingText_modifiedCount: 0,
  postingType: 'Both',
};

export default function PostResult() {
  const { width, height } = useWindowSize();
  const { id = '' } = useParams();

  // GET - 포스트 조회
  const userId = localStorage.getItem('userId') || '';
  const storeId = localStorage.getItem('storeId') || '';

  const { data, refetch } = useGetPost({
    userId: userId,
    storeId: storeId,
    postingId: id,
  });
  const posting = data?.data.posting || initialPosting;

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

  function handleRetry(type: string) {
    const lastModifiedDate =
      type === 'Text' ? posting.postingText_modifiedDate : posting.postingImage_modifiedDate;
    if (!isOverThan(lastModifiedDate, 15)) {
      console.log('>> 15초가 지나지 않음!!');
      alert('15초 후에 재생성 가능합니다. ');
      return;
    }

    setIsOpen(false);
    mutate({ userId: userId, postingId: id, modifyTarget: type });
  }

  if (Object.keys(posting).length > 0)
    return (
      <PostResultContainter>
        {/* 상단 */}
        <PostTitle onRetry={() => setIsOpen(true)} />

        {/* 중간 - 이미지, 텍스트 */}
        <PostImage url={getImageFullUrl(posting.postingImage)} />
        <PostText text={posting.postingText} />

        {/* 하단 */}
        <PostButton
          image={posting.postingImage}
          text={posting.postingText}
          sns={posting.postingChannel}
        />

        {/* 기타 - 컨페티, 바텀시트 */}
        <Confetti width={width} height={height} recycle={false} />
        <PostBottomSheet
          txtCnt={posting.postingText_modifiedCount}
          imgCnt={posting.postingImage_modifiedCount}
          type={posting.postingType}
          open={isOpen}
          onDismiss={() => setIsOpen(false)}
          onSelect={handleRetry}
        />
      </PostResultContainter>
    );
  else return <PostResultContainter>데이터가 없습니다.</PostResultContainter>;
}

const PostResultContainter = styled.div`
  width: 100%;
  max-width: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-bottom: calc(3.125rem + 3.125rem + 1rem + 1rem); // 버튼 영역 고려
`;
