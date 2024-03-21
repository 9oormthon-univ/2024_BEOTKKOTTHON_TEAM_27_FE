import styled from 'styled-components';
import PostImage from '../../components/PostResult/PostImage';
import PostText from '../../components/PostResult/PostText';
import PostButton from '../../components/PostResult/PostButton';
import 'react-spring-bottom-sheet/dist/style.css';
import { useParams } from 'react-router';
import { getFormattedDate, getImageFullUrl } from '../../utils/utils';
import { useGetPost } from '../../hooks/queries/post/useGetPost';

const initialPosting = {
  postingImage: '',
  postingText: '',
  postingChannel: '',
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
      <PostDetailTitleContainer>
        <PostDetailTitle>{posting.postingChannel}</PostDetailTitle>
        <PostDetailDate>{getFormattedDate(posting.postingText_createdDate)}</PostDetailDate>
      </PostDetailTitleContainer>

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

const PostDetailTitleContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0 1.75rem;
`;

const PostDetailTitle = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;

  ${({ theme }) => theme.fonts.subTitle};
`;

const PostDetailDate = styled.div`
  ${({ theme }) => theme.fonts.date};
`;
