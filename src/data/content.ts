import type {
  ContributionType,
  Department,
  DocumentItem,
  FaqItem,
  GalleryImage,
  Leader,
  NewsItem,
  PartnerCategory,
  Pillar,
  Program,
  Project,
  StatItem,
  Story,
  Testimonial,
  TimelineEvent,
  ValueItem,
} from '@/types'

/** Site photos — local paths resolve to Vercel Blob CDN via mediaUrl/getImageUrl */
export const IMAGES = {
  hero: '/hero.jpg',
  whoWeAre: '/WeAre.jpg',
  community: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80',
  learning: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
  mentorship: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
  leadership: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
  campus: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80',
  books: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80',
  gathering: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80',
  youth: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
  workshop: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  portrait1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  portrait2: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  portrait3: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
  portrait4: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  portrait5: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  portrait6: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
} as const

export const aboutContent = {
  whoWeAre: [
    'Rwoga Family Association is a refugee-led youth association founded by Congolese refugee students at African Leadership University.',
    'The Association exists to foster unity among refugee students while creating meaningful opportunities for refugee communities through education, mentorship, community service, and sustainable development initiatives.',
    'Today, Rwoga brings together over 100 members who believe that lasting change begins when communities invest in one another.',
  ],
  whoWeAreHome: [
    'Rwoga Family Association was founded in 2019 by five Congolese refugee students at The African Leadership University who came together to support one another academically, socially, and emotionally. What began as a small support group has grown into a community of more than 100 members united by a shared commitment to giving back to refugee communities.',
    'Driven by compassion, accountability, and collective action, our members contribute their time, skills, and resources to create lasting opportunities for refugee communities across Rwanda.',
  ],
  meaning: [
    'Rwoga is a Kinyarwanda word meaning "the leading star" - a star that lights the way and guides others.',
    'This name reflects our belief that every refugee has the potential to bring hope, lead others, and create positive change in their community.',
    'Just as a leading star lights the way for others, Rwoga seeks to empower individuals who will inspire, support, and guide future generations.',
  ],
  mission:
    'We bring together refugee students and alumni to create opportunities for refugee communities through education, mentorship, and community-led initiatives.',
  vision:
    'A future where every refugee has the opportunity to learn, lead, and thrive in resilient and self-reliant communities.',
  philosophy:
    'We believe that those closest to a community’s challenges are also closest to its solutions. Our work is rooted in service, accountability, and shared responsibility.',
}

export const values: ValueItem[] = [
  {
    title: 'Community and Solidarity',
    description: 'We stand with one another and with refugee communities through care, unity, and mutual support.',
    icon: 'Users',
  },
  {
    title: 'Service and Compassion',
    description: 'We serve with kindness and respect, placing the dignity of every person at the center of our work.',
    icon: 'Heart',
  },
  {
    title: 'Accountability',
    description: 'We act with integrity and transparency, taking responsibility for the trust placed in us.',
    icon: 'Shield',
  },
  {
    title: 'Leadership',
    description: 'We nurture ethical leaders who guide with courage, humility, and a commitment to lasting change.',
    icon: 'Compass',
  },
]

export const focusAreas: ValueItem[] = [
  {
    title: 'Education',
    description:
      'Supporting refugee learners through mentorship, learning resources, scholarships, and academic encouragement.',
    icon: 'GraduationCap',
  },
  {
    title: 'Community Development',
    description:
      'Creating meaningful projects that improve the well-being of refugee families and communities.',
    icon: 'Home',
  },
  {
    title: "Women's Empowerment",
    description:
      'Supporting women with practical tools, vocational opportunities, and sustainable livelihood initiatives.',
    icon: 'Heart',
  },
  {
    title: 'Youth Leadership',
    description:
      'Preparing refugee youth to become leaders, innovators, and changemakers within their communities.',
    icon: 'Compass',
  },
]

export const pillars: Pillar[] = [
  {
    title: 'Education',
    description: 'Supporting refugee learners through mentorship, learning resources, scholarships, and academic encouragement.',
  },
  {
    title: 'Community Development',
    description: 'Creating meaningful projects that improve the well-being of refugee families and communities.',
  },
  {
    title: "Women's Empowerment",
    description: 'Supporting women with practical tools, vocational opportunities, and sustainable livelihood initiatives.',
  },
  {
    title: 'Youth Leadership',
    description: 'Preparing refugee youth to become leaders, innovators, and changemakers within their communities.',
  },
]

export const stats: StatItem[] = [
  {
    id: 'founded',
    value: 2019,
    label: 'Founded In',
  },
  {
    id: 'members',
    value: 100,
    suffix: '+',
    label: 'Members',
  },
  {
    id: 'communities',
    value: 7,
    suffix: '+',
    label: 'Refugee Communities Reached',
  },
  {
    id: 'projects',
    value: 10,
    suffix: '+',
    label: 'Community Support Initiatives Delivered',
  },
  {
    id: 'lives',
    value: 500,
    suffix: '+',
    label: 'Lives Positively Impacted',
  },
]

export const timeline: TimelineEvent[] = [
  {
    year: '2019',
    title: 'A support group begins',
    description:
      'Five Congolese refugee students at The African Leadership University formed Rwoga as a support group where they could share experiences, academic guidance, and encouragement.',
  },
  {
    year: '2020',
    title: 'The family grows',
    description:
      'Rwoga welcomed about 20 new refugee students from refugee camps across Rwanda, growing the family and expanding its vision.',
  },
  {
    year: '2021',
    title: 'First community outreach',
    description:
      'Rwoga held its first community outreach at Gakoni High School, encouraging refugee secondary school students to pursue academic excellence and higher education.',
  },
  {
    year: '2022',
    title: 'Supporting student learning',
    description:
      'Rwoga continued to grow and started supporting refugee university students from other universities by donating laptops to support their studies.',
  },
  {
    year: '2024',
    title: 'Food support in transition',
    description:
      'Rwoga expanded its outreach by providing food to vulnerable families moving from Nkamira Transit Centre to Nyabiheke Refugee Camp.',
  },
  {
    year: '2025',
    title: 'Women empowerment and excellence',
    description:
      'Rwoga promoted women’s empowerment by donating five sewing machines in Mugombwa and Kiziba Refugee Camps and recognized top-performing students in Kigeme Refugee Camp with academic awards.',
  },
  {
    year: 'Today',
    title: 'Growing with purpose',
    description:
      'Rwoga continues to grow as a trusted refugee-led association, empowering communities through education, mentorship, and community-led initiatives.',
  },
]

export const programs: Program[] = [
  {
    id: 'education-support',
    title: 'Education Support',
    summary: 'Mentorship, learning resources, scholarships, and academic encouragement for refugee learners.',
    description:
      'We support refugee learners with guidance, learning materials, and encouragement so they can pursue excellence in school and higher education.',
    approach: [
      'Education is one of the surest paths out of vulnerability. Many refugee learners have the talent and drive to excel, yet lack books, tutoring, recognition, and someone who believes in their potential.',
      'Our Education Support program bridges that gap through academic awards, learning materials, peer guidance, and encouragement that keeps students focused on excellence from secondary school through university.',
    ],
    whoItServes:
      'Refugee secondary and university students across camps and campuses in Rwanda who need learning tools, academic encouragement, and structured support.',
    focusAreas: [
      'Academic awards and recognition',
      'Learning materials and study support',
      'Scholarship pathway guidance',
      'Peer tutoring and encouragement',
    ],
    activities: [
      'Recognize top-performing students with academic awards, as delivered in Kigeme Refugee Camp',
      'Provide textbooks, stationery, and study resources to learners who need them most',
      'Connect students with peer tutors and academic mentors from the Rwoga membership',
      'Guide learners toward scholarship applications and higher-education pathways',
    ],
    outcomes: [
      'Greater academic confidence and stronger study habits',
      'Better access to learning materials and guidance',
      'Recognition of academic excellence in refugee communities',
      'Clearer pathways from secondary school to higher education',
    ],
    futureGoals: [
      'Grow scholarship and award pathways across more camps',
      'Build a shared learning resource library for members and camp learners',
      'Expand tutoring across camps and university campuses',
      'Publish education outcomes in our annual and impact reports',
    ],
    supportNeeds: [
      'Sponsor academic awards and learning kits for camp schools',
      'Donate textbooks, stationery, and exam preparation materials',
      'Fund scholarship application support and tutoring stipends',
      'Partner on education programs that reach more refugee learners',
    ],
    icon: 'GraduationCap',
    image: '/Education Support.jpeg',
  },
  {
    id: 'student-leadership',
    title: 'Student Leadership',
    summary: 'Preparing refugee students to lead with integrity, confidence, and service.',
    description:
      'Through workshops, peer practice, and shared decision-making, members learn to guide teams and serve their communities with care and accountability.',
    approach: [
      'Rwoga was founded by refugee students who chose leadership over waiting. Student Leadership remains at the heart of who we are: young people learning to organize, decide, and serve with integrity.',
      'Members practice leadership by running real initiatives—outreach visits, livelihood projects, and association governance—so skills grow through responsibility, not theory alone.',
    ],
    whoItServes:
      'Refugee university students and emerging youth leaders who want to lead teams, shape initiatives, and serve their communities with accountability.',
    focusAreas: [
      'Ethical leadership practice',
      'Team coordination and decision-making',
      'Member-led initiatives',
      'Alumni leadership pathways',
    ],
    activities: [
      'Facilitate leadership workshops and peer practice sessions',
      'Invite members into shared decision-making across association departments',
      'Support students as they design and deliver community initiatives',
      'Document member-led case studies that future cohorts can learn from',
    ],
    outcomes: [
      'Stronger leadership confidence among members',
      'Practical experience coordinating initiatives',
      'A growing community of ethical youth leaders',
      'Clearer ownership of association projects and culture',
    ],
    futureGoals: [
      'Expand leadership opportunities across cohorts and sub-families',
      'Document and share member-led case studies publicly',
      'Strengthen alumni leadership pathways into mentorship and board service',
      'Host partner-supported leadership intensives each year',
    ],
    supportNeeds: [
      'Sponsor leadership workshops, retreats, and training materials',
      'Offer facilitation expertise and professional speakers',
      'Fund travel for members leading outreach in refugee camps',
      'Partner on youth leadership programs with measurable outcomes',
    ],
    icon: 'Compass',
    image: '/EdSupport.jpg',
    imagePosition: 'object-[center_20%]',
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    summary: 'Practical tools, vocational opportunities, and sustainable livelihood initiatives for women.',
    description:
      'Rwoga supports refugee women with vocational equipment and livelihood pathways that uphold dignity and economic independence, including sewing machine donations and skills-centered outreach.',
    approach: [
      'Dignity grows when skill meets opportunity. Many refugee women already know how to sew or trade—what they often lack is equipment, training linkages, and market access.',
      'Through Sewing Hope and related livelihood work, we provide sewing machines and vocational support so women—especially single mothers—can earn income and provide for their families with pride.',
    ],
    whoItServes:
      'Refugee women and single mothers in camps such as Mugombwa and Kiziba who need tools, training pathways, and livelihood support.',
    focusAreas: [
      'Vocational equipment support',
      'Livelihood and income pathways',
      'Skills-centered outreach',
      'Dignity-first economic independence',
    ],
    activities: [
      'Donate sewing machines to women ready to turn skill into income',
      'Identify livelihood needs with women and camp partners',
      'Pair equipment with guidance toward sustainable work',
      'Share livelihood stories that honor women’s agency and outcomes',
    ],
    outcomes: [
      'Women equipped with tools to earn an income',
      'Stronger livelihood pathways for single mothers',
      'Community-led models for women’s empowerment',
      'Practical support delivered with respect and dignity',
    ],
    futureGoals: [
      'Extend vocational equipment support across more camps',
      'Pair tools with training and market linkages',
      'Share livelihood outcomes with community partners',
      'Grow a revolving support model for women’s enterprises',
    ],
    supportNeeds: [
      'Sponsor sewing machines and vocational toolkits',
      'Fund skills training and small-business coaching',
      'Donate materials and equipment for women’s enterprises',
      'Partner on livelihood programs with camp communities',
    ],
    icon: 'Heart',
    image: '/Empowerment.jpg',
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach',
    summary: 'Meaningful projects that improve the well-being of refugee families and communities.',
    description:
      'From school visits to food support for families in transition, our outreach responds to real needs across refugee communities in Rwanda.',
    approach: [
      'Outreach is how we stay close to the communities we serve. Since our first visit to Gakoni High School in 2021, Rwoga members have returned to camps and transit centres with encouragement, food support, and practical care.',
      'We listen first, then respond—whether that means inspiring secondary students toward higher education or supporting families moving between Nkamira and Nyabiheke with dignity.',
    ],
    whoItServes:
      'Refugee families, secondary school students, and communities in camps and transit centres across Rwanda who need encouragement and practical support.',
    focusAreas: [
      'School visits and student encouragement',
      'Food and transition support',
      'Camp–campus relationships',
      'Needs-responsive community care',
    ],
    activities: [
      'Visit secondary schools to encourage academic excellence and higher education',
      'Provide food support for vulnerable families in transition, as at Nyabiheke',
      'Coordinate outreach with camp partners and association departments',
      'Bring university members into direct, respectful contact with camp communities',
    ],
    outcomes: [
      'Direct support for vulnerable families',
      'Encouragement for secondary school students',
      'Stronger ties between university members and camps',
      'Outreach delivered with care, respect, and dignity',
    ],
    futureGoals: [
      'Deepen outreach across more refugee communities',
      'Work with camp partners for lasting impact',
      'Share outreach learning in annual reports',
      'Build recurring school and family support calendars',
    ],
    supportNeeds: [
      'Sponsor school outreach visits and encouragement kits',
      'Fund food and essential support for families in transition',
      'Provide transport and logistics for camp outreach',
      'Partner on community wellbeing projects with measurable reach',
    ],
    icon: 'Home',
    image: '/Community Outreach.jpg',
  },
  {
    id: 'career-development',
    title: 'Career Development',
    summary: 'Pathways that prepare members for work, internships, and professional growth.',
    description:
      'We help refugee students and alumni build career readiness through exposure, guidance, and practical professional development.',
    approach: [
      'Talent alone is not enough without networks, portfolios, and workplace exposure. Refugee students often navigate careers without the same professional bridges as their peers.',
      'Career Development equips members with clinics, portfolio practice, and connections to mentors and employers so they can pursue internships and meaningful work with confidence.',
    ],
    whoItServes:
      'Refugee university students and alumni preparing for internships, first jobs, and long-term professional growth.',
    focusAreas: [
      'Career readiness and soft skills',
      'Internship and employment pathways',
      'Portfolio and interview preparation',
      'Employer and mentor networks',
    ],
    activities: [
      'Host career clinics, CV workshops, and interview practice',
      'Connect members with professionals for guidance and exposure',
      'Build internship pathways with aligned organizations',
      'Link alumni mentors with current students seeking direction',
    ],
    outcomes: [
      'Greater readiness for internships and employment',
      'Clearer professional direction for members',
      'Stronger networks with mentors and employers',
      'Practical tools for applications and interviews',
    ],
    futureGoals: [
      'Host regular career clinics and portfolio workshops',
      'Build internship pathways with aligned partners',
      'Connect alumni mentors with current students',
      'Track placement outcomes for continuous improvement',
    ],
    supportNeeds: [
      'Sponsor career clinics and professional development workshops',
      'Offer internships, job shadowing, and hiring pathways',
      'Provide coaches for CV, portfolio, and interview preparation',
      'Partner on career programs that open doors for refugee talent',
    ],
    icon: 'Briefcase',
    image: '/Career development.jpg',
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    summary: 'Connecting refugee youth with mentors, role models, and peer guides.',
    description:
      'Mentorship pairs members with peers and professionals who offer guidance on education, careers, wellbeing, and life as young refugee leaders.',
    approach: [
      'Belonging and wise counsel change trajectories. Many refugee youth need trusted adults and peers who understand both ambition and the realities of displacement.',
      'Our Mentorship program cultivates relationships—peer to peer and professional to student—that offer guidance on education, careers, wellbeing, and leadership.',
    ],
    whoItServes:
      'Refugee youth and Rwoga members seeking trusted guidance, alongside professionals and alumni ready to mentor the next generation.',
    focusAreas: [
      'Peer mentoring among members',
      'Professional mentor matching',
      'Education and career guidance',
      'Wellbeing and belonging support',
    ],
    activities: [
      'Pair members with peer guides and professional mentors',
      'Facilitate structured check-ins on education, careers, and wellbeing',
      'Invite role models to share lived experience and advice',
      'Gather feedback to improve matching and mentorship quality',
    ],
    outcomes: [
      'Trusted relationships that support growth',
      'Practical advice for education and careers',
      'A stronger sense of belonging and direction',
      'Mentors who stay connected to refugee youth leadership',
    ],
    futureGoals: [
      'Grow a vetted mentor network across sectors',
      'Introduce clear mentorship pathways and expectations',
      'Improve mentorship quality through member feedback',
      'Recognize outstanding mentors and mentee progress',
    ],
    supportNeeds: [
      'Volunteer as a mentor in education, careers, or leadership',
      'Sponsor mentorship training and matching tools',
      'Fund meetup spaces and communication support for pairs',
      'Partner on mentorship programs with professional networks',
    ],
    icon: 'Users',
    image: '/Mentorship.jpeg',
  },
  {
    id: 'digital-literacy',
    title: 'Digital Literacy',
    summary: 'Digital skills and device access that open doors to learning and opportunity.',
    description:
      'Through device support, digital skills learning, and peer guidance, we help refugee students take part fully in modern education and work.',
    approach: [
      'Modern education and work assume digital access. Without laptops and skills, refugee students fall behind—even when their ideas and effort are strong.',
      'Through Learning Without Limits and ongoing device support, we help university learners gain tools and digital confidence so they can study, create, and compete fully.',
    ],
    whoItServes:
      'Refugee university students and learners who need devices, digital skills, and peer guidance to succeed in school and work.',
    focusAreas: [
      'Laptop and device access',
      'Digital skills workshops',
      'Peer technology guidance',
      'Sustainable access models',
    ],
    activities: [
      'Donate laptops to refugee university students without scholarships',
      'Facilitate digital skills workshops and peer learning sessions',
      'Guide learners on tools for coursework, research, and portfolios',
      'Explore lasting technology access models with partners',
    ],
    outcomes: [
      'Improved access to digital learning tools',
      'Stronger digital confidence among students',
      'Laptop and device support for university learners',
      'Greater readiness for digital coursework and workplaces',
    ],
    futureGoals: [
      'Expand digital skills workshops across cohorts',
      'Grow device donation pathways with responsible stewardship',
      'Partner on lasting technology access models',
      'Track academic and career gains linked to device support',
    ],
    supportNeeds: [
      'Donate or sponsor laptops and digital learning tools',
      'Fund digital literacy workshops and peer trainers',
      'Provide refurbished devices with warranties and support',
      'Partner on sustainable technology access for refugee learners',
    ],
    icon: 'Laptop',
    image: '/Digital literacy.jpg',
    imagePosition: 'object-bottom',
  },
]

export const projects: Project[] = [
  {
    id: 'sewing-hope',
    title: 'Sewing Hope',
    summary:
      'Three single mothers in Mugombwa Refugee Camp knew how to sew but did not have sewing machines to turn their skills into an income. Together, Rwoga members helped change that.',
    description:
      'Three single mothers in Mugombwa Refugee Camp knew how to sew but did not have sewing machines to turn their skills into an income. Together, Rwoga members helped change that by providing sewing machines so these women could earn an income and provide for their families with dignity. Similar support continued with sewing machine donations in Kiziba Refugee Camp.',
    status: 'completed',
    category: 'Women Empowerment',
    impactHighlights: [
      'Sewing machines provided in Mugombwa Refugee Camp',
      'Single mothers supported to earn income with dignity',
      'Support extended to Kiziba Refugee Camp',
    ],
    image: '/sewing2.jpg',
    gallery: ['/sewing2.jpg', IMAGES.community, IMAGES.gathering],
  },
  {
    id: 'learning-without-limits',
    title: 'Learning Without Limits',
    summary: 'Laptop donations helping refugee university students continue their studies.',
    description:
      'Rwoga supported refugee university students from other universities by donating laptops to help them continue their studies and take part more fully in digital learning.',
    status: 'completed',
    category: 'Education',
    impactHighlights: [
      'Laptop support for refugee university students',
      'Stronger access to digital learning tools',
      'Mutual support across universities',
    ],
    image: IMAGES.learning,
    gallery: [IMAGES.learning, IMAGES.books, IMAGES.campus],
  },
  {
    id: 'food-with-dignity',
    title: 'Food With Dignity',
    summary: 'Food support for vulnerable families moving to Nyabiheke Refugee Camp.',
    description:
      'Rwoga expanded its outreach by providing food to vulnerable families moving from Nkamira Transit Centre to Nyabiheke Refugee Camp, offering practical support during a difficult transition.',
    status: 'completed',
    category: 'Community Outreach',
    impactHighlights: [
      'Food support for families in transition',
      'Care during movement from Nkamira to Nyabiheke',
      'Support delivered with respect and dignity',
    ],
    image: IMAGES.community,
    gallery: [IMAGES.community, IMAGES.gathering, IMAGES.youth],
  },
  {
    id: 'recognizing-excellence',
    title: 'Recognizing Excellence',
    summary: 'Academic awards celebrating top-performing students in Kigeme Refugee Camp.',
    description:
      'Rwoga recognized top-performing students in Kigeme Refugee Camp with academic awards, affirming achievement and encouraging continued pursuit of education.',
    status: 'completed',
    category: 'Education',
    impactHighlights: [
      'Academic awards for top-performing students',
      'Recognition that encourages educational excellence',
      'Celebration of refugee learner achievement',
    ],
    image: IMAGES.campus,
    gallery: [IMAGES.campus, IMAGES.learning, IMAGES.youth],
  },
  {
    id: 'gakoni-outreach',
    title: 'Gakoni High School Outreach',
    summary: 'Encouraging refugee secondary school students to pursue academic excellence and higher education.',
    description:
      'In 2021, Rwoga held its first community outreach at Gakoni High School, encouraging refugee secondary school students to pursue academic excellence and higher education.',
    status: 'completed',
    category: 'Community Outreach',
    impactHighlights: [
      'First community outreach delivered',
      'Secondary students encouraged toward higher education',
      'Foundation for ongoing school engagement',
    ],
    image: IMAGES.youth,
    gallery: [IMAGES.youth, IMAGES.leadership, IMAGES.mentorship],
  },
]

export const stories: Story[] = [
  {
    id: 'sewing-hope',
    title: 'Sewing Hope',
    excerpt:
      'We gave sewing machines to three single mothers in Mugombwa Refugee Camp and five women in Kiziba Refugee Camp. They already knew how to sew — what they lacked was the machines to turn skill into income and dignity for their families.',
    body: 'We gave sewing machines to three single mothers in Mugombwa Refugee Camp and five women in Kiziba Refugee Camp. They already knew how to sew — what they lacked was the machines to turn skill into income and dignity for their families.',
    image: '/Women Empowerment.jpg',
  },
  {
    id: 'learning-without-limits',
    title: 'Learning Without Limits',
    excerpt:
      'We provided two laptops to two university students studying outside ALU without scholarships — opening digital access that strengthens their academic work, professional growth, and personal confidence.',
    body: 'We provided two laptops to two university students studying outside ALU without scholarships — opening digital access that strengthens their academic work, professional growth, and personal confidence.',
    image: '/01.jpeg',
  },
  {
    id: 'food-with-dignity',
    title: 'Food With Dignity',
    excerpt:
      'We provided food support to vulnerable families as they moved from Nkamira Transit Centre to Nyabiheke Refugee Camp — meeting an urgent need with care at a moment of transition.',
    body: 'We provided food support to vulnerable families as they moved from Nkamira Transit Centre to Nyabiheke Refugee Camp — meeting an urgent need with care at a moment of transition.',
    image: '/02.jpg',
  },
  {
    id: 'recognizing-excellence',
    title: 'Recognizing Excellence',
    excerpt:
      'In Kigeme Refugee Camp, we awarded academic prizes that celebrated every top-performing student and encouraged continued excellence — affirming that achievement deserves to be seen.',
    body: 'In Kigeme Refugee Camp, we awarded academic prizes that celebrated every top-performing student and encouraged continued excellence — affirming that achievement deserves to be seen.',
    image: '/03.jpg',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Rwoga feels like family: a place where refugee students can lead, learn, and belong.',
    name: 'Kevin Ishimwe',
    role: 'Member',
    image: '/Kevine.png',
  },
  {
    id: 't2',
    quote:
      'What stands out is the seriousness of the vision. This is youth leadership with structure, clear values, and a commitment to transparency.',
    name: 'Jean Bosco',
    role: 'Community Leader at Nyabiheke Camp',
    image: '/Bosco.png',
  },
  {
    id: 't3',
    quote:
      'The association’s strength is authenticity. It is built by refugee youth, for refugee youth, and you can feel that in every initiative.',
    name: 'Eugene N.',
    role: 'Financial Aid Coordinator at ALU',
    image: '/Eugene.jpeg',
  },
]

export const leaders: Leader[] = [
  {
    id: 'l1',
    name: 'Eric Ndayisaba',
    role: 'Board Member',
    department: 'Board',
    bio: '',
    image: '/Eric1.jpg',
    group: 'board',
  },
  {
    id: 'l2',
    name: 'Prince Iranzi',
    role: 'Board Member',
    department: 'Board',
    bio: '',
    image: '/Prince.jpg',
    group: 'board',
  },
  {
    id: 'l3',
    name: 'Patrick Kabahigi',
    role: 'Board Member',
    department: 'Board',
    bio: '',
    image: '/Patrick.jpg',
    group: 'board',
  },
  {
    id: 'l4',
    name: 'Claudine Mutuyeyezu',
    role: 'Board Member',
    department: 'Board',
    bio: '',
    image: '/Claudine.jpg',
    group: 'board',
  },
  {
    id: 'l5',
    name: 'Eric Karumuna',
    role: 'Coordinator',
    department: 'Current Leadership',
    bio: '',
    image: '/Eric2.jpg',
    group: 'current',
  },
  {
    id: 'l6',
    name: 'Providence Muziranenge',
    role: 'Vice Coordinator',
    department: 'Current Leadership',
    bio: '',
    image: '/Providence.jpg',
    group: 'current',
  },
  {
    id: 'l7',
    name: 'Fidele Nshizirungu',
    role: 'Finance Manager',
    department: 'Current Leadership',
    bio: '',
    image: '/Fidele.jpg',
    group: 'current',
  },
  {
    id: 'l8',
    name: 'Pacifique Muhumure',
    role: 'Secretary',
    department: 'Current Leadership',
    bio: '',
    image: '/Pacifique.jpg',
    group: 'current',
  },
]

export const boardMembers = leaders.filter((leader) => leader.group === 'board')
export const currentLeadership = leaders.filter((leader) => leader.group === 'current')

export const departments: Department[] = [
  {
    id: 'executive',
    name: 'Executive Committee',
    description: 'Sets strategic direction and upholds the association’s mission and values.',
    focus: ['Governance', 'Strategy', 'Accountability'],
  },
  {
    id: 'programs',
    name: 'Programs Department',
    description: 'Designs and delivers education, leadership, mentorship, and community initiatives.',
    focus: ['Program design', 'Member engagement', 'Learning'],
  },
  {
    id: 'finance',
    name: 'Finance & Transparency',
    description: 'Manages resources responsibly and communicates financial practices clearly.',
    focus: ['Budgeting', 'Reporting', 'Stewardship'],
  },
  {
    id: 'partnerships',
    name: 'Partnerships & Outreach',
    description: 'Cultivates relationships that expand opportunity for refugee youth.',
    focus: ['Collaboration', 'Advocacy', 'Visibility'],
  },
  {
    id: 'communications',
    name: 'Communications & Media',
    description: 'Tells Rwoga’s story with dignity, accuracy, and care.',
    focus: ['Storytelling', 'Brand', 'Public voice'],
  },
  {
    id: 'welfare',
    name: 'Member Welfare & Sub-Families',
    description: 'Strengthens belonging through peer support structures and sub-family care.',
    focus: ['Wellbeing', 'Inclusion', 'Mutual aid'],
  },
]

export const partnerLogos = [
  {
    id: 'alu',
    name: 'African Leadership University',
    src: '/alu.svg',
  },
  {
    id: 'unhcr',
    name: 'UNHCR, The UN Refugee Agency',
    src: '/unhcr.png',
  },
  {
    id: 'world-vision',
    name: 'World Vision',
    src: '/worldvision.png',
  },
  {
    id: 'humanity',
    name: 'Humanity & Inclusion',
    src: '/humanity.png',
  },
] as const

export const partnerCategories: PartnerCategory[] = [
  {
    id: 'institutions',
    name: 'Institutions',
    description: 'Universities and institutions that expand learning, mentorship, and opportunity pathways.',
  },
  {
    id: 'organizations',
    name: 'Organizations',
    description: 'NGOs and civil society partners advancing refugee community development and empowerment.',
  },
  {
    id: 'volunteers',
    name: 'Volunteers',
    description: 'Individuals who contribute time, skills, and care to Rwoga initiatives.',
  },
  {
    id: 'supporters',
    name: 'Supporters',
    description: 'Allies who believe in creating opportunities for refugee communities through partnership and giving.',
  },
]

export const contributions: ContributionType[] = [
  {
    id: 'learning-materials',
    title: 'Learning Materials',
    description: 'Textbooks, stationery, and study resources that help refugee learners thrive.',
    icon: 'BookOpen',
  },
  {
    id: 'laptops',
    title: 'Laptops',
    description: 'Devices that open digital learning and academic opportunity for students.',
    icon: 'Laptop',
  },
  {
    id: 'books',
    title: 'Books',
    description: 'Reading and reference materials that strengthen educational access.',
    icon: 'BookOpen',
  },
  {
    id: 'vocational',
    title: 'Vocational Equipment',
    description: 'Tools such as sewing machines that enable sustainable livelihoods.',
    icon: 'Package',
  },
  {
    id: 'scholarships',
    title: 'Scholarships',
    description: 'Direct support that helps refugee learners continue their education.',
    icon: 'GraduationCap',
  },
  {
    id: 'training',
    title: 'Training',
    description: 'Workshops and skills sessions in leadership, careers, and livelihoods.',
    icon: 'Presentation',
  },
  {
    id: 'money',
    title: 'Financial Support',
    description: 'Flexible funding for education, community projects, and organizational capacity.',
    icon: 'HandCoins',
  },
  {
    id: 'skills',
    title: 'Professional Skills',
    description: 'Pro-bono expertise that strengthens programs, operations, and storytelling.',
    icon: 'Briefcase',
  },
]

export const getInvolvedPaths = [
  {
    title: 'Become a Member',
    description: 'Join Rwoga Family Association and take part in the work of supporting refugee communities.',
    to: 'https://forms.gle/gg9nByErKkpV4c8BA',
    label: 'Become a member',
    external: true,
  },
  {
    title: 'Become a Partner',
    description: 'Work with Rwoga as an institution, organization, or community ally.',
    to: '/contact',
    label: 'Explore partnerships',
    external: false,
  },
  {
    title: 'Sponsor a Program',
    description: 'Support a specific community initiative with clear goals and shared accountability.',
    to: '/contact',
    label: 'Sponsor a program',
    external: false,
  },
  {
    title: 'Donate Resources',
    description: 'Contribute learning materials, devices, books, equipment, or other practical tools.',
    to: '/donate',
    label: 'Donate resources',
    external: false,
  },
  {
    title: 'Mentor Students',
    description: 'Walk with refugee students through education, careers, and leadership growth.',
    to: '/contact',
    label: 'Become a mentor',
    external: false,
  },
  {
    title: 'Share Opportunities',
    description: 'Open doors through internships, scholarships, training, and professional networks.',
    to: '/contact',
    label: 'Share an opportunity',
    external: false,
  },
] as const

export const documents: DocumentItem[] = [
  {
    id: 'annual-report',
    title: 'Annual Reports',
    category: 'Annual Reports',
    description: 'Yearly overview of activities, learning, and organizational progress.',
    year: 'Forthcoming',
    status: 'coming-soon',
  },
  {
    id: 'impact-report',
    title: 'Impact Reports',
    category: 'Impact Reports',
    description: 'Program outcomes, stories, and lessons shared with honesty and care.',
    year: 'Forthcoming',
    status: 'coming-soon',
  },
]

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: IMAGES.community, alt: 'Community outreach with refugee families', category: 'Community Outreach', caption: 'Community outreach' },
  { id: 'g2', src: IMAGES.learning, alt: 'Students learning together', category: 'Education', caption: 'Education in action' },
  { id: 'g3', src: IMAGES.workshop, alt: 'Women empowerment vocational activity', category: 'Women Empowerment', caption: 'Women empowerment' },
  { id: 'g4', src: IMAGES.leadership, alt: 'Leadership discussion among youth', category: 'Leadership', caption: 'Leadership' },
  { id: 'g5', src: IMAGES.gathering, alt: 'Association event gathering', category: 'Events', caption: 'Events' },
  { id: 'g6', src: IMAGES.mentorship, alt: 'Mentorship conversation', category: 'Leadership', caption: 'Mentorship' },
  { id: 'g7', src: IMAGES.youth, alt: 'Youth engaged in conversation', category: 'Community Outreach', caption: 'Youth engagement' },
  { id: 'g8', src: IMAGES.books, alt: 'Educational books and learning materials', category: 'Education', caption: 'Learning materials' },
  { id: 'g9', src: IMAGES.campus, alt: 'Campus pathway representing higher education', category: 'Events', caption: 'Higher education pathways' },
]

export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    title: 'Women empowerment continues through sewing machine support',
    excerpt:
      'Rwoga’s women empowerment work includes sewing machine donations that help refugee women earn an income with dignity.',
    date: '2025',
    category: 'Success Stories',
    image: IMAGES.workshop,
  },
  {
    id: 'n2',
    title: 'Academic awards celebrate excellence in Kigeme',
    excerpt:
      'Top-performing students in Kigeme Refugee Camp were recognized for academic excellence.',
    date: '2025',
    category: 'Community Activities',
    image: IMAGES.campus,
  },
  {
    id: 'n3',
    title: 'Food support for families moving into Nyabiheke',
    excerpt:
      'Community outreach supported vulnerable families moving from Nkamira Transit Centre into Nyabiheke Refugee Camp.',
    date: '2024',
    category: 'Announcements',
    image: IMAGES.community,
  },
  {
    id: 'n4',
    title: 'Rwoga launches its official online presence',
    excerpt:
      'Our website marks a new chapter in open reporting, storytelling, and partnership-building for the association.',
    date: '2026',
    category: 'Latest News',
    image: IMAGES.leadership,
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'Who founded Rwoga Family Association?',
    answer:
      'Rwoga Family Association is a refugee-led association founded in 2019 by Congolese refugee students at African Leadership University. Today it brings together over 100 members committed to empowering refugee communities.',
  },
  {
    question: 'What does the name Rwoga mean?',
    answer:
      'Rwoga is a Kinyarwanda word meaning "the leading star" — a star that lights the way and guides others. It reflects our belief that every refugee has the potential to bring hope, lead others, and create positive change.',
  },
  {
    question: 'Who can get involved?',
    answer:
      'You are welcome to become a member, become a partner, sponsor a program, donate resources, mentor students, or share opportunities. Students, mentors, organizations, and community allies are all invited to take part.',
  },
  {
    question: 'How are donations used?',
    answer:
      'Your support helps refugee communities through learning materials, laptops, books, vocational equipment, scholarships, training, financial support, professional skills, and volunteer time. As we grow, we will publish financial and impact reports.',
  },
  {
    question: 'How can my organization partner with Rwoga?',
    answer:
      'We work with institutions, organizations, volunteers, and supporters who share our commitment to creating opportunities for refugee communities. Please get in touch with our leadership team to explore how we can work together.',
  },
]
