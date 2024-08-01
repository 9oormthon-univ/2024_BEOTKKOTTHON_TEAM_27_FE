import { useEffect } from 'react';
import styled from 'styled-components';
import HomeSubsection from '../../components/Home/HomeSubsection/HomeSubsection';
import { Highlight } from '../../components/PostNew/Step1/Step1Title/Step1Title';
import { ProfileImg } from '../../assets/svg';
import PostNewCard from '../../components/Home/Card/PostNewCard';

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
      <PostNewCard
        type='postNew'
        title='SNS 마케팅 포스팅 만들기'
        subTitle='가게 매출을 높여봐요!'
        buttonText='포스팅 만들기'
        navigateTo='/post'
      />
      <PostNewCard
        type='guideline'
        title='이용가이드'
        subTitle='소동이 처음이라면 여기를 클릭하세요!'
        buttonText='이용 가이드 확인하기'
        navigateTo='/guideline'
      />
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
