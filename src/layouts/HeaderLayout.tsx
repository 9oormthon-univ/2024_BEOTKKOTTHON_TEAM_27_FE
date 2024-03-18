import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
// import { useMobile } from '../hooks/useMobile';

export default function HeaderLayout() {
  // useMobile();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
