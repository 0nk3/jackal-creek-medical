import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jackal Creek Medical Centre',
    short_name: 'JCMC',
    description: 'Premium medical and dental services in Roodepoort, South Africa',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ef4444',
    categories: ['health', 'medical', 'healthcare', 'dental'],
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Book Appointment',
        short_name: 'Book',
        description: 'Quick access to appointment booking',
        url: '/booking',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
          },
        ],
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch with our medical center',
        url: '/contact',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
          },
        ],
      },
    ],
  }
}
