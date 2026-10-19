import { useEffect, type MouseEvent } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';

/** Kerangka yang dipakai semua halaman: navbar, isi halaman, footer, dan elemen melayang. */
export default function Layout() {
  const { pathname } = useLocation();

  // Pindah halaman = langsung mulai dari atas. CSS memakai scroll-behavior: smooth,
  // jadi dimatikan sebentar supaya lompatan ke atas terjadi instan.
  useEffect(() => {
    const root = document.documentElement;
    root.style.scrollBehavior = 'auto';
    void getComputedStyle(root).scrollBehavior; // paksa browser membaca style baru sebelum scroll
    window.scrollTo(0, 0);
    root.style.scrollBehavior = '';
  }, [pathname]);

  // Skip link tidak boleh pakai href="#main-content" biasa karena HashRouter memakai hash untuk rute
  const skipToContent = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('main-content')?.focus();
  };

  return (
    <>
      <a href="#main-content" className="skip-link" onClick={skipToContent}>
        Lewati ke konten utama
      </a>
      <ScrollProgress />
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
