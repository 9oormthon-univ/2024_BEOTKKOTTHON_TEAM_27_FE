import styled from 'styled-components';
import HomeSubsection from './HomeSubsection/HomeSubsection';

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>
        SNS 마케팅 포스트 <br />
        지금 바로 만들어 보세요!
      </HomeTitle>
      <HomeSubsection />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  padding: 2rem;
  width: 100vw;
`;

const HomeTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;

  text-align: center;
  ${({ theme }) => theme.fonts.Title};
`;
