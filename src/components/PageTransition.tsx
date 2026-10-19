import { useEffect, useRef, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { navItems } from '../data/site';

type Phase = 'idle' | 'cover' | 'reveal';

// Harus sama dengan durasi animasi .page-curtain di style.css
const COVER_MS = 600; // tirai menutup layar
const REVEAL_MS = 700; // tirai terbuka
const HOLD_RELEASE_MS = 260; // animasi hero halaman baru ditahan sebentar supaya terlihat

const labelFor = (path: string) => navItems.find((item) => item.to === path)?.label ?? 'Balai.semut';

function jumpToTop() {
  // CSS memakai scroll-behavior: smooth, dimatikan sebentar supaya lompatan ke atas instan
  const root = document.documentElement;
  root.style.scrollBehavior = 'auto';
  void getComputedStyle(root).scrollBehavior;
  window.scrollTo(0, 0);
  root.style.scrollBehavior = '';
}

/**
 * Pengganti <Outlet />: saat pindah halaman, tirai naik menutup layar, isi halaman
 * diganti di balik tirai, lalu tirai terbuka ke atas. Halaman baru masuk dengan fade halus.
 */
export default function PageTransition() {
  const { pathname } = useLocation();
  const outlet = useOutlet();

  const [shownPath, setShownPath] = useState(pathname);
  const [phase, setPhase] = useState<Phase>('idle');

  // Selama tirai menutup, halaman lama tetap ditampilkan (bukan halaman tujuan)
  const settled = pathname === shownPath;
  const lastOutlet = useRef(outlet);
  if (settled) lastOutlet.current = outlet;
  const content = settled ? outlet : lastOutlet.current;

  const hasNavigated = useRef(false);

  useEffect(() => {
    if (pathname === shownPath && phase === 'idle') return; // render pertama / tidak ada perubahan

    const root = document.documentElement;
    const timers: number[] = [];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      jumpToTop();
      setShownPath(pathname);
      setPhase('idle');
      return;
    }

    if (pathname !== shownPath) {
      root.dataset.hold = 'on';
      setPhase('cover');
      timers.push(
        window.setTimeout(() => {
          jumpToTop();
          hasNavigated.current = true;
          setShownPath(pathname);
          setPhase('reveal');
          timers.push(window.setTimeout(() => delete root.dataset.hold, HOLD_RELEASE_MS));
        }, COVER_MS),
        window.setTimeout(() => setPhase('idle'), COVER_MS + REVEAL_MS),
      );
    } else {
      // Pengguna kembali ke halaman asal saat tirai masih menutup: cukup buka lagi
      delete root.dataset.hold;
      setPhase('reveal');
      timers.push(window.setTimeout(() => setPhase('idle'), REVEAL_MS));
    }

    return () => timers.forEach((t) => window.clearTimeout(t));
    // hanya bereaksi pada pergantian rute
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Pastikan penahan animasi dilepas jika komponen hilang
  useEffect(
    () => () => {
      delete document.documentElement.dataset.hold;
    },
    [],
  );

  return (
    <>
      <div key={shownPath} className={hasNavigated.current ? 'page-enter' : undefined}>
        {content}
      </div>

      <div className="page-transition" aria-hidden="true">
        <div className={`page-curtain page-curtain-accent is-${phase}`} />
        <div className={`page-curtain page-curtain-main is-${phase}`}>
          <div className="page-curtain-inner">
            <span className="page-curtain-logo font-display">
              BALAI<span>.</span>SEMUT
            </span>
            <span className="page-curtain-label">{labelFor(pathname)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
