import styled from 'styled-components';
import PostImage from '../../components/Post/PostImage';
import PostText from '../../components/Post/PostText';
import PostButton from '../../components/Post/PostButton';
import { useParams } from 'react-router';
import { useGetPost } from '../../hooks/queries/post/useGetPost';
import PostTop from '../../components/Post/PostTop';
import { useOutletContext } from 'react-router-dom';
import { HeaderLayoutContext } from '../../layouts/HeaderLayout';
import { useEffect } from 'react';

export default function PostDetailPage() {
  const { id = '' } = useParams();

  /**
   * 헤더 타이틀 변경
   */
  const { setTitle } = useOutletContext<HeaderLayoutContext>();
  useEffect(() => {
    setTitle('포스트 상세');
  }, [setTitle]);

  // GET - 포스트 조회 API
  const userId = localStorage.getItem('userId') || '';
  const storeId = localStorage.getItem('storeId') || '';

  const { data } = useGetPost({
    userId: userId,
    storeId: storeId,
    postingId: id,
  });
  const posting = data?.data.posting;

  return (
    <PostDetailContainter>
      {/* 상단 - 채널, 처음 생성된 날짜 */}
      <PostTop channel={posting?.postingChannel} createdDate={posting?.postingText_createdDate} />

      {/* 중간 - 이미지, 텍스트 */}
      {posting?.postingType === 'Text' ? (
        <>
          <PostText text={posting?.postingText} width='100%' />
        </>
      ) : (
        <>
          <PostImage url={posting?.postingImage} width='100%' />
          <PostText text={posting?.postingText} width='100%' />
        </>
      )}

      {/* 하단 */}
      <PostButton
        image={posting?.postingImage}
        text={posting?.postingText}
        sns={posting?.postingChannel}
      />
    </PostDetailContainter>
  );
}

const PostDetailContainter = styled.div`
  width: 100vw;
  max-width: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 4rem 2rem calc(3.125rem + 3.125rem + 1rem + 1rem);
`;
