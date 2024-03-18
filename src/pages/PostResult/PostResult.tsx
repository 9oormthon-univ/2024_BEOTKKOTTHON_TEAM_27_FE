import styled from 'styled-components';
import PostTitle from '../../components/PostResult/PostTitle';
import PostImage from '../../components/PostResult/PostImage';
import PostText from '../../components/PostResult/PostText';

export default function PostResult() {
  return (
    <PostResultContainter>
      <PostTitle />
      <PostImage />
      <PostText />
    </PostResultContainter>
  );
}

const PostResultContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;
