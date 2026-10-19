import { useScrollY } from '../hooks/useScrollY';

export default function BackToTop() {
  const scrollY = useScrollY();

  return (
    <button
      type="button"
      className={`back-to-top${scrollY > 600 ? ' is-visible' : ''}`}
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}
