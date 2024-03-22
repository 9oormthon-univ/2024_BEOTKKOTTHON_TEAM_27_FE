import styled from 'styled-components';
import PostImage from '../../components/Post/PostImage';
import PostText from '../../components/Post/PostText';
import PostButton from '../../components/Post/PostButton';
import { useParams } from 'react-router';
import { getImageFullUrl } from '../../utils/utils';
import { useGetPost } from '../../hooks/queries/post/useGetPost';
import PostTop from '../../components/Post/PostTop';

const initialPosting = {
  postingImage: '',
  postingText: '',
  postingChannel: '인스타그램',
  postingImage_modifiedCount: 0,
  postingText_modifiedCount: 0,
  postingText_modifiedDate: '',
  postingImage_modifiedDate: '',
  postingText_createdDate: new Date().toString(),
  postingType: '',
};

export default function PostDetailPage() {
  const { id = '' } = useParams();

  // GET - 포스트 조회
  const userId = localStorage.getItem('userId') || '';
  const storeId = localStorage.getItem('storeId') || '';

  const { data } = useGetPost({
    userId: userId,
    storeId: storeId,
    postingId: id,
  });
  const posting = data?.data.posting || initialPosting;

  return (
    <PostDetailContainter>
      {/* 상단 - 채널, 처음 생성된 날짜 */}
      <PostTop channel={posting.postingChannel} createdDate={posting.postingText_createdDate} />

      {/* 중간 - 이미지, 텍스트 */}
      {posting.postingType === 'Both' ? (
        <>
          <PostImage url={getImageFullUrl(posting.postingImage)} width='100%' />
          <PostText text={posting.postingText} width='100%' />
        </>
      ) : (
        <PostText text={posting.postingText} width='100%' />
      )}

      {/* 하단 */}
      <PostButton
        image={posting.postingImage}
        text={posting.postingText}
        sns={posting.postingChannel}
      />
    </PostDetailContainter>
  );
}

const PostDetailContainter = styled.div`
  width: 100%;
  max-width: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 4rem 2rem calc(3.125rem + 3.125rem + 1rem + 1rem);
`;
