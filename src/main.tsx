import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Styles from './style/index.tsx';
import './index.css';

const ignoredPaths = [
  'https://dapi.kakao.com',
  'https://objectstorage.ap-chuncheon-1.oraclecloud.com',
];
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start({
    onUnhandledRequest(req, print) {
      if (ignoredPaths.some((path) => req.url.includes(path))) return;
      print.warning();
    },
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Styles>
      <App />
    </Styles>,
  );
});
