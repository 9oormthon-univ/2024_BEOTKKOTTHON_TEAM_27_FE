import { Outlet } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';

export default function BottomLayout() {
  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  );
}
