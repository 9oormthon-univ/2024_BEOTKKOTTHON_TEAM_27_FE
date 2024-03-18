import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import PostNew from '../pages/PostNew/PostNew';
import Home from '../pages/Home/HomePage';
import PostResult from '../pages/PostResult/PostResult';
import HeaderLayout from '../layouts/HeaderLayout';
import NotFound from '../components/Error/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
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
        path: '/post-result',
        element: <PostResult />,
      },
    ],
  },
]);

export default router;
