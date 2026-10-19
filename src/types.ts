/** Kategori foto & video di halaman Galeri. */
export type GalleryCategory = 'sotr' | 'takjil' | 'travel' | 'hangout' | 'event';

export interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  category: GalleryCategory;
  year: number;
  /** Tanggal yang ditampilkan di lightbox, contoh: "9 April 2026" */
  date: string;
  desc: string;
}

export interface GalleryVideo {
  id: number;
  title: string;
  category: GalleryCategory;
  date: string;
  /** Path file video di public/assets/videos/ */
  src: string;
  /** Gambar sampul sebelum video diputar */
  poster: string;
}

/** Kategori kegiatan di halaman Kegiatan. */
export type KegiatanCategory =
  | 'sotr'
  | 'takjil'
  | 'travel'
  | 'hangout'
  | 'sport'
  | 'event'
  | 'others';

export interface Kegiatan {
  id: number;
  category: KegiatanCategory;
  image: string;
  alt: string;
  title: string;
  date: string;
  /** Deskripsi singkat di kartu */
  shortDesc: string;
  location: string;
  /** Label kategori di modal, contoh: "Social Activity — SOTR" */
  storyCategory: string;
  /** Paragraf cerita di modal */
  story: string[];
  /** Foto tambahan di modal */
  gallery: string[];
  thumbWidth: number;
  thumbHeight: number;
}

export interface FilterOption<T extends string = string> {
  value: T;
  label: string;
}
