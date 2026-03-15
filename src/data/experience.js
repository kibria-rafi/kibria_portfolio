/*
  experience.js — Work experience and timeline data
  ⚠️  Update dates, descriptions, and links with real info.
*/

export const experiences = [
  {
    id: 1,
    role: 'MERN Stack Developer',
    company: 'Shothik AI',
    companyUrl: 'https://shothik.ai',
    type: 'Professional',
    duration: 'Jan 2024 — Present',
    location: 'Dhaka, Bangladesh (Remote)',
    icon: '🤖',
    color: 'from-primary-500 to-cyan-500',
    dotColor: 'bg-primary-500',
    description:
      'Developing and maintaining AI-powered web applications using the MERN stack. Collaborate with ML engineers to integrate NLP models into production web interfaces.',
    responsibilities: [
      'Built responsive React dashboards for AI-powered SaaS products',
      'Developed RESTful APIs with Node.js and Express for ML model integration',
      'Optimized MongoDB queries, reducing API response time by 40%',
      'Implemented JWT-based authentication and role-based access control',
      'Participated in agile sprints and code reviews',
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'JWT', 'Git'],
  },
  {
    id: 2,
    role: 'Senior Marketing Manager',
    company: 'Art Vince',
    companyUrl: '#',
    type: 'Professional',
    duration: 'Jun 2023 — Dec 2023',
    location: 'Dhaka, Bangladesh',
    icon: '🎨',
    color: 'from-violet-500 to-purple-600',
    dotColor: 'bg-violet-500',
    description:
      'Led digital marketing strategy and brand development for a creative design agency, managing cross-platform campaigns and growing the brand\'s digital presence.',
    responsibilities: [
      'Developed and executed digital marketing strategies across multiple channels',
      'Managed a team of 5 content creators and graphic designers',
      'Grew company social media presence by 60% in 6 months',
      'Analyzed campaign metrics and produced monthly performance reports',
      'Coordinated with clients to align marketing goals with business objectives',
    ],
    skills: ['Digital Marketing', 'Brand Strategy', 'Content Creation', 'Analytics', 'Team Leadership'],
  },
  {
    id: 3,
    role: 'Social Media Manager',
    company: 'Freelance / Independent',
    companyUrl: '#',
    type: 'Freelance',
    duration: 'Jan 2022 — May 2023',
    location: 'Remote',
    icon: '📱',
    color: 'from-cyan-500 to-teal-500',
    dotColor: 'bg-cyan-500',
    description:
      'Managed and grew social media accounts for multiple brands, achieving a combined audience of 135,000+ followers across platforms through data-driven content strategies.',
    responsibilities: [
      'Grew combined social media audience to 135,000+ followers',
      'Produced 50+ pieces of content monthly across Instagram, Facebook, and TikTok',
      'Increased average engagement rate to 8.5% (industry avg: 3–4%)',
      'Ran targeted ad campaigns with 3.2× average ROAS',
      'Built and maintained brand voice and content calendars for 6+ clients',
    ],
    skills: ['Social Media Strategy', 'Content Creation', 'Facebook Ads', 'Analytics', 'Copywriting'],
  },
]

// Quick stats shown in the About section
export const stats = [
  { label: 'Years Experience', value: '3+', icon: '📅' },
  { label: 'Projects Completed', value: '15+', icon: '🚀' },
  { label: 'Social Media Audience', value: '135K+', icon: '👥' },
  { label: 'GitHub Contributions', value: '500+', icon: '💻' },
]
