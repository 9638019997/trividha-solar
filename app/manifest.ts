import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Trividha Synergy - Solar Solutions Gujarat',
    short_name: 'Trividha Solar',
    description: 'Premier Rooftop Solar EPC, PM Surya Ghar Muft Bijli Yojana, and Industrial Solar Installations across South Gujarat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#d97706',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
