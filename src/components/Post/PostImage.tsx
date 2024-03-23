import styled from 'styled-components';
import { getImageFullUrl } from '../../utils/utils';
import { useState } from 'react';

interface PostImageProps {
  width?: string;
  height?: string;
  url?: string;
  alt?: string;
}

export default function PostImage({ width, height, url, alt }: PostImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <PostImageContainer width={width} height={height}>
      {(!url || isLoading) && <SkeletonPostImage />}

      <PostImageImg src={getImageFullUrl(url)} alt={alt} onLoad={() => setIsLoading(false)} />
    </PostImageContainer>
  );
}

const PostImageContainer = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => (width ? width : '80%')};
  height: ${({ height }) => (height ? height : 'auto')};
  aspect-ratio: 1/1;
  overflow: hidden;

  position: relative;
`;

const PostImageImg = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 0.3125rem;
  background: lightgray 50% / cover no-repeat;
`;

const SkeletonPostImage = styled.div`
  position: absolute !important; // 보통 이렇게 사용하지 않지만, 이미지 덮고 있다가 로드 시 지우기 위해 절대 위치 설정
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: 0.3125rem;

  ${({ theme }) => theme.mixins.skeleton};
`;
