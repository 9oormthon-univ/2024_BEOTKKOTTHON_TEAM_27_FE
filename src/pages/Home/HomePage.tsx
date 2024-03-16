import { useEffect } from 'react';
import HomeContainer from '../../components/Home/Home';

export default function Home() {
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <HomeContainer />;
}
