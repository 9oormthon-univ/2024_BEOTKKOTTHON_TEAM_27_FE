import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import PostNew from '../pages/PostNew/PostNew';
import Home from '../pages/Home/HomePage';
import PostResult from '../pages/PostResult/PostResult';
import HeaderLayout from '../layouts/HeaderLayout';
import NotFound from '../components/Error/NotFound';
import StoreHeaderLayout from '../layouts/StoreHeaderLayout';
import Login from '../pages/Login/Login';
import StoreNew from '../pages/StoreNew/StoreNew';
import PostHistoryPage from '../pages/PostHistory/PostHistoryPage';
import { OnboardingProvider } from '../context/PostNew/PonstNewContext';

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
        path: '/post-result',
        element: <PostResult />,
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
        ],
      },
    ],
  },
]);

export default router;
