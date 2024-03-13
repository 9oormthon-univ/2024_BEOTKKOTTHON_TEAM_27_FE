import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Styles from './style/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Styles>
    <App />
  </Styles>,
);
