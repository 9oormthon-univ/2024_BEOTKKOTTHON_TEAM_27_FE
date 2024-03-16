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
      <HomeTitle />
      <HomeSubsection />
    </HomePageContainer>
  );
}

const HomePageContainer = styled.section`
  padding: 2rem;
  width: 100vw;
`;
