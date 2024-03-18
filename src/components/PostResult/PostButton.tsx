import styled from 'styled-components';
import ButtonWithTip from '../../components/common/Button/ButtonWithTip/ButtonWithTip';
import { useState } from 'react';

export default function PostButton() {
  // isSaved - false,[저장하기] show & primary
  // isSaved - true, [공유하기] show
  const [isSaved, setIsSaved] = useState(false);

  function handleSaveAll() {
    setIsSaved(true);
  }
  function handleShare() {}

  return (
    <ButtonContainer>
      <ButtonWithTip
        label='✅ 한번에 저장하기'
        tooltip='이미지와 글을 한번에 저장할 수 있어요'
        onClick={handleSaveAll}
        primary={!isSaved}
      />

      {isSaved && <ButtonWithTip label='🔗 SNS에 공유하기' primary={true} onClick={handleShare} />}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  margin-bottom: 1rem;
`;
