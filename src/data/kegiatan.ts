import type { FilterOption, Kegiatan, KegiatanCategory } from '../types';

/** Label kategori yang tampil di kartu kegiatan. */
export const kegiatanCategoryLabels: Record<KegiatanCategory, string> = {
  sotr: 'SOTR',
  takjil: 'Takjil',
  travel: 'Travel',
  hangout: 'Hangout',
  sport: 'Sport',
  event: 'Event',
  others: 'Others',
};

/** Tombol filter. Untuk kategori baru: tambah di sini DAN di tipe KegiatanCategory (src/types.ts). */
export const kegiatanFilters: FilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'sotr', label: 'SOTR' },
  { value: 'takjil', label: 'Takjil' },
  { value: 'travel', label: 'Travel' },
  { value: 'hangout', label: 'Hangout' },
  { value: 'sport', label: 'Sport' },
  { value: 'event', label: 'Event' },
  { value: 'others', label: 'Others' },
];

/**
 * CARA MENAMBAH KEGIATAN BARU:
 * Tambah satu objek di array di bawah (id harus unik). `story` adalah daftar paragraf
 * untuk modal "Lihat Selengkapnya", `gallery` adalah daftar foto tambahan di modal.
 */
export const kegiatanList: Kegiatan[] = [
  {
    id: 1,
    category: "sotr",
    image: "assets/images/activitysotr.jpeg",
    alt: "SOTR 2026 Balai.semut",
    title: "SOTR 2026",
    date: "15 Maret 2026",
    shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    location: "Graha Laksana Tidar, Malang",
    storyCategory: "Social Activity — SOTR",
    story: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    gallery: [
      "assets/images/moment2fix.jpeg",
      "assets/images/storyextra2.jpg",
      "assets/images/storyextra1.jpg",
    ],
    thumbWidth: 800,
    thumbHeight: 600,
  },
  {
    id: 2,
    category: "takjil",
    image: "assets/images/takjil.jpeg",
    alt: "Bagi Takjil Balai.semut",
    title: "Bagi Takjil",
    date: "20 Maret 2026",
    shortDesc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    location: "Sekitar Perumahan, Malang",
    storyCategory: "Social Activity — Takjil",
    story: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    gallery: [
      // "assets/images/story-extra-4.svg",
      // "assets/images/story-extra-5.svg",
      // "assets/images/story-extra-6.svg",
    ],
    thumbWidth: 800,
    thumbHeight: 600,
  },
  {
    id: 3,
    category: "travel",
    image: "assets/images/gallery6.jpeg",
    alt: "Liburan Bersama Balai.semut",
    title: "Liburan Bersama",
    date: "2 Februari 2026",
    shortDesc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    location: "Coban Rondo, Malang",
    storyCategory: "Travel",
    story: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    ],
    gallery: [
      "assets/images/gallery10.jpeg",
      "assets/images/gallery4.jpg",
      "assets/images/activity3.jpg",
    ],
    thumbWidth: 800,
    thumbHeight: 600,
  },
  {
    id: 4,
    category: "hangout",
    image: "assets/images/gallery16.jpeg",
    alt: "Malam Nongkrong Balai.semut",
    title: "Malam Nongkrong",
    date: "28 Januari 2026",
    shortDesc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur.",
    location: "Angkringan Dummy, Malang",
    storyCategory: "Hangout",
    story: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      "Et harum quidem rerum facilis est et expedita distinctio.",
    ],
    gallery: [
      "assets/images/gallery13.jpeg",
    ],
    thumbWidth: 800,
    thumbHeight: 600,
  },
  {
    id: 5,
    category: "sport",
    image: "assets/images/extraolahraga.png",
    alt: "Olahraga Bersama Balai.semut",
    title: "Mabar Futsal",
    date: "18 Januari 2026",
    shortDesc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
    location: "Lapangan Futsal Dummy, Malang",
    storyCategory: "Sport",
    story: [
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
      "Ut et voluptates repudiandae sint et molestiae non recusandae.",
    ],
    gallery: [
    ],
    thumbWidth: 800,
    thumbHeight: 600,
  },
  {
    id: 6,
    category: "event",
    image: "assets/images/moment3.jpeg",
    alt: "Event Kecil Balai.semut",
    title: "Mendaki Gunung",
    date: "5 Januari 2026",
    shortDesc: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.",
    location: "Malang",
    storyCategory: "Event",
    story: [
      "Maiores alias consequatur aut perferendis doloribus asperiores repellat, sit amet consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    gallery: [
      "assets/images/ndaki.jpg",
      "assets/images/gallery20.jpg",
      // "assets/images/gallery-17.svg",
    ],
    thumbWidth: 800,
    thumbHeight: 1000,
  },
  // {
  //   id: 7,
  //   category: "others",
  //   image: "assets/images/gallery-18.svg",
  //   alt: "Kegiatan lainnya Balai.semut",
  //   title: "Bakar-Bakar Akhir Tahun",
  //   date: "22 Desember 2025",
  //   shortDesc: "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
  //   location: "Rooftop Dummy, Malang",
  //   storyCategory: "Others",
  //   story: [
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  //     "Ut labore et dolore magna aliqua ut enim ad minim veniam.",
  //   ],
  //   gallery: [
  //     "assets/images/gallery-19.svg",
  //     "assets/images/gallery-20.svg",
  //     "assets/images/gallery-21.svg",
  //   ],
  //   thumbWidth: 800,
  //   thumbHeight: 800,
  // },
  // {
  //   id: 8,
  //   category: "travel",
  //   image: "assets/images/gallery-22.svg",
  //   alt: "Road trip Balai.semut",
  //   title: "Road Trip Dadakan",
  //   date: "10 Desember 2025",
  //   shortDesc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  //   location: "Batu, Malang",
  //   storyCategory: "Travel",
  //   story: [
  //     "Magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  //     "Ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate.",
  //   ],
  //   gallery: [
  //     "assets/images/gallery-23.svg",
  //     "assets/images/gallery-24.svg",
  //     "assets/images/moment-3.svg",
  //   ],
  //   thumbWidth: 800,
  //   thumbHeight: 700,
  // },
];
