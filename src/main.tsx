import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Styles from './style/index.tsx';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Styles>
      <App />
    </Styles>,
  );
});
