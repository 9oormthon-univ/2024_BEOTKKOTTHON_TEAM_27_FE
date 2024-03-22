import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import PostNew from '../pages/PostNew/PostNew';
import Home from '../pages/Home/HomePage';
import PostResultPage from '../pages/PostResult/PostResultPage';
import HeaderLayout from '../layouts/HeaderLayout';
import NotFound from '../components/Error/NotFound';
import StoreHeaderLayout from '../layouts/StoreHeaderLayout';
import Login from '../pages/Login/Login';
import StoreNew from '../pages/StoreNew/StoreNew';
import PostHistoryPage from '../pages/PostHistory/PostHistoryPage';
import { OnboardingProvider } from '../context/PostNew/PostNewContext';
import PostDetailPage from '../pages/PostDetail/PostDetailPage';
import GuidePage from '../pages/Guide/GuidePage';

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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/post-result/:id',
        element: <PostResultPage />,
      },
      {
        element: <HeaderLayout />,
        children: [
          {
            path: '/post',
            element: (
              <OnboardingProvider>
                <PostNew />
              </OnboardingProvider>
            ),
          },
        ],
      },
      {
        element: <StoreHeaderLayout />,
        children: [
          {
            path: '/store-new',
            element: <StoreNew />,
          },
          {
            path: '/post-history',
            element: <PostHistoryPage />,
          },
          {
            path: '/post-detail/:id',
            element: <PostDetailPage />,
          },
          {
            path: '/guide',
            element: <GuidePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
