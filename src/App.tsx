import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import ReactDOM from 'react-dom/client';
import React from 'react';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
