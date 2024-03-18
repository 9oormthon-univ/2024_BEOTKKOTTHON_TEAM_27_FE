import styled from 'styled-components';
import PostTitle from '../../components/PostResult/PostTitle';
import PostImage from '../../components/PostResult/PostImage';
import PostText from '../../components/PostResult/PostText';
import { useEffect, useState } from 'react';
import PostButton from '../../components/PostResult/PostButton';

interface Post {
  image: string;
  text: string;
}
export default function PostResult() {
  const [post, setPost] = useState<Post>({ image: '', text: '' });
  useEffect(() => {
    fetch('/api/postings/123')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);

  return (
    <PostResultContainter>
      <PostTitle />
      <PostImage url={post.image} />
      <PostText text={post.text} />
      <PostButton />
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
  padding-bottom: calc(3.125rem + 3.125rem + 1rem + 1rem); // 버튼 영역 고려
`;
