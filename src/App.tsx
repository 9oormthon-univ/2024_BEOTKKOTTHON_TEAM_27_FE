import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import router from './router/Router';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackUI from './pages/FallbackUI/FallbackUI';
import { Suspense } from 'react';
import Loading from './pages/Loading/Loading';
import GlobalStyle from './style/GlobalStyle';
import PageContainer from './components/common/Container/PageContainer';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <PageContainer>
        <QueryClientProvider client={queryClient}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={() => reset()} FallbackComponent={FallbackUI}>
                <Suspense fallback={<Loading />}>
                  <RouterProvider router={router} />
                  <GlobalStyle />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </QueryClientProvider>
      </PageContainer>
    </>
  );
}

export default App;
