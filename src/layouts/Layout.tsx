import { Outlet } from 'react-router-dom';
// import { useMobile } from "../hooks/useMobile";

export default function Layout() {
  // useMobile();
  return (
    <>
      <Outlet />
    </>
  );
}
