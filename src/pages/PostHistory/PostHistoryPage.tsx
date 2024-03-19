import ImageCard from '../../components/PostHistory/ImageCard/ImageCard';
import styled from 'styled-components';

export default function PostHistoryPage() {
  return (
    <PostHistoryPageContainer>
      <ImageCard />
    </PostHistoryPageContainer>

    //글 이미지 컴포넌트
    // 글 컴포넌트
  );
}

const PostHistoryPageContainer = styled.section`
  margin-top: 5rem;
`;
