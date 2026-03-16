/*
  skills.js — Skills data organized into categories
  Each skill has: name, icon (emoji or react-icon key), and proficiency level (0–100).
*/

export const skillCategories = [
  {
    id: 'mern',
    title: 'MERN Stack',
    icon: '⚡',
    color: 'from-primary-500 to-cyan-500',
    borderColor: 'border-primary-500/30',
    glowColor: 'shadow-glow',
    skills: [
      { name: 'React.js', level: 90, icon: 'react' },
      { name: 'Node.js', level: 85, icon: 'nodejs' },
      { name: 'Express.js', level: 85, icon: 'express' },
      { name: 'MongoDB', level: 80, icon: 'mongodb' },
      { name: 'REST APIs', level: 88, icon: 'api' },
      { name: 'JWT Auth', level: 82, icon: 'security' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: '💻',
    color: 'from-violet-500 to-purple-600',
    borderColor: 'border-violet-500/30',
    glowColor: 'shadow-glow-violet',
    skills: [
      { name: 'JavaScript', level: 90, icon: 'js' },
      { name: 'Python', level: 88, icon: 'python' },
      { name: 'C / C++', level: 78, icon: 'cpp' },
      { name: 'Java', level: 72, icon: 'java' },
      { name: 'HTML5 / CSS3', level: 95, icon: 'html' },
      { name: 'SQL', level: 80, icon: 'sql' },
    ],
  },
  {
    id: 'datascience',
    title: 'Data Science & ML',
    icon: '📊',
    color: 'from-cyan-500 to-teal-500',
    borderColor: 'border-cyan-500/30',
    glowColor: 'shadow-glow-cyan',
    skills: [
      { name: 'NumPy', level: 85, icon: 'numpy' },
      { name: 'Pandas', level: 87, icon: 'pandas' },
      { name: 'Matplotlib', level: 82, icon: 'chart' },
      { name: 'Scikit-Learn', level: 80, icon: 'sklearn' },
      { name: 'NLP / NLTK', level: 75, icon: 'nlp' },
      { name: 'Jupyter', level: 90, icon: 'jupyter' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: '🔧',
    color: 'from-orange-500 to-amber-500',
    borderColor: 'border-orange-500/30',
    glowColor: '',
    skills: [
      { name: 'Git & GitHub', level: 92, icon: 'git' },
      { name: 'VS Code', level: 95, icon: 'vscode' },
      { name: 'MySQL', level: 82, icon: 'mysql' },
      { name: 'Figma', level: 70, icon: 'figma' },
      { name: 'Firebase', level: 75, icon: 'firebase' },
      { name: 'Tailwind CSS', level: 88, icon: 'tailwind' },
    ],
  },
]

// Card-oriented skills data used by the TechnicalSkills section
export const technicalSkillTabs = [
  {
    id: 'mern',
    label: 'MERN Stack',
    tabIcon: 'stack',
    accent: 'from-cyan-500/80 via-primary-500/70 to-violet-500/80',
    description: 'Full-stack JavaScript technologies for scalable web apps.',
    skills: [
      { name: 'MongoDB', icon: 'mongodb', note: 'NoSQL database' },
      { name: 'Express.js', icon: 'express', note: 'Backend API framework' },
      { name: 'React', icon: 'react', note: 'Component UI library' },
      { name: 'Node.js', icon: 'node', note: 'Runtime environment' },
      { name: 'REST APIs', icon: 'rest', note: 'Service architecture' },
      { name: 'JWT Authentication', icon: 'jwt', note: 'Secure auth flow' },
    ],
  },
  {
    id: 'languages',
    label: 'Programming Languages',
    tabIcon: 'code',
    accent: 'from-violet-500/80 via-fuchsia-500/70 to-indigo-500/80',
    description: 'Core languages for software, systems, and prototyping.',
    skills: [
      { name: 'Python', icon: 'python', note: 'Scripting and data workflows' },
      { name: 'JavaScript', icon: 'javascript', note: 'Web and app logic' },
      { name: 'C', icon: 'c', note: 'Low-level programming' },
      { name: 'C++', icon: 'cplusplus', note: 'Performance-focused development' },
      { name: 'Java', icon: 'java', note: 'OOP and backend systems' },
      { name: 'Arduino C', icon: 'arduino', note: 'Embedded firmware basics' },
    ],
  },
  {
    id: 'datascience',
    label: 'Data Science & ML',
    tabIcon: 'chart',
    accent: 'from-teal-500/80 via-cyan-500/70 to-blue-500/80',
    description: 'Data processing, analytics, and machine learning tooling.',
    skills: [
      { name: 'NumPy', icon: 'numpy', note: 'Numerical computing' },
      { name: 'Pandas', icon: 'pandas', note: 'Data wrangling' },
      { name: 'Matplotlib', icon: 'matplotlib', note: 'Data visualization' },
      { name: 'Scikit-Learn', icon: 'sklearn', note: 'ML models and evaluation' },
      { name: 'Machine Learning', icon: 'ml', note: 'Prediction and classification' },
      { name: 'Data Analysis', icon: 'analysis', note: 'Insight extraction' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    tabIcon: 'tools',
    accent: 'from-orange-500/80 via-amber-500/70 to-yellow-500/80',
    description: 'Developer workflow tools for shipping and collaboration.',
    skills: [
      { name: 'Git', icon: 'git', note: 'Version control' },
      { name: 'GitHub', icon: 'github', note: 'Repository collaboration' },
      { name: 'MySQL', icon: 'mysql', note: 'Relational database' },
      { name: 'SQL', icon: 'sql', note: 'Query language' },
      { name: 'Firebase', icon: 'firebase', note: 'Backend services' },
      { name: 'Figma', icon: 'figma', note: 'UI design tool' },
      { name: 'VS Code', icon: 'vscode', note: 'Primary code editor' },
    ],
  },
  {
    id: 'iot',
    label: 'IoT & Hardware',
    tabIcon: 'iot',
    accent: 'from-emerald-500/80 via-cyan-500/70 to-sky-500/80',
    description: 'Embedded systems and automation projects with hardware.',
    skills: [
      { name: 'Arduino', icon: 'arduino', note: 'Microcontroller platform' },
      { name: 'ESP32', icon: 'esp32', note: 'Wireless embedded board' },
      { name: 'IoT Automation', icon: 'automation', note: 'Smart device workflows' },
      { name: 'Sensors & Microcontrollers', icon: 'sensors', note: 'Hardware interfacing' },
    ],
  },
]

// Proficiency labels mapped to level ranges
export const proficiencyLabel = (level) => {
  if (level >= 90) return 'Expert'
  if (level >= 80) return 'Advanced'
  if (level >= 70) return 'Proficient'
  return 'Familiar'
}

// Flat list used in the hero / about section for quick display
export const topSkills = [
  'React', 'Node.js', 'Express', 'MongoDB',
  'Python', 'JavaScript', 'C++', 'Java',
  'NumPy', 'Pandas', 'Scikit-Learn', 'Git',
]
