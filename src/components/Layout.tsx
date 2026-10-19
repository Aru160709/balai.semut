import type { MouseEvent } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
// import WipBadge from './WipBadge';
import Splash from './Splash';
import PageTransition from './PageTransition';

/** Kerangka yang dipakai semua halaman: navbar, isi halaman, footer, dan elemen melayang. */
export default function Layout() {
  // Skip link tidak boleh pakai href="#main-content" biasa karena HashRouter memakai hash untuk rute
  const skipToContent = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('main-content')?.focus();
  };

  return (
    <>
      <Splash />
      <a href="#main-content" className="skip-link" onClick={skipToContent}>
        Lewati ke konten utama
      </a>
      <ScrollProgress />
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <PageTransition />
      </main>

      <Footer />
      <BackToTop />
      {/* <WipBadge /> */}
    </>
  );
}
