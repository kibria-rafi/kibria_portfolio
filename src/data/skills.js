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
