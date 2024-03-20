import ImageCard from '../../components/PostHistory/ImageCard/ImageCard';
import styled from 'styled-components';
import TextCard from '../../components/PostHistory/TextCard/TextCard';

export default function PostHistoryPage() {
  return (
    <PostHistoryPageContainer>
      <ImageCard />
      <TextCard />
    </PostHistoryPageContainer>
  );
}

const PostHistoryPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
`;
