import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles/style.css';

// HashRouter (alamat seperti /#/galeri) supaya website bisa di-host di mana saja,
// termasuk GitHub Pages, tanpa pengaturan server tambahan.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
