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
    duration: 'February 2023 — December 2023',
    location: 'Dhaka, Bangladesh (Remote)',
    icon: '🤖',
    color: 'from-primary-500 to-cyan-500',
    dotColor: 'bg-primary-500',
    description:
      'Developed and maintained scalable web applications using the MERN stack. Collaborated with AI and machine learning engineers to integrate AI features and NLP models into production-ready web interfaces.',
    responsibilities: [
      'Built responsive React dashboards for AI-powered SaaS products',
      'Developed RESTful APIs using Node.js and Express',
      'Optimized MongoDB queries to improve API response time',
      'Implemented JWT-based authentication and secure API endpoints',
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'JWT', 'Git'],
  },
  {
    id: 2,
    role: 'Senior Marketing Manager',
    company: 'Art Vince',
    companyUrl: '#',
    type: 'Professional',
    duration: '2025 — Present',
    location: 'Dhaka, Bangladesh',
    icon: '🎨',
    color: 'from-violet-500 to-purple-600',
    dotColor: 'bg-violet-500',
    description:
      'Leading digital marketing strategies and brand development for a creative design agency. Managing campaigns, analytics, and brand growth across multiple digital platforms.',
    responsibilities: [
      'Plan and execute digital marketing campaigns',
      'Manage marketing budgets and performance analytics',
      'Lead creative and content teams',
      'Coordinate with clients to align business goals with marketing strategies',
    ],
    skills: ['Digital Marketing', 'Brand Strategy', 'Content Creation', 'Analytics', 'Team Leadership'],
  },
  {
    id: 3,
    role: 'Social Media Manager',
    company: 'University Community Page',
    companyUrl: '#',
    type: 'Personal Project / University Community Page',
    duration: '2019 — Present',
    location: 'Bangladesh',
    icon: '📱',
    color: 'from-cyan-500 to-teal-500',
    dotColor: 'bg-cyan-500',
    description:
      'Managing and growing a university-centered Facebook community focused on sharing updates, resources, and student activities.',
    responsibilities: [
      'Grew the community to 135,000+ followers',
      'Increased engagement through targeted content strategies',
      'Managed posts, analytics, and audience interaction',
    ],
    skills: ['Social Media Strategy', 'Content Creation', 'Facebook Ads', 'Analytics', 'Copywriting'],
  },
]

// Quick stats shown in the About section
export const stats = [
  { label: 'Years Experience', value: '3+', icon: '📅' },
  { label: 'Projects Completed', value: '15+', icon: '🚀' },
  { label: 'Social Media Audience', value: '135K+', icon: '👥' },
  { label: 'GitHub Contributions', value: '300+', icon: '💻' },
]
