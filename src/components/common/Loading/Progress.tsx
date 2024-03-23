import styled from 'styled-components';
import { SyncLoader } from 'react-spinners';

export default function Progress() {
  return (
    <ProgressContainer>
      <SyncLoader color='#402FFF' speedMultiplier={0.8} />
    </ProgressContainer>
  );
}

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100dvh;
  background: rgba(1, 1, 1, 0.5);
  position: absolute;

  top: 0;
  left: 0;
  z-index: 1;
`;
