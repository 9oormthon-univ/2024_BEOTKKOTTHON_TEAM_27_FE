import styled from 'styled-components';
import Toggle from '../common/Toggle/Toggle';
import { useState } from 'react';

interface PostTextProps {
  width?: string;
  text?: string;
}
export default function PostText({ width, text }: PostTextProps) {
  const [isBig, setIsBig] = useState(false);
  function handleToggle() {
    setIsBig(!isBig);
  }

  return (
    <PostTextContainer width={width}>
      <Toggle label='큰글씨' checked={isBig} onChange={handleToggle} />
      <TextContainer>
        {!text && (
          <>
            <SkeletonText />
            <SkeletonText />
            <SkeletonText />
          </>
        )}

        {text && <Text $isbig={isBig.toString()}>{text}</Text>}
      </TextContainer>
    </PostTextContainer>
  );
}

const PostTextContainer = styled.div<{ width?: string }>`
  position: relative;
  width: ${({ width }) => (width ? width : '80%')};

  > label {
    justify-content: right;
    margin: 1rem 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  margin: 0.75rem 0;
  padding: 1.2rem 1.7rem;
  border-radius: 0.3125rem;
  background: #f9f9f9;
`;

const Text = styled.p<{ $isbig: string }>`
  width: 100%;

  ${({ theme, $isbig }) => ($isbig == 'true' ? theme.fonts.post_big : theme.fonts.post_normal)};
  transition: 300ms all;
  white-space: pre-line;
`;

const SkeletonText = styled.div`
  width: 100%;
  height: 1.3rem;
  border-radius: 0.5rem;
  margin-bottom: 0.2rem;

  ${({ theme }) => theme.mixins.skeleton};
`;
