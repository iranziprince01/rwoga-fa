import type { NavLink } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Work',
    href: '/programs',
    children: [
      { label: 'Programs', href: '/programs', description: 'How we empower refugee communities' },
      { label: 'Projects', href: '/projects', description: 'Community initiatives and stories' },
      { label: 'Impact', href: '/impact', description: 'Stories and measurable progress' },
      { label: 'Team', href: '/leadership', description: 'Leadership committee and departments' },
    ],
  },
  {
    label: 'Engage',
    href: '/get-involved',
    children: [
      { label: 'Get Involved', href: '/get-involved', description: 'Volunteer and contribute' },
      { label: 'Partners & Supporters', href: '/partners', description: 'Collaborate with Rwoga' },
      { label: 'Donate', href: '/donate', description: 'Support our mission' },
      { label: 'Resources', href: '/transparency', description: 'Reports, policies, and documents' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export const FOOTER_LINKS = {
  explore: [
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Projects', href: '/projects' },
    { label: 'Impact', href: '/impact' },
    { label: 'Partners', href: '/partners' },
  ],
  engage: [
    { label: 'Contact', href: '/contact' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Resources', href: '/transparency' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'News', href: '/news' },
  ],
  trust: [
    { label: 'Annual Reports', href: '/transparency' },
    { label: 'Privacy Policy', href: '/contact' },
    { label: 'Donate', href: '/donate' },
    { label: 'FAQ', href: '/contact#faq' },
  ],
} as const
