import { useState } from 'react';

const STORAGE_KEY = 'balaisemut_wip_dismissed';

function wasDismissed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false; // localStorage tidak tersedia (mis. mode private)
  }
}

/**
 * Badge "Website in Progress".
 * Kalau website sudah final, HAPUS <WipBadge /> di components/Layout.tsx.
 */
export default function WipBadge() {
  const [hidden, setHidden] = useState(wasDismissed);

  const dismiss = () => {
    setHidden(true);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // abaikan jika localStorage tidak tersedia
    }
  };

  return (
    <div className={`wip-badge${hidden ? ' is-hidden' : ''}`}>
      <span className="wip-dot" aria-hidden="true" />
      <span className="wip-text">Website in Progress — Coming Soon</span>
      <button type="button" className="wip-close" aria-label="Tutup notifikasi" onClick={dismiss}>
        ✕
      </button>
    </div>
  );
}
