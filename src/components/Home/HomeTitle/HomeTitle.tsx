import styled from 'styled-components';
import { Confetti, Confetti2 } from '../../../assets/svg';

export default function HomeTitle() {
  return (
    <>
      <Confetti style={{ left: '10%', top: '21%', position: 'absolute', height: '6.4rem' }} />
      <Confetti2
        style={{
          right: '4%',
          top: '13%',
          position: 'absolute',
          height: '6.4rem',
        }}
      />
      <HomeTitleContainer>
        SNS 마케팅 포스트 <br />
        지금 바로 만들어 보세요!
      </HomeTitleContainer>
    </>
  );
}

const HomeTitleContainer = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;

  text-align: center;
  ${({ theme }) => theme.fonts.HomeTitle};
`;
