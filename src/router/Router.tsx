import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import NotFound from '../components/Error/NotFound';
import { OnboardingProvider } from '../context/PostNew/PostNewContext';
import BottomLayout from '../layouts/BottomLayout';
import HeaderLayout from '../layouts/HeaderLayout';
import React, { Suspense } from 'react';

// 1. 라우트 기반 코드 스플리팅 
// 컴포넌트를 비동기적으로 import 시킨다.
const Home = React.lazy(() => import('../pages/Home/HomePage'));
const Login = React.lazy(() => import('../pages/Login/Login'));
const PostResultPage = React.lazy(() => import('../pages/PostResult/PostResultPage'));
const PostNewPage = React.lazy(() => import('../pages/PostNew/PostNewPage'));
const StoreNewPage = React.lazy(() => import('../pages/StoreNew/StoreNewPage'));
const GuidePage = React.lazy(() => import('../pages/Guide/GuidePage'));
const PostDetailPage = React.lazy(() => import('../pages/PostDetail/PostDetailPage'));
const PostHistoryPage = React.lazy(() => import('../pages/PostHistory/PostHistoryPage'));
const FeedPage = React.lazy(() => import('../pages/Feed/FeedPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '/post-result/:id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PostResultPage />
          </Suspense>
        ),
      },
      {
        path: '/post',
        element: (
          <OnboardingProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <PostNewPage />
            </Suspense>
          </OnboardingProvider>
        ),
      },
      {
        element: <BottomLayout />,
        children: [
          {
            path: '/home',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: '/post-history',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <PostHistoryPage />
              </Suspense>
            ),
          },
          {
            path: '/feed',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <FeedPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <HeaderLayout />,
        children: [
          {
            path: '/guide',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <GuidePage />
              </Suspense>
            ),
          },
          {
            path: '/post-detail/:id',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <PostDetailPage />
              </Suspense>
            ),
          },
          {
            path: '/store-new',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <StoreNewPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
