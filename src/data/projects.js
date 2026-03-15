/*
  projects.js — All project data
  Each project has: id, title, description, image (placeholder), tech tags,
  category (for filtering), GitHub link, live link, featured flag.

  ⚠️  Update GitHub/live URLs with your real links before deploying.
*/

export const projects = [
  {
    id: 1,
    title: 'AI Powered CV Screening System',
    description:
      'An intelligent resume screening tool that leverages NLP and machine learning to automatically rank and filter candidates based on job requirements. Features keyword extraction, skill matching, and candidate scoring.',
    tech: ['Python', 'Scikit-Learn', 'NLP', 'Pandas', 'Flask', 'NLTK'],
    category: 'ml',
    categoryLabel: 'Machine Learning',
    github: 'https://github.com/kibria-Rafi/cv-screening-system',
    live: '',
    featured: true,
    icon: '🤖',
    color: 'from-violet-600 to-purple-700',
  },
  {
    id: 2,
    title: 'Student Management System',
    description:
      'A comprehensive student management platform for academic institutions with features for enrollment, grade tracking, attendance, and performance analytics. Built with Python and a clean GUI.',
    tech: ['Python', 'Tkinter', 'SQLite', 'Pandas', 'Matplotlib'],
    category: 'python',
    categoryLabel: 'Python',
    github: 'https://github.com/kibria-Rafi/student-management-system',
    live: '',
    featured: false,
    icon: '🎓',
    color: 'from-blue-600 to-cyan-700',
  },
  {
    id: 3,
    title: 'Car Doctor Web Application',
    description:
      'Full-stack automotive service booking platform with real-time appointment scheduling, service catalog, user authentication, and admin dashboard. Features a polished React frontend with Node.js backend.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    category: 'mern',
    categoryLabel: 'MERN Stack',
    github: 'https://github.com/kibria-Rafi/car-doctor-web',
    live: 'https://car-doctor-demo.web.app',
    featured: true,
    icon: '🚗',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    id: 4,
    title: 'IoT Smart Agriculture Monitoring',
    description:
      'A real-time crop monitoring system integrating IoT sensors (temperature, humidity, soil moisture) with a web dashboard. Sends automated alerts and recommendations to farmers via SMS and web app.',
    tech: ['Arduino', 'Python', 'MQTT', 'React', 'Node.js', 'MongoDB'],
    category: 'iot',
    categoryLabel: 'IoT',
    github: 'https://github.com/kibria-Rafi/smart-agriculture-iot',
    live: '',
    featured: true,
    icon: '🌾',
    color: 'from-green-600 to-emerald-700',
  },
  {
    id: 5,
    title: 'Bangla Morphological Analyzer',
    description:
      'An NLP tool for processing and analyzing the morphological structure of Bengali language text. Supports stemming, lemmatization, POS tagging, and tokenization for Bangla script.',
    tech: ['Python', 'NLTK', 'spaCy', 'Regex', 'Unicode', 'Pandas'],
    category: 'ml',
    categoryLabel: 'NLP / ML',
    github: 'https://github.com/kibria-Rafi/bangla-morphological-analyzer',
    live: '',
    featured: false,
    icon: '🔤',
    color: 'from-orange-600 to-red-700',
  },
  {
    id: 6,
    title: 'House Price Prediction',
    description:
      'Machine learning regression model that predicts residential property prices based on features like location, size, amenities, and market trends. Includes data visualization and model comparison dashboard.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    category: 'ml',
    categoryLabel: 'Machine Learning',
    github: 'https://github.com/kibria-Rafi/house-price-prediction',
    live: '',
    featured: false,
    icon: '🏠',
    color: 'from-yellow-600 to-orange-700',
  },
  {
    id: 7,
    title: 'Campus TV — Full Stack Website',
    description:
      'A university media streaming and content management platform. Features live event streaming, video-on-demand, club news, and an admin panel for content creators. Supports 5,000+ concurrent users.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Cloudinary'],
    category: 'mern',
    categoryLabel: 'MERN Stack',
    github: 'https://github.com/kibria-Rafi/campus-tv',
    live: 'https://campus-tv-demo.netlify.app',
    featured: true,
    icon: '📺',
    color: 'from-indigo-600 to-violet-700',
  },
]

// Filter categories for the Projects section tabs
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'mern', label: 'MERN Stack' },
  { id: 'ml', label: 'ML / AI' },
  { id: 'python', label: 'Python' },
  { id: 'iot', label: 'IoT' },
]
