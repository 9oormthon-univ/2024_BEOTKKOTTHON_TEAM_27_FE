import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';

export default function HeaderLayout() {
  return (
    <>
      <Header title={'포스팅 만들기'} />
      <Outlet />
    </>
  );
}
