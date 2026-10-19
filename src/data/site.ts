export interface NavItem {
  to: string;
  label: string;
}

export const navItems: NavItem[] = [
  { to: '/', label: 'Beranda' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/kegiatan', label: 'Kegiatan' },
  { to: '/galeri', label: 'Galeri' },
];

export const contact = {
  address: 'Graha Laksana Tidar, Malang',
  phone: '+62 895366702004',
  instagram: { label: '@balai.semut', url: 'https://instagram.com/balai.semut' },
  tiktok: { label: '@balai.semut', url: 'https://tiktok.com/@balai.semut' },
};

export const tagline = "Not just a circle. It's a collection of memories.";
