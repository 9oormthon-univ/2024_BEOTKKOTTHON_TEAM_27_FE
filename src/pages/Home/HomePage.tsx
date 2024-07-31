import { useEffect } from 'react';
import styled from 'styled-components';
import HomeSubsection from '../../components/Home/HomeSubsection/HomeSubsection';
import { Highlight } from '../../components/PostNew/Step1/Step1Title/Step1Title';
import { ProfileImg } from '../../assets/svg';

export default function Home() {
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <HomePageContainer>
      <HomeTitleContainer>
        <TitleContainer>
          <HomeTitle>
            <HomeHeader>안녕하세요 </HomeHeader>
            <Highlight>소동떡볶이</Highlight>님! 👋🏻
          </HomeTitle>
        </TitleContainer>
        <ProfileImg width='4rem' height='4rem' style={{ margin: '0 0 0 1rem' }} />
      </HomeTitleContainer>
      <HomeSubsection />
    </HomePageContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HomeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  top: 5% '';
  padding: 2rem;
  top: 0;
  margin-bottom: 2.5rem;
`;

const HomePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  height: calc(100dvh - 2.75rem);
`;

const HomeHeader = styled.header`
  ${({ theme }) => theme.fonts.heading_04};
`;

const HomeTitle = styled.h1`
  ${({ theme }) => theme.fonts.title_01};
`;

const HomeFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 62px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  background: linear-gradient(90deg, rgba(164, 173, 255, 0.8) 0%, rgba(222, 181, 255, 0.8) 100%);
  ${({ theme }) => theme.fonts.content_01};
`;
