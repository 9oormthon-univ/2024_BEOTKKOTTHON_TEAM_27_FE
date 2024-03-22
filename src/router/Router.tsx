import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home/HomePage';
import PostResultPage from '../pages/PostResult/PostResultPage';
import HeaderLayout from '../layouts/HeaderLayout';
import NotFound from '../components/Error/NotFound';
import StoreHeaderLayout from '../layouts/StoreHeaderLayout';
import Login from '../pages/Login/Login';
import StoreNewPage from '../pages/StoreNew/StoreNewPage';
import PostHistoryPage from '../pages/PostHistory/PostHistoryPage';
import { OnboardingProvider } from '../context/PostNew/PostNewContext';
import PostDetailPage from '../pages/PostDetail/PostDetailPage';
import GuidePage from '../pages/Guide/GuidePage';
import PostNewPage from '../pages/PostNew/PostNewPage';

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
        path: '/post',
        element: (
          <OnboardingProvider>
            <PostNewPage />
          </OnboardingProvider>
        ),
      },
      {
        element: <HeaderLayout />,
        children: [
          {
            path: '/guide',
            element: <GuidePage />,
          },
          {
            path: '/post-detail/:id',
            element: <PostDetailPage />,
          },
          {
            path: '/store-new',
            element: <StoreNewPage />,
          },
          {
            path: '/post-history',
            element: <PostHistoryPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
