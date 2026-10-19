import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Kegiatan from './pages/Kegiatan';
import Galeri from './pages/Galeri';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tentang" element={<About />} />
        <Route path="kegiatan" element={<Kegiatan />} />
        <Route path="galeri" element={<Galeri />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
