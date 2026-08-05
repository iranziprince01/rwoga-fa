export type NavLink = {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

export type Program = {
  id: string
  title: string
  summary: string
  description: string
  /** Longer narrative paragraphs for the detail page */
  approach: string[]
  whoItServes: string
  focusAreas: string[]
  activities: string[]
  outcomes: string[]
  futureGoals: string[]
  /** Concrete ways sponsors and partners can help this program */
  supportNeeds: string[]
  icon: string
  image: string
  /** Tailwind object-position class for cropped card/detail images */
  imagePosition?: string
}

export type ProjectStatus = 'active' | 'completed' | 'planned'

export type Project = {
  id: string
  title: string
  summary: string
  description: string
  status: ProjectStatus
  category: string
  impactHighlights: string[]
  image: string
  gallery: string[]
}

export type Leader = {
  id: string
  name: string
  role: string
  department?: string
  bio: string
  image: string
  group: 'board' | 'current'
}

export type Department = {
  id: string
  name: string
  description: string
  focus: string[]
}

export type TimelineEvent = {
  year: string
  title: string
  description: string
}

export type Story = {
  id: string
  title: string
  excerpt: string
  body: string
  author?: string
  role?: string
  image: string
  challenge?: string
  action?: string
  impact?: string
  nextSteps?: string
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  image?: string
}

export type PartnerCategory = {
  id: string
  name: string
  description: string
}

export type ContributionType = {
  id: string
  title: string
  description: string
  icon: string
}

export type DocumentItem = {
  id: string
  title: string
  category: string
  description: string
  year?: string
  status: 'available' | 'coming-soon'
}

export type FaqItem = {
  question: string
  answer: string
}

export type StatItem = {
  id: string
  value: number
  suffix?: string
  prefix?: string
  label: string
  note?: string
}

export type GalleryImage = {
  id: string
  src: string
  alt?: string
  caption?: string
  category?: string
  /** Tailwind object-position class to control crop focus */
  imagePosition?: string
}

export type ValueItem = {
  title: string
  description: string
  icon: string
}

export type Pillar = {
  title: string
  description: string
}
