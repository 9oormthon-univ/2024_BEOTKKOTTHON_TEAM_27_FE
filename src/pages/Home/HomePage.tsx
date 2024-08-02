import { useEffect } from 'react';
import styled from 'styled-components';
import { Highlight } from '../../components/PostNew/Step1/Step1Title/Step1Title';
import CommonCard from '../../components/common/Card/CommonCard';

export default function Home() {
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <HomePageContainer>
      <HomeTitleContainer>
        <HomeTitle>
          <HomeHeader>
            안녕하세요 <Highlight>소동떡볶이</Highlight>님!
          </HomeHeader>
          총 3개의 포스팅을 생성했어요 👋🏻
        </HomeTitle>
      </HomeTitleContainer>
      <CommonCard type='postNew' />
      <CommonCard type='myStore' />
      <CommonCard type='guideline' />
    </HomePageContainer>
  );
}

const HomeTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 3rem 0 0 0;
  margin-bottom: 2rem;
`;

const HomePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  height: calc(100dvh - 2.75rem);
`;

const HomeHeader = styled.p`
  ${({ theme }) => theme.fonts.sub_title};
`;

const HomeTitle = styled.h1`
  ${({ theme }) => theme.fonts.posting_card_title};
`;
