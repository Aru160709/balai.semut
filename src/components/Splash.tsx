import { useEffect, useLayoutEffect, useState, type CSSProperties } from 'react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

const SEEN_KEY = 'balaisemut_splash_seen';
const SHOW_MS = 2300; // lama splash tampil
const LEAVE_MS = 800; // lama animasi splash naik keluar

type Phase = 'show' | 'leaving' | 'gone';

/** Splash hanya tampil sekali per sesi browser, dan dilewati jika pengguna memilih "kurangi gerakan". */
function shouldShow(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return sessionStorage.getItem(SEEN_KEY) !== '1';
  } catch {
    return true; // sessionStorage tidak tersedia, tampilkan saja
  }
}

const letterStyle = (i: number) => ({ '--i': i }) as CSSProperties;

/**
 * Layar pembuka: logo muncul huruf demi huruf, semut berjalan di atas garis loading,
 * lalu layar naik ke atas dan membuka website.
 * Selama splash tampil, animasi hero ditahan (lihat html[data-hold="on"] di CSS).
 */
export default function Splash() {
  const [phase, setPhase] = useState<Phase>(() => (shouldShow() ? 'show' : 'gone'));

  useBodyScrollLock(phase !== 'gone');

  // Tahan animasi hero sampai splash mulai naik
  useLayoutEffect(() => {
    if (phase !== 'show') return;
    document.documentElement.dataset.hold = 'on';
    return () => {
      delete document.documentElement.dataset.hold;
    };
  }, [phase]);

  useEffect(() => {
    if (phase === 'gone') return;
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      // abaikan
    }
    const leave = window.setTimeout(() => setPhase('leaving'), SHOW_MS);
    const done = window.setTimeout(() => setPhase('gone'), SHOW_MS + LEAVE_MS);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
    // sengaja hanya dijalankan sekali saat pertama tampil
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`splash${phase === 'leaving' ? ' is-leaving' : ''}`} aria-hidden="true">
      <div className="splash-inner">
        <div className="splash-logo font-display">
          {[...'BALAI'].map((c, i) => (
            <span key={`a${i}`} className="splash-letter" style={letterStyle(i)}>
              {c}
            </span>
          ))}
          <span className="splash-letter splash-dot" style={letterStyle(5)}>
            .
          </span>
          {[...'SEMUT'].map((c, i) => (
            <span key={`b${i}`} className="splash-letter" style={letterStyle(i + 6)}>
              {c}
            </span>
          ))}
        </div>

        <p className="splash-tagline">Not just a circle. It's a collection of memories.</p>

        <div className="splash-track">
          <span className="splash-fill" />
          <svg className="splash-ant" viewBox="0 0 40 22" width="34" height="19" fill="currentColor">
            <ellipse cx="8" cy="12" rx="7" ry="5" />
            <circle cx="19" cy="12" r="3.2" />
            <circle cx="27" cy="11" r="3.6" />
            <g stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round">
              <path d="M17 13 L13 20 M19 14 L19 21 M21 13 L25 20" />
              <path d="M17 10 L13 3 M19 9 L19 2 M21 10 L25 3" />
              <path d="M29 8 L34 2 M30 10 L37 6" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
