import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div>메인 홈 화면입니다.</div>;
}
