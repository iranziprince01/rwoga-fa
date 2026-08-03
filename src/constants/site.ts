export const SITE = {
  name: 'Rwoga Family Association',
  shortName: 'Rwoga',
  tagline: 'Lighting the way for refugee communities through education, leadership, and mentorship.',
  description:
    'Rwoga Family Association is a refugee-led association founded by Congolese students at African Leadership University who believe that those closest to a community’s challenges are also closest to its solutions.',
  url: 'https://rwoga.org',
  email: 'rwogafamily@gmail.com',
  location: 'Kigali, Rwanda · African Leadership University',
  founded: '2019',
  logos: {
    white: '/logo1.svg',
    color: '/logo2.svg',
    favicon: '/favicon.svg',
  },
  social: {
    linkedin: 'https://linkedin.com',
    instagram: 'https://www.instagram.com/rwo.ga/',
    facebook: 'https://facebook.com',
  },
} as const

export const CLOUDINARY = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ?? 'rwoga',
  baseUrl: 'https://res.cloudinary.com',
} as const
