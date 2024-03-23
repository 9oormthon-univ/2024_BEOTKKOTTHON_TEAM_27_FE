import styled from 'styled-components';
import LoadingIc from '../../../assets/Image/LoadingSodong.gif';

export default function Loading() {
  return (
    <LoadingContainer>
      <img src={LoadingIc} alt='로딩-중' />
      <LoadingTitle>
        포스팅을 열심히 만들고 있어요 <br />
        조금만 기다려주세요☁️
      </LoadingTitle>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  color: #fff;

  width: 100vw;
  height: calc(100dvh - 45%);

  position: absolute;
  margin-top: 45%;
  top: 0;
  left: 0;
  z-index: 99;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 17.25rem;
    height: 17.25rem;
  }
`;

const LoadingTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  left: 50%;
  position: relative;
  transform: translateX(-50%);

  text-align: center;
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.heading_03};
`;
