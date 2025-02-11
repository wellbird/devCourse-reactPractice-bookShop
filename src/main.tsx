import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

async function mountApp() {
  if (process.env.NODE_ENV === 'development') {
    await import('./mock/browser.js').then(({ worker }) => {
      worker.start();
    });
  }
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

mountApp();
