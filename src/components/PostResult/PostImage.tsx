import styled from 'styled-components';

export default function PostImage() {
  return <PostImageImg />;
}

const PostImageImg = styled.img`
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 0.3125rem;
  background: url(https://firebasestorage.googleapis.com/v0/b/twitter-72580.appspot.com/o/img%2Fimage_example.png?alt=media&token=5cf53d9e-93e2-4234-a075-8261c87df3ea)
    lightgray 50% / cover no-repeat;
`;
