import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import PostNew from '../pages/PostNew/PostNew';
import Home from '../pages/Home/HomePage';
import PostResult from '../pages/PostResult/PostResult';
import HeaderLayout from '../layouts/HeaderLayout';
import NotFound from '../components/Error/NotFound';
import MystoreHeaderLayout from '../layouts/MystoreHeaderLayout';
import MyStoreAdd from '../pages/MyStoreAdd/MyStoreAdd';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/post-result',
            element: <PostResult />,
          },
        ],
      },
      {
        element: <HeaderLayout />,
        children: [
          {
            path: '/post',
            element: <PostNew />,
          },
        ],
      },
      {
        element: <MystoreHeaderLayout />,
        children: [
          {
            path: '/store-add',
            element: <MyStoreAdd />,
          },
        ],
      },
    ],
  },
]);

export default router;
