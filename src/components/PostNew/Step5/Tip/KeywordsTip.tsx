import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export default function KeywordsTip() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const tips = [
    <KeywordTipText>AI가 추천한 메뉴와 관련된 키워드예요</KeywordTipText>,
    <KeywordTipText>비슷한 가게들은 이런 키워드를 입력했어요</KeywordTipText>,
    <KeywordTipText>내 홍보 타겟은 이런 정보를 찾고 있어요</KeywordTipText>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [tips.length]);

  return (
    <KeywordTipBox>
      &nbsp; <b>TIP</b>
      {currentTipIndex == 0 && tips[0]}
      {currentTipIndex == 1 && tips[1]}
      {currentTipIndex == 2 && tips[2]}
    </KeywordTipBox>
  );
}

const slideUp = keyframes`
      0% {
        opacity: 0;
        transform: translateY(100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    `;

const KeywordTipBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'flex-start', 'center')};
  ${({ theme }) => theme.fonts.tip};

  gap: 5px;
  margin: 15px 0;

  b {
    color: #402fff;
  }
`;

const KeywordTipText = styled.div`
  animation: ${slideUp} 0.5s ease-in-out;
  color: #848485;
`;
