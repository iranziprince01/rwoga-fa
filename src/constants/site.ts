export const SITE = {
  name: 'Rwoga Family Association',
  shortName: 'Rwoga',
  tagline: 'Lighting the way for refugee communities through education, leadership, and collective action.',
  description:
    'Rwoga Family Association is a refugee-led association founded by Congolese students at African Leadership University. Together, we empower communities through education, leadership, mentorship, and impactful initiatives that create lasting opportunities for refugees across Rwanda.',
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
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
} as const

export const CLOUDINARY = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ?? 'rwoga',
  baseUrl: 'https://res.cloudinary.com',
} as const
