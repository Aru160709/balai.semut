import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Halaman tidak ditemukan — Balai.semut', 'Halaman yang kamu cari tidak ditemukan.');

  return (
    <section style={{ minHeight: '70vh', paddingTop: 'calc(var(--nav-height) + 40px)' }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="section-title">Halaman tidak ditemukan</h1>
        <p className="section-desc" style={{ marginBottom: 24 }}>
          Sepertinya halaman yang kamu cari sudah pindah atau memang belum ada.
        </p>
        <Link to="/" className="btn btn-primary">
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
