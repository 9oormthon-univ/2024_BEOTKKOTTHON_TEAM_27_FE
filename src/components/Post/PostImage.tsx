import styled from 'styled-components';

interface PostImageProps {
  width?: string;
  url: string;
}
export default function PostImage({ width, url }: PostImageProps) {
  return <PostImageImg width={width} src={url} />;
}

const PostImageImg = styled.img`
  width: ${({ width }) => (width ? width : '80%')};
  aspect-ratio: 1/1;
  border-radius: 0.3125rem;
  background: lightgray 50% / cover no-repeat;
`;
