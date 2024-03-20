import styled from 'styled-components';
import Toggle from '../../components/common/Toggle/Toggle';
import { useState } from 'react';

interface PostTextProps {
  text: string;
}
export default function PostText({ text }: PostTextProps) {
  const [isBig, setIsBig] = useState(false);
  function handleToggle() {
    setIsBig(!isBig);
  }

  return (
    <PostTextContainer>
      <Toggle label='큰글씨' checked={isBig} onChange={handleToggle} />
      <Text $isbig={isBig.toString()}>{text}</Text>
    </PostTextContainer>
  );
}

const PostTextContainer = styled.div`
  width: 80%;

  > label {
    justify-content: right;
    margin: 1rem 0;
  }
`;

const Text = styled.p<{ $isbig: string }>`
  width: 100%;
  margin: 0.75rem 0;
  padding: 1.2rem 1.7rem;

  border-radius: 0.3125rem;
  background: #f9f9f9;

  ${({ theme, $isbig }) => ($isbig == 'true' ? theme.fonts.post_big : theme.fonts.post_normal)};
  transition: 300ms all;
  white-space: pre-line;
`;