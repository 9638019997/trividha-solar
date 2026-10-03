import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Trividha Solar Enterprise',
    short_name: 'Trividha Solar',
    description: 'Premier Solar EPC & Clean Energy Solutions in Gujarat',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/assets/trividha_logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/trividha_logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
