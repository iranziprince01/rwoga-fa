import type { ComponentType, SVGProps } from 'react'
import {
  BookOpen,
  Briefcase,
  Clock,
  Compass,
  GraduationCap,
  HandCoins,
  Heart,
  Home,
  Laptop,
  MessageCircle,
  Package,
  Presentation,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export const iconMap: Record<string, IconComponent> = {
  BookOpen,
  Briefcase,
  Clock,
  Compass,
  GraduationCap,
  HandCoins,
  Heart,
  Home,
  Laptop,
  MessageCircle,
  Package,
  Presentation,
  Shield,
  Sparkles,
  Users,
}

export function getIcon(name: string): IconComponent {
  return iconMap[name] ?? Sparkles
}
