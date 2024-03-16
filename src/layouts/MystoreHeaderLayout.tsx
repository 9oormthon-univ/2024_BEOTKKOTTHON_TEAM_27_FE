import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import { useMobile } from '../hooks/useMobile';

export default function MystoreHeaderLayout() {
  useMobile();
  return (
    <>
      <Header title={'내 가게 등록하기'} />
      <Outlet />
    </>
  );
}
