import styled from 'styled-components';

export default function Loading() {
  return <LoadingContainer>로딩 중입니다...</LoadingContainer>;
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100vw;
  height: 100vh;
  background: rgba(1, 1, 1, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;
