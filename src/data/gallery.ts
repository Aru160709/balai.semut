import type { FilterOption, GalleryCategory, GalleryPhoto, GalleryVideo } from '../types';

/** Nama kategori yang ditampilkan di lightbox & kartu video. */
export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  sotr: 'Sotr',
  takjil: 'Takjil',
  travel: 'Travel',
  hangout: 'Hangout',
  event: 'Event',
};

/** Tombol filter di atas galeri foto. Nilai tahun dicocokkan dengan `year`, sisanya dengan `category`. */
export const galleryFilters: FilterOption[] = [
  { value: 'all', label: 'All' },
  { value: '2026', label: '2026' },
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' }
];

/**
 * CARA MENAMBAH FOTO BARU:
 * 1. Taruh file foto di public/assets/images/
 * 2. Tambah satu objek baru di array di bawah (id harus unik).
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    src: "assets/images/gallery1.jpeg",
    title: "Tertangkap Pak Pulici",
    category: "event",
    year: 2025,
    date: "tanggal(nanti di ubah)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    src: "assets/images/gallery2.jpg",
    title: "Gather",
    category: "hangout",
    year: 2026,
    date: "4 November 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 3,
    src: "assets/images/gallery3.jpeg",
    title: "Bromo",
    category: "hangout",
    year: 2024,
    date: "14 Januari 2024",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 4,
    src: "assets/images/gallery4.jpg",
    title: "Hangout Ke Bali",
    category: "travel",
    year: 2026,
    date: "8 September 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 5,
    src: "assets/images/gallery5.jpeg",
    title: "Hangout Ke Bali",
    category: "travel",
    year: 2026,
    date: "7 Desember 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 6,
    src: "assets/images/gallery6.jpeg",
    title: "Perpisahan Bali",
    category: "travel",
    year: 2026,
    date: "15 Oktober 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 7,
    src: "assets/images/gallery7.jpeg",
    title: "Idhul Adha 2026",
    category: "event",
    year: 2026,
    date: "23 Juli 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 8,
    src: "assets/images/gallery8.jpeg",
    title: "Main Ke Jalibar",
    category: "hangout",
    year: 2026,
    date: "7 Juni 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 9,
    src: "assets/images/gallery9.jpg",
    title: "Maulid Nabi 2026",
    category: "event",
    year: 2026,
    date: "4 Juni 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 10,
    src: "assets/images/gallery10.jpeg",
    title: "Otww Balii",
    category: "travel",
    year: 2025,
    date: "24 Agustus 2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 11,
    src: "assets/images/gallery11.jpeg",
    title: "Malam Takbiran",
    category: "event",
    year: 2026,
    date: "3 September 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 12,
    src: "assets/images/gallery12.PNG",
    title: "Olahraga Putsal",
    category: "event",
    year: 2025,
    date: "23 Februari 2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 13,
    src: "assets/images/gallery13.jpeg",
    title: "Chill",
    category: "hangout",
    year: 2026,
    date: "3 April 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 14,
    src: "assets/images/gallery14.jpg",
    title: "Ngopii",
    category: "hangout",
    year: 2026,
    date: "15 November 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 15,
    src: "assets/images/gallery15.jpg",
    title: "Mas Faiq Belajar Mobil",
    category: "hangout",
    year: 2026,
    date: "12 April 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 16,
    src: "assets/images/gallery16.jpeg",
    title: "NJangongg",
    category: "hangout",
    year: 2026,
    date: "18 Desember 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 17,
    src: "assets/images/gallery17.jpeg",
    title: "Rest Area Pandaan",
    category: "hangout",
    year: 2026,
    date: "13 Mei 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 18,
    src: "assets/images/gallery18.jpg",
    title: "Rafa Ultah",
    category: "hangout",
    year: 2026,
    date: "11 Januari 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 19,
    src: "assets/images/gallery19.jpeg",
    title: "CityLight Ngantang",
    category: "hangout",
    year: 2026,
    date: "13 Mei 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 20,
    src: "assets/images/gallery20.jpg",
    title: "Mendaki Gn. Buthak",
    category: "sotr",
    year: 2026,
    date: "23 Juni 2026",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 21,
    src: "assets/images/aboutstory1.PNG",
    title: "Gaull",
    category: "hangout",
    year: 2025,
    date: "21 Agustus 2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 22,
    src: "assets/images/gallery22.jpg",
    title: "Mendaki Gn. Penanggungan",
    category: "takjil",
    year: 2025,
    date: "8 Desember 2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 23,
    src: "assets/images/gallery23.jpg",
    title: "Maenn Kejalibar",
    category: "event",
    year: 2025,
    date: "19 Juli 2025",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  // {
  //   id: 24,
  //   src: "assets/images/gallery-24.svg",
  //   title: "Perayaan Sederhana",
  //   category: "event",
  //   year: 2025,
  //   date: "8 Maret 2025",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  // },
];

/**
 * CARA MENAMBAH VIDEO BARU:
 * 1. Taruh file .mp4 di public/assets/videos/ (sebaiknya sudah dikompres).
 * 2. Tambah satu objek baru di array di bawah.
 * Kalau file video belum ada, kartu otomatis menampilkan "Video belum tersedia".
 */
export const galleryVideos: GalleryVideo[] = [
  // {
  //   id: 1,
  //   title: 'SOTR Bareng Warga',
  //   category: 'sotr',
  //   date: '9 April 2026',
  //   src: 'assets/videos/IMG_7146.MOV',
  //   poster: 'assets/images/gallery1.jpeg',
  // },
  {
    id: 2,
    title: 'Mendaki Gn. Penanggungan',
    category: 'travel',
    date: '23 Juli 2026',
    src: 'assets/videos/HugoNdaki.MOV',
    poster: 'assets/images/gallery22.jpg',
  },
  // {
  //   id: 3,
  //   title: 'Gathering Circle',
  //   category: 'event',
  //   date: '7 Desember 2026',
  //   src: 'assets/videos/gathering-circle.mp4',
  //   poster: 'assets/images/gallery5.jpeg',
  // },
  // {
  //   id: 4,
  //   title: 'New Video',
  //   category: 'hangout',
  //   date: '15 November 2026',
  //   src: 'assets/videos/new-video.mp4',
  //   poster: 'assets/images/gallery1.jpeg',
  // }
];
