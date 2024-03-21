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
import { getImageFullUrl } from '../../utils/utils';
import { useGetPost } from '../../hooks/queries/post/useGetPost';

export default function PostResult() {
  const { width, height } = useWindowSize();
  const { id = '' } = useParams();

  // GET - 포스트 조회
  const userId = localStorage.getItem('userId') || '';
  const storeId = localStorage.getItem('storeId') || '';

  const { data } = useGetPost({ userId: userId, storeId: storeId, postingId: id });
  const posting = data?.data.posting || {};

  // POST - 포스트 수정
  const [isOpen, setIsOpen] = useState(false);
  function handleRetry(type: string) {
    setIsOpen(false);
    console.log('Retry - > ', type);
  }

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
      <PostBottomSheet open={isOpen} onDismiss={() => setIsOpen(false)} onSelect={handleRetry} />
    </PostResultContainter>
  );
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
