import { useEffect } from 'react';
import styled from 'styled-components';
import HomeTitle from '../../components/Home/HomeTitle/HomeTitle';
import HomeSubsection from '../../components/Home/HomeSubsection/HomeSubsection';

export default function Home() {
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <HomePageContainer>
      <HomeHeader>안녕하세요 소동떡볶이님! 👋🏻</HomeHeader>
      <HomeTitle />
      <HomeSubsection />
      <HomeFooter>
        커피 한잔 값으로 무제한 포스팅을 생성하세요
        <br />
        AI마케터 ‘소동' 구독하기
      </HomeFooter>
    </HomePageContainer>
  );
}

const HomePageContainer = styled.section`
  padding: 10rem 1rem;
`;

const HomeHeader = styled.header`
  ${({ theme }) => theme.fonts.heading_03};
  position: absolute;
  top: 2rem;
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
  background: linear-gradient(90deg, #717fff 0%, #b964fe 100%);
  ${({ theme }) => theme.fonts.footer_01};
`;
