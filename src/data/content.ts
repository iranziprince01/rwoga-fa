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

/** High-quality Unsplash placeholders, Cloudinary-ready via getImageUrl */
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80',
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
    'Rwoga Family Association is a refugee-led youth association founded by Congolese refugee students at African Leadership University. Established in 2019, the Association exists to foster unity among refugee students while creating meaningful opportunities for refugee communities through education, mentorship, community service, and sustainable development initiatives.',
    'Today, Rwoga brings together over one hundred members who believe that lasting change begins when communities invest in one another.',
  ],
  whoWeAreHome: [
    'Rwoga Family Association began in 2019 when 5 Congolese refugee students at The African Leadership University came together to support one another academically, socially, and emotionally. What started as a small family has grown into a vibrant association of more than 100 members united by a shared commitment to giving back to refugee communities.',
    'Driven by compassion, accountability, and collective action, our members contribute their own stipends, time, and skills to support educational, economic, and community development initiatives across refugee camps in Rwanda.',
  ],
  meaning: [
    'Rwoga is a Kinyarwanda word meaning "the leading star" - a bright star that shines ahead and guides others.',
    'This name reflects our belief that every refugee has the potential to become a source of hope, leadership, and positive change within their community.',
    'Just as a leading star illuminates the path for others, Rwoga seeks to empower individuals who will inspire and uplift future generations.',
  ],
  mission:
    'To unite refugee students and alumni in creating opportunities, supporting vulnerable communities, and inspiring future generations through collective action, mentorship, and impactful community initiatives.',
  vision:
    'To become a trusted refugee-led association empowering communities through education, leadership, innovation, and sustainable development.',
  philosophy:
    'We lead as peers and siblings. Our leadership model is rooted in service, accountability, and the belief that those closest to the challenge are closest to the solution.',
}

export const values: ValueItem[] = [
  {
    title: 'Time Management and Commitment',
    description: 'We honor our responsibilities with discipline, reliability, and steady dedication to the communities we serve.',
    icon: 'Clock',
  },
  {
    title: 'Constructive Support and Solidarity',
    description: 'We stand with one another and with refugee communities through practical care, encouragement, and unity.',
    icon: 'Users',
  },
  {
    title: 'Accountability and Responsibility',
    description: 'We act with integrity, transparency, and ownership in every initiative we undertake.',
    icon: 'Shield',
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
    id: 'members',
    value: 100,
    suffix: '+',
    label: 'Members',
  },
  {
    id: 'founded',
    value: 2019,
    label: 'Founded',
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
    label: 'Community Projects',
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
    title: 'A support network begins',
    description:
      '5 Congolese refugee students at The African Leadership University formed Rwoga as a support network where members could share meals, experiences, academic guidance, and encouragement.',
  },
  {
    year: '2020',
    title: 'The family grows',
    description:
      'Rwoga welcomed approximately 20 new refugee students from refugee camps across Rwanda, strengthening the family and expanding its vision.',
  },
  {
    year: '2021',
    title: 'First community outreach',
    description:
      'The Association organized its first community outreach at Gakoni High School, inspiring refugee secondary school students to pursue academic excellence and higher education opportunities.',
  },
  {
    year: '2022',
    title: 'Expanding support',
    description:
      "Rwoga expanded significantly with the introduction of ALU's new intake model and launched initiatives supporting fellow refugee university students from other universities through laptop donations.",
  },
  {
    year: '2024',
    title: 'Food assistance in transition',
    description:
      'Community outreach expanded through food assistance for vulnerable families transitioning into Nyabiheke Refugee Camp from Nkamira transit.',
  },
  {
    year: '2025',
    title: 'Women empowerment and excellence',
    description:
      'Women empowerment and educational excellence became key priorities through 5 sewing machine donations in Kiziba refugee camp and academic awards to top-performing students in Kigeme refugee camp.',
  },
  {
    year: 'Today',
    title: 'Growing with purpose',
    description:
      'Rwoga continues to grow as a trusted refugee-led association committed to empowering communities through sustainable and impactful initiatives.',
  },
]

export const programs: Program[] = [
  {
    id: 'student-leadership',
    title: 'Student Leadership',
    summary: 'Preparing refugee students to lead with integrity, confidence, and service.',
    description:
      'Through peer leadership practice, workshops, and collective decision-making, members develop the skills to guide teams and serve their communities with accountability.',
    outcomes: [
      'Stronger leadership confidence among members',
      'Practical experience coordinating initiatives',
      'A growing pipeline of ethical youth leaders',
    ],
    futureGoals: [
      'Expand leadership fellowships across cohorts',
      'Document member-led case studies',
      'Strengthen alumni leadership pathways',
    ],
    icon: 'Compass',
    image: IMAGES.leadership,
  },
  {
    id: 'educational-support',
    title: 'Educational Support',
    summary: 'Mentorship, learning resources, scholarships, and academic encouragement for refugee learners.',
    description:
      'We support refugee learners with peer guidance, learning materials, academic encouragement, and pathways that help them pursue excellence in school and higher education.',
    outcomes: [
      'Improved academic confidence and study habits',
      'Access to learning materials and guidance',
      'Recognition of academic excellence in refugee communities',
    ],
    futureGoals: [
      'Grow scholarship and award pathways',
      'Build a shared learning resource library',
      'Expand tutoring networks across camps and campuses',
    ],
    icon: 'GraduationCap',
    image: IMAGES.learning,
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    summary: 'Practical tools, vocational opportunities, and sustainable livelihood initiatives for women.',
    description:
      'Rwoga supports refugee women with vocational equipment and livelihood pathways that restore dignity and economic agency, including sewing machine donations and skills-centered outreach.',
    outcomes: [
      'Women equipped with tools for income generation',
      'Stronger livelihood pathways for single mothers',
      'Community-led models for women’s empowerment',
    ],
    futureGoals: [
      'Scale vocational equipment support across camps',
      'Pair tools with training and market linkages',
      'Document livelihood outcomes with community partners',
    ],
    icon: 'Heart',
    image: IMAGES.workshop,
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach',
    summary: 'Meaningful projects that improve the well-being of refugee families and communities.',
    description:
      'From school visits to food assistance for families in transition, our outreach initiatives respond to real needs across refugee communities in Rwanda.',
    outcomes: [
      'Direct support for vulnerable families',
      'Inspiration for secondary school students',
      'Stronger ties between university members and camps',
    ],
    futureGoals: [
      'Deepen outreach across more refugee communities',
      'Coordinate with camp partners for sustained impact',
      'Publish outreach learning in annual reports',
    ],
    icon: 'Home',
    image: IMAGES.community,
  },
  {
    id: 'career-development',
    title: 'Career Development',
    summary: 'Pathways that prepare members for work, internships, and professional growth.',
    description:
      'We help refugee students and alumni build career readiness through exposure, guidance, and practical professional development opportunities.',
    outcomes: [
      'Greater readiness for internships and employment',
      'Clearer professional direction for members',
      'Stronger networks with mentors and employers',
    ],
    futureGoals: [
      'Host career clinics and portfolio workshops',
      'Build internship pathways with aligned partners',
      'Connect alumni mentors with current students',
    ],
    icon: 'Briefcase',
    image: IMAGES.campus,
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    summary: 'Connecting refugee youth with mentors, role models, and peer guides.',
    description:
      'Mentorship pairs members with peers and professionals who offer guidance on education, careers, wellbeing, and navigating life as refugee leaders.',
    outcomes: [
      'Trusted relationships that support growth',
      'Practical advice for education and careers',
      'Stronger sense of belonging and direction',
    ],
    futureGoals: [
      'Grow a vetted mentor network across sectors',
      'Introduce structured mentorship pathways',
      'Track mentorship quality through member feedback',
    ],
    icon: 'Users',
    image: IMAGES.mentorship,
  },
  {
    id: 'youth-empowerment',
    title: 'Youth Empowerment',
    summary: 'Preparing refugee youth to become leaders, innovators, and changemakers.',
    description:
      'We invest in refugee youth as agents of change, equipping them with confidence, skills, and platforms to shape their communities.',
    outcomes: [
      'Youth leading initiatives in their communities',
      'Increased confidence and civic engagement',
      'Peer models of refugee-led change',
    ],
    futureGoals: [
      'Expand youth-led project incubators',
      'Celebrate youth excellence across camps',
      'Strengthen peer advocacy networks',
    ],
    icon: 'Sparkles',
    image: IMAGES.youth,
  },
  {
    id: 'digital-literacy',
    title: 'Digital Literacy',
    summary: 'Digital skills and device access that open doors to learning and opportunity.',
    description:
      'Through device support, digital skills exposure, and peer learning, we help refugee students participate fully in modern education and work.',
    outcomes: [
      'Improved access to digital learning tools',
      'Stronger digital confidence among students',
      'Laptop and device support for university learners',
    ],
    futureGoals: [
      'Expand digital skills workshops',
      'Grow device donation pathways',
      'Partner on sustainable tech access models',
    ],
    icon: 'Laptop',
    image: IMAGES.books,
  },
  {
    id: 'volunteerism',
    title: 'Volunteerism',
    summary: 'Members contributing time, stipends, and skills to serve refugee communities.',
    description:
      'Volunteerism is at the heart of Rwoga. Members give their own stipends, time, and skills to support educational, economic, and community development initiatives.',
    outcomes: [
      'A culture of service across the association',
      'Member-led projects delivered with accountability',
      'Collective action that multiplies individual effort',
    ],
    futureGoals: [
      'Strengthen volunteer coordination systems',
      'Recognize outstanding member service',
      'Invite external allies into structured volunteer roles',
    ],
    icon: 'Clock',
    image: IMAGES.gathering,
  },
]

export const projects: Project[] = [
  {
    id: 'sewing-hope',
    title: 'Sewing Hope',
    summary:
      'Providing sewing machines so refugee women can generate income and provide for their families with dignity.',
    description:
      'In Mugombwa Refugee Camp, 3 single mothers had tailoring skills but no sewing machines. Through contributions made by Congolese refugee university students, Rwoga provided 3 sewing machines, enabling these women to generate income and provide for their families with dignity. Similar women empowerment efforts continued with sewing machine donations in Kiziba refugee camp.',
    status: 'completed',
    category: 'Women Empowerment',
    impactHighlights: [
      '3 sewing machines donated in Mugombwa Refugee Camp',
      'Single mothers supported to earn income with dignity',
      'Model expanded with further donations in Kiziba',
    ],
    image: IMAGES.workshop,
    gallery: [IMAGES.workshop, IMAGES.community, IMAGES.gathering],
  },
  {
    id: 'learning-without-limits',
    title: 'Learning Without Limits',
    summary: 'Laptop donations and academic support helping refugee university students continue learning.',
    description:
      'Rwoga launched initiatives supporting fellow refugee university students from other universities through laptop donations, removing barriers to digital learning and academic progress.',
    status: 'completed',
    category: 'Education',
    impactHighlights: [
      'Laptop support for refugee university students',
      'Stronger digital access for learning',
      'Peer solidarity across universities',
    ],
    image: IMAGES.learning,
    gallery: [IMAGES.learning, IMAGES.books, IMAGES.campus],
  },
  {
    id: 'food-with-dignity',
    title: 'Food With Dignity',
    summary: 'Food assistance for vulnerable families transitioning into Nyabiheke Refugee Camp.',
    description:
      'Community outreach expanded through food assistance for vulnerable families transitioning into Nyabiheke Refugee Camp from Nkamira transit, offering practical support during a critical period of resettlement.',
    status: 'completed',
    category: 'Community Outreach',
    impactHighlights: [
      'Food assistance for families in transition',
      'Support during movement from Nkamira to Nyabiheke',
      'Community care grounded in dignity',
    ],
    image: IMAGES.community,
    gallery: [IMAGES.community, IMAGES.gathering, IMAGES.youth],
  },
  {
    id: 'recognizing-excellence',
    title: 'Recognizing Excellence',
    summary: 'Academic awards celebrating top-performing students in Kigeme refugee camp.',
    description:
      'Educational excellence became a key priority through academic awards to top-performing students in Kigeme refugee camp, affirming achievement and inspiring continued pursuit of education.',
    status: 'completed',
    category: 'Education',
    impactHighlights: [
      'Academic awards for top-performing students',
      'Recognition that motivates educational excellence',
      'Visible celebration of refugee learner achievement',
    ],
    image: IMAGES.campus,
    gallery: [IMAGES.campus, IMAGES.learning, IMAGES.youth],
  },
  {
    id: 'gakoni-outreach',
    title: 'Gakoni High School Outreach',
    summary: 'Inspiring refugee secondary school students to pursue academic excellence and higher education.',
    description:
      'In 2021, the Association organized its first community outreach at Gakoni High School, inspiring refugee secondary school students to pursue academic excellence and higher education opportunities.',
    status: 'completed',
    category: 'Community Outreach',
    impactHighlights: [
      'First formal community outreach delivered',
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
      'In Mugombwa Refugee Camp, sewing machines helped single mothers turn existing skills into dignified income.',
    body: 'In Mugombwa Refugee Camp, 3 single mothers had tailoring skills but no sewing machines. Through contributions made by Congolese refugee university students, Rwoga provided 3 sewing machines, enabling these women to generate income and provide for their families with dignity.',
    image: IMAGES.workshop,
    challenge:
      'Three single mothers in Mugombwa Refugee Camp had tailoring skills but lacked sewing machines to earn a living.',
    action:
      'Congolese refugee university students contributed their own resources so Rwoga could provide three sewing machines.',
    impact:
      'The women gained tools to generate income and provide for their families with dignity.',
    nextSteps:
      'Continue expanding vocational equipment support, including further sewing machine donations in camps such as Kiziba.',
  },
  {
    id: 'learning-without-limits',
    title: 'Learning Without Limits',
    excerpt:
      'Laptop donations opened digital learning pathways for refugee university students beyond ALU.',
    body: 'As Rwoga expanded, members launched initiatives supporting fellow refugee university students from other universities through laptop donations, helping remove barriers to digital learning and academic progress.',
    image: IMAGES.learning,
    challenge:
      'Refugee university students faced barriers to digital access needed for modern academic work.',
    action:
      'Rwoga organized laptop donation support for fellow refugee students studying at other universities.',
    impact:
      'Students gained tools to continue learning, collaborate, and stay connected to academic opportunity.',
    nextSteps:
      'Grow device donation and digital literacy pathways so more learners can study without limits.',
  },
  {
    id: 'food-with-dignity',
    title: 'Food With Dignity',
    excerpt:
      'Food assistance supported vulnerable families transitioning into Nyabiheke Refugee Camp from Nkamira transit.',
    body: 'Community outreach expanded through food assistance for vulnerable families transitioning into Nyabiheke Refugee Camp from Nkamira transit, offering practical care during a critical period of resettlement.',
    image: IMAGES.community,
    challenge:
      'Vulnerable families needed immediate support while transitioning into Nyabiheke Refugee Camp from Nkamira transit.',
    action:
      'Rwoga mobilized community outreach to provide food assistance with care and respect.',
    impact:
      'Families received practical support during a difficult transition, grounded in dignity rather than charity alone.',
    nextSteps:
      'Continue responsive outreach that meets urgent community needs while building longer-term development initiatives.',
  },
  {
    id: 'recognizing-excellence',
    title: 'Recognizing Excellence',
    excerpt:
      'Academic awards in Kigeme refugee camp celebrated top-performing students and inspired educational ambition.',
    body: 'Educational excellence became a key priority through academic awards to top-performing students in Kigeme refugee camp, affirming achievement and inspiring continued pursuit of education.',
    image: IMAGES.campus,
    challenge:
      'Outstanding refugee learners needed recognition that affirms effort and encourages continued excellence.',
    action:
      'Rwoga awarded academic recognition to top-performing students in Kigeme refugee camp.',
    impact:
      'Students were celebrated publicly, reinforcing education as a pathway to leadership and opportunity.',
    nextSteps:
      'Expand academic awards, mentorship, and learning resources across more refugee communities.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Rwoga feels like family: a place where refugee students can lead, learn, and belong without having to explain why they matter.',
    name: 'Kevin Ishimwe',
    role: 'Member',
    image: IMAGES.portrait2,
  },
  {
    id: 't2',
    quote:
      'What stands out is the seriousness of the vision. This is youth leadership with structure, values, and a clear commitment to transparency.',
    name: 'Jean Bosco',
    role: 'Community Leader at Nyabiheke Camp',
    image: IMAGES.portrait3,
  },
  {
    id: 't3',
    quote:
      'The association’s strength is authenticity. It is built by refugee youth, for refugee youth, and you can feel that in every initiative.',
    name: 'Eugene',
    role: 'Financial Aid Coordinator at ALU',
    image: IMAGES.portrait4,
  },
]

export const leaders: Leader[] = [
  {
    id: 'l1',
    name: 'Leadership Seat',
    role: 'Chairperson',
    department: 'Executive Committee',
    bio: 'Guides the association’s strategic direction, external representation, and overall accountability to members.',
    image: IMAGES.portrait1,
  },
  {
    id: 'l2',
    name: 'Leadership Seat',
    role: 'Vice Chairperson',
    department: 'Executive Committee',
    bio: 'Supports executive coordination and ensures continuity across departments and member initiatives.',
    image: IMAGES.portrait2,
  },
  {
    id: 'l3',
    name: 'Leadership Seat',
    role: 'Secretary General',
    department: 'Governance',
    bio: 'Oversees documentation, meetings, institutional memory, and internal communication.',
    image: IMAGES.portrait3,
  },
  {
    id: 'l4',
    name: 'Leadership Seat',
    role: 'Treasurer',
    department: 'Finance & Transparency',
    bio: 'Stewards financial integrity, budgeting discipline, and transparent reporting practices.',
    image: IMAGES.portrait4,
  },
  {
    id: 'l5',
    name: 'Leadership Seat',
    role: 'Programs Lead',
    department: 'Programs',
    bio: 'Coordinates education, mentorship, and leadership initiatives with member input.',
    image: IMAGES.portrait5,
  },
  {
    id: 'l6',
    name: 'Leadership Seat',
    role: 'Partnerships Lead',
    department: 'Partnerships',
    bio: 'Builds ethical collaborations with institutions, mentors, and mission-aligned organizations.',
    image: IMAGES.portrait6,
  },
]

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
  {
    id: 'time',
    title: 'Volunteer Time',
    description: 'Hands-on support for outreach, tutoring, events, and community care.',
    icon: 'Clock',
  },
]

export const getInvolvedPaths = [
  {
    title: 'Volunteer',
    description: 'Offer your time to support outreach, tutoring, events, and community initiatives.',
    to: '/contact',
    label: 'Offer your time',
  },
  {
    title: 'Become a Partner',
    description: 'Collaborate with Rwoga as an institution, organization, or mission-aligned ally.',
    to: '/partners',
    label: 'Explore partnerships',
  },
  {
    title: 'Sponsor a Project',
    description: 'Underwrite a specific community initiative with clear goals and accountability.',
    to: '/contact',
    label: 'Sponsor a project',
  },
  {
    title: 'Donate Resources',
    description: 'Contribute learning materials, devices, books, equipment, or other practical tools.',
    to: '/donate',
    label: 'Donate resources',
  },
  {
    title: 'Mentor Students',
    description: 'Walk with refugee students through education, careers, and leadership growth.',
    to: '/contact',
    label: 'Become a mentor',
  },
  {
    title: 'Share Opportunities',
    description: 'Open doors through internships, scholarships, trainings, and professional networks.',
    to: '/contact',
    label: 'Share an opportunity',
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
  {
    id: 'financial-report',
    title: 'Financial Reports',
    category: 'Financial Reports',
    description: 'Transparent reporting on stewardship, budgeting, and resource use.',
    year: 'Forthcoming',
    status: 'coming-soon',
  },
  {
    id: 'constitution',
    title: 'Constitution',
    category: 'Governance',
    description: 'Foundational rules, member rights, and organizational structure.',
    status: 'coming-soon',
  },
  {
    id: 'governance',
    title: 'Governance',
    category: 'Governance',
    description: 'How decisions are made, documented, and reviewed across the association.',
    status: 'coming-soon',
  },
  {
    id: 'leadership-structure',
    title: 'Leadership Structure',
    category: 'Governance',
    description: 'Overview of the leadership committee, departments, sub-families, and volunteers.',
    status: 'coming-soon',
  },
  {
    id: 'policies',
    title: 'Policies',
    category: 'Policies',
    description: 'Standards that guide ethical, safe, and accountable community participation.',
    status: 'coming-soon',
  },
]

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: IMAGES.community, alt: 'Community outreach with refugee families', category: 'Community Outreach', caption: 'Community outreach' },
  { id: 'g2', src: IMAGES.learning, alt: 'Students learning together', category: 'Education', caption: 'Education in action' },
  { id: 'g3', src: IMAGES.workshop, alt: 'Women empowerment vocational activity', category: "Women's Empowerment", caption: 'Women empowerment' },
  { id: 'g4', src: IMAGES.leadership, alt: 'Leadership discussion among youth', category: 'Leadership', caption: 'Leadership' },
  { id: 'g5', src: IMAGES.gathering, alt: 'Association event gathering', category: 'Events', caption: 'Events' },
  { id: 'g6', src: IMAGES.mentorship, alt: 'Volunteers supporting community members', category: 'Volunteers', caption: 'Volunteers' },
  { id: 'g7', src: IMAGES.youth, alt: 'Youth engaged in conversation', category: 'Leadership', caption: 'Youth leadership' },
  { id: 'g8', src: IMAGES.books, alt: 'Educational books and learning materials', category: 'Education', caption: 'Learning materials' },
  { id: 'g9', src: IMAGES.campus, alt: 'Campus pathway representing higher education', category: 'Events', caption: 'Higher education pathways' },
]

export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    title: 'Women empowerment continues through sewing machine support',
    excerpt:
      'Rwoga’s women empowerment work includes sewing machine donations that help refugee women generate income with dignity.',
    date: '2025',
    category: 'Success Stories',
    image: IMAGES.workshop,
  },
  {
    id: 'n2',
    title: 'Academic awards celebrate excellence in Kigeme',
    excerpt:
      'Top-performing students in Kigeme refugee camp were recognized for academic excellence.',
    date: '2025',
    category: 'Community Activities',
    image: IMAGES.campus,
  },
  {
    id: 'n3',
    title: 'Food assistance for families transitioning into Nyabiheke',
    excerpt:
      'Community outreach supported vulnerable families moving from Nkamira transit into Nyabiheke Refugee Camp.',
    date: '2024',
    category: 'Announcements',
    image: IMAGES.community,
  },
  {
    id: 'n4',
    title: 'Rwoga launches its official online presence',
    excerpt:
      'Our website marks a new chapter in transparency, storytelling, and partnership-building for the association.',
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
      'Rwoga is a Kinyarwanda word meaning "the leading star" — a bright star that shines ahead and guides others. It reflects our belief that every refugee can become a source of hope, leadership, and positive change.',
  },
  {
    question: 'Who can get involved?',
    answer:
      'You can volunteer, become a partner, sponsor a project, donate resources, mentor students, or share opportunities. Students, mentors, organizations, and community allies are welcome.',
  },
  {
    question: 'How are donations used?',
    answer:
      'Support helps refugee communities through learning materials, laptops, books, vocational equipment, scholarships, training, financial support, professional skills, and volunteer time. As we grow, we will publish financial and impact reports.',
  },
  {
    question: 'How can my organization partner with Rwoga?',
    answer:
      'Our work is strengthened through collaboration with institutions, organizations, volunteers, and supporters. Contact our leadership team to explore meaningful collaboration opportunities.',
  },
]
