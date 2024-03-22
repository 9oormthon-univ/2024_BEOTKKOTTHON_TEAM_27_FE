import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import { useState } from 'react';

export interface HeaderLayoutContext {
  setTitle: (title: string) => void;
}

export default function HeaderLayout() {
  const [title, setTitle] = useState('title');

  return (
    <>
      <Header title={title} />
      <Outlet context={{ setTitle }} />
    </>
  );
}
