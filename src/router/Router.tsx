import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home/HomePage';
import PostResultPage from '../pages/PostResult/PostResultPage';
import HeaderLayout from '../layouts/HeaderLayout';
import NotFound from '../components/Error/NotFound';
import Login from '../pages/Login/Login';
import StoreNewPage from '../pages/StoreNew/StoreNewPage';
import { OnboardingProvider } from '../context/PostNew/PostNewContext';
import PostDetailPage from '../pages/PostDetail/PostDetailPage';
import GuidePage from '../pages/Guide/GuidePage';
import PostNewPage from '../pages/PostNew/PostNewPage';
import BottomLayout from '../layouts/BottomLayout';
import PostHistoryPage from '../pages/PostHistory/PostHistoryPage';
import FeedPage from '../pages/Feed/FeedPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
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
        element: <BottomLayout />,
        children: [
          {
            path: '/home',
            element: <Home />,
          },
          {
            path: '/post-history',
            element: <PostHistoryPage />,
          },
          {
            path: '/feed',
            element: <FeedPage />,
          },
        ],
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
        ],
      },
    ],
  },
]);

export default router;
