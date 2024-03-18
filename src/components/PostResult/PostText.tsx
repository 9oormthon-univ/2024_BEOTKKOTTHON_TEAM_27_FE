import styled from 'styled-components';
import Toggle from '../../components/common/Toggle/Toggle';
import { useState } from 'react';

export default function PostText() {
  const [isBig, setIsBig] = useState(false);
  function handleToggle() {
    setIsBig(!isBig);
  }

  return (
    <PostTextContainer>
      <Toggle label='큰글씨' checked={isBig} onChange={handleToggle} />
      <Text $isbig={isBig.toString()}>
        망원동 성공 맛집 딸기프토 감성 카페☕️ <br />
        쫀득, 부드러운 토스트 위에 크림치즈와 딸기가 듬뿍!🍓 <br />
        비주얼부터 맛까지 빠짐없는 망원동 필수 코스 ✨ <br /> <br /># 망원동카페 # 합정카페 <br />
        🏷️ 망원동 #콘웰 <br />
        📍 서울 마포구 월드컵로15길 40 2층
      </Text>
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
`;
