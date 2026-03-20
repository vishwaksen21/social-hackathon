// ─── Site-wide content ────────────────────────────────────────────────────────

export const REGISTER_URL = 'https://forms.gle/rhsDzdD9VukHzfuj6'
export const EVENT_DATE = new Date('May 13, 2026 00:00:00')

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Themes', path: '/themes' },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Prizes', path: '/prizes' },
  { label: 'Team', path: '/team' },
  { label: 'Results', path: '/results' },
  { label: 'FAQs', path: '/faqs' },
]

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/socialhackathon_cmrit?utm_source=qr&igsh=enExdmZpNHl1OHBw',
  linkedin: 'https://www.linkedin.com/in/innovation-club-4847a2333/',
  email: 'mailto:innovationclub@cmrit.ac.in',
  phone: '+91 7975790986',
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '24H', label: 'Hackathon Duration' },
  { value: '₹50K', label: 'Prize Pool' },
  { value: '2-4', label: 'Team Size' },
  { value: '100+', label: 'Teams Registered' },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    text: 'The Social Hackathon was an incredible experience that pushed us to think creatively about real-world problems. Our team developed solutions we never thought possible in just 24 hours.',
    author: 'Innovation Club Member',
    role: 'CMRIT, Bangalore',
  },
  {
    text: 'What sets this hackathon apart is the emphasis on social impact. We weren\'t just building cool tech; we were designing solutions that could genuinely improve people\'s lives.',
    author: 'Participating Student',
    role: 'RV College of Engineering',
  },
  {
    text: 'The mentorship and support provided by the organizers was exceptional. The event was well-organized and provided a perfect platform for showcasing our innovative ideas.',
    author: 'Finalist Team Lead',
    role: 'SIT Tumkur',
  },
]

// ─── Key dates timeline (About page) ─────────────────────────────────────────
export const KEY_DATES = [
  { date: 'March 17, 2026', event: 'Registration Opens' },
  { date: 'April 23, 2026', event: 'Registration & Round 1 Closes' },
  { date: 'May 5, 2026', event: 'Round 1 Results Announced' },
  { date: 'May 13–14, 2026', event: 'Final Round – In-Campus Hackathon' },
]

// ─── Themes ───────────────────────────────────────────────────────────────────
export interface Theme {
  id: number
  icon: string
  title: string
  description: string
  focuses: string[]
}

export const THEMES: Theme[] = [
  {
    id: 1,
    icon: '/themes/indi.jpg',
    title: 'Student Innovation using IndiaStack',
    description: "Leverage IndiaStack's digital infrastructure (Aadhaar, UPI, DigiLocker, etc.) to create innovative solutions that enhance governance, finance, and public services.",
    focuses: [
      'Financial Inclusion Solutions',
      'E-Governance Platforms',
      'Secure Digital Identity Verification',
      'Healthcare Innovations',
      'Paperless Documentation Systems',
      'Fraud Prevention Mechanisms',
      'Digital Credit & Loan Platforms',
      'Blockchain-based Public Records Management',
      'Instant Digital Certification Systems',
      'AI-powered Public Service Chatbots',
    ],
  },
  {
    id: 2,
    icon: '/themes/urban-planning.jpg',
    title: 'Urban Planning',
    description: 'Design smart, sustainable, and tech-driven urban solutions to optimize transportation, housing, and public infrastructure for better city living.',
    focuses: [
      'Smart Traffic Management',
      'Sustainable Waste Management',
      'Water Conservation Technologies',
      'Energy-efficient Systems',
      'Urban Air Quality Monitoring',
      'Affordable Housing Solutions',
      'Smart Public Transport Systems',
      'Green Infrastructure Planning',
      'Disaster Management Systems',
      'Land Use Optimization',
    ],
  },
  {
    id: 3,
    icon: '/themes/education.jpg',
    title: 'Education',
    description: 'Develop AI-driven, personalized, and accessible learning platforms to improve education quality, inclusivity, and skill development.',
    focuses: [
      'Personalized Learning Platforms',
      'Gamified Education Tools',
      'AR/VR-based Learning Experiences',
      'Digital Classrooms & Remote Learning',
      'AI-powered Student Assessment Tools',
      'Low-cost or Offline Learning Solutions',
      'Interactive Coding & STEM Learning Apps',
      'Language Learning Tools',
      'Teacher Support Systems',
      'Scholarship & Financial Aid Platforms',
    ],
  },
  {
    id: 4,
    icon: '/themes/energy-efficiency.jpg',
    title: 'Energy Efficiency in AI/Computing',
    description: 'Optimize AI models and computing systems to reduce energy consumption, improve sustainability, and lower carbon footprints.',
    focuses: [
      'Energy-efficient AI Algorithms',
      'Green Data Center Solutions',
      'Low-power Computing Hardware',
      'Edge Computing Solutions',
      'Smart Power Management Systems',
      'Renewable Energy Integration',
      'Optimized Cooling Technologies',
      'Energy-aware Software Development',
      'AI-powered Smart Homes',
      'Blockchain-based Sustainability Tracking',
    ],
  },
  {
    id: 5,
    icon: '/themes/healthcare.jpg',
    title: 'Health and Inclusivity',
    description: 'Create solutions that improve healthcare accessibility, particularly for underserved communities, through telemedicine, AI diagnostics, and digital health records.',
    focuses: [
      'Diagnostics & Health Monitoring',
      'Digital solution for neurodiversity',
      'Assistive Technologies',
      'Wearable Health Devices',
      'Emergency Response Systems',
      'Augmentative and Alternative Communication (AAC) Tools',
      'Cognitive Training Applications',
      'Elderly Care Technology',
      'Digital Health Records & Patient Portals',
      'Telemedicine Solutions',
    ],
  },
  {
    id: 6,
    icon: '/themes/agriculture.jpg',
    title: 'Agriculture',
    description: 'Technology can revolutionize farming, food production, and sustainability, making agriculture more efficient and resilient to climate change.',
    focuses: [
      'Smart Irrigation Systems',
      'Crop Monitoring System',
      'Sustainable Farming Practices',
      'Digital Platforms for Farmers',
      'Automated Pest & Disease Detection',
      'Blockchain-based Food Supply Chain Transparency',
      'Precision Farming Tools',
      'Weather Forecasting Models',
      'Smart Warehousing & Logistics',
      'Livestock Management',
    ],
  },
  {
    id: 7,
    icon: '/themes/animal-welfare.jpg',
    title: 'Animal Welfare',
    description: 'Technology can improve animal welfare, rescue efforts, and conservation, ensuring better care and protection.',
    focuses: [
      'Wildlife Monitoring Systems',
      'Smart Rescue & Adoption Platforms',
      'AI-driven Veterinary Diagnostics',
      'Wearable Tech for Pets & Livestock',
      'Anti-Poaching & Conservation Tools',
      'Sustainable & Ethical Animal Products',
      'Smart Feeding & Habitat Solutions',
      'Data-driven Animal Protection Campaigns',
      'Pet Health & Fitness Apps',
      'Blockchain-based Wildlife Protection Records',
    ],
  },
]

// ─── Event Timeline ───────────────────────────────────────────────────────────
export const EVENT_TIMELINE = [
  { step: 1, event: 'Registration', date: '17th March – 23rd April 2026', side: 'left' },
  { step: 2, event: 'Round 1: Submission of Idea', date: '17th March – 23rd April 2026', side: 'right' },
  { step: 3, event: 'Results of Round 1', date: '5th May 2026', side: 'left' },
  { step: 4, event: 'Round 2 / Final Round', date: '13th – 14th May 2026 (Offline, In-Campus)', side: 'right' },
]

// ─── Day Schedule ─────────────────────────────────────────────────────────────
export const DAY1_SCHEDULE = [
  { time: '08:00', event: 'Check-in', location: 'Registration Desk' },
  { time: '09:00', event: 'Opening Ceremony', location: 'Main Hall – A Block' },
  { time: '10:00', event: 'Hackathon Begins', location: 'Will be allotted' },
  { time: '13:00', event: 'Lunch', location: 'Dining Area' },
  { time: '17:00', event: 'Snacks', location: 'Dining Area' },
  { time: '20:30', event: 'Dinner', location: 'Dining Area' },
  { time: '22:00', event: 'Evening Social: Networking', location: 'Lounge' },
]

export const DAY2_SCHEDULE = [
  { time: '07:30', event: 'Breakfast', location: 'Dining Area' },
  { time: '10:00', event: 'Final Judging', location: 'Allotted Rooms' },
  { time: '13:00', event: 'Award Ceremony & Closing', location: 'Main Hall – A Block' },
]

// ─── Results ──────────────────────────────────────────────────────────────────
export const FINALIST_TEAMS = [
  { id: 1, team: 'RealityCheck', college: 'R V College of Engineering' },
  { id: 2, team: '404DevFound', college: 'Siddaganga Institute of Technology' },
  { id: 3, team: 'Medheads', college: 'CMR Institute of Technology' },
  { id: 4, team: 'BUGS', college: 'CMR Institute of Technology' },
  { id: 5, team: 'PowerGrid', college: 'CMR Institute of Technology' },
  { id: 6, team: 'DEViant', college: 'R.V. College of Engineering (RVCE)' },
  { id: 7, team: 'Coffee Overflow', college: 'CMR Institute of Technology' },
  { id: 8, team: 'TrioByte', college: 'Amrita Vishwa Vidyapeetham' },
  { id: 9, team: 'Techies girls', college: 'CMR Institute of Technology' },
  { id: 10, team: 'NONCE', college: 'CMR Institute of Technology' },
  { id: 11, team: 'P.A.W.S (Proactive Animal Warning System)', college: 'CMR Institute Of Technology' },
  { id: 12, team: 'CodeGreen', college: 'CMR Institute of Technology' },
  { id: 13, team: 'RESCUE RANGERS', college: 'CMR Institute of Technology' },
  { id: 14, team: "FuFu-Shinigami's", college: 'Sindhi College' },
  { id: 15, team: 'The AI Optimizers', college: 'CMR Institute of Technology' },
  { id: 16, team: 'The Bro Code', college: 'CMR Institute of Technology' },
  { id: 17, team: 'Kaapi Overflow', college: 'CMR Institute of Technology' },
  { id: 18, team: 'The Code Blooded', college: 'DON BOSCO INSTITUTE OF TECHNOLOGY BANGALORE' },
  { id: 19, team: 'GATiRAKSHAK', college: 'National Public School Agara, Bangalore' },
  { id: 20, team: 'Runtime terror', college: 'CMR Institute of Technology' },
  { id: 21, team: 'Team Nexa', college: 'CMR Institute Of Technology' },
  { id: 22, team: 'IDEATORS', college: 'CMR Institute Of Technology' },
  { id: 23, team: 'Team Nexlot', college: 'GOPALAN COLLEGE OF ENGINEERING AND MANAGEMENT' },
  { id: 24, team: 'The Optimizers', college: 'R.V. College of Engineering' },
  { id: 25, team: 'CodeCatalyst', college: 'Siddaganaga Institute Of Technology' },
  { id: 26, team: 'DosAI', college: 'CMR Institute of Technology' },
  { id: 27, team: 'NeuroSentinels', college: 'CMR Institute of Technology' },
  { id: 28, team: 'Lazy Monks', college: 'Bangalore Institute of Technology' },
  { id: 29, team: 'HANUMAN', college: 'CMR Institute of Technology' },
  { id: 30, team: 'Tri-Coders', college: 'CMR Institute of Technology' },
  { id: 31, team: 'Debutants', college: 'CMR Institute of Technology' },
  { id: 32, team: 'Team Pawtrollers', college: 'CMR INSTITUTE OF TECHNOLOGY' },
  { id: 33, team: 'Tridev', college: 'CMR Institute of Technology' },
  { id: 34, team: 'Safety Ninjas', college: 'CMR Institute of Technology' },
  { id: 35, team: 'Team Ekalavya', college: 'PES UNIVERSITY' },
  { id: 36, team: 'CodeCradle', college: 'Siddaganga Institute of Technology' },
  { id: 37, team: 'Code red crew', college: 'CMR Institute of Technology Bengaluru' },
  { id: 38, team: 'tech4paws', college: 'CMR Institute of Technology' },
  { id: 39, team: 'OcuSense', college: 'RV COLLEGE OF ENGINEERING' },
  { id: 40, team: 'Backlog', college: 'Siddaganga Institute of Technology (SIT), Tumkur' },
  { id: 41, team: 'Focus', college: 'University of Visvesvaraya College of Engineering' },
  { id: 42, team: 'Syndicate', college: 'Gopalan College of Engineering and Management' },
  { id: 43, team: 'SPC-SQUAD', college: 'CMR Institute of Technology' },
  { id: 44, team: 'Trinova', college: 'CMR Institute of Technology' },
  { id: 45, team: 'PawPort', college: 'CMR Institute of Technology' },
  { id: 46, team: 'GramHealers', college: 'R V college of Engineering' },
  { id: 47, team: 'GTx', college: 'Siddaganga Institute of Technology' },
  { id: 48, team: 'TEAM-HUSTLERS', college: 'MVJ COLLEGE OF ENGINEERING' },
  { id: 49, team: 'Future Stack', college: 'Techno India University, West Bengal' },
  { id: 50, team: 'MindHackers', college: 'CMR Institute of Technology' },
  { id: 51, team: 'The bugs squad', college: 'NMIT, Lowry Adventist College, Garden City University' },
  { id: 52, team: 'Code Stormers', college: 'Sri Sairam College of Engineering' },
  { id: 53, team: 'Tech Titans', college: 'Siddaganga Institute of Technology, Tumkur' },
  { id: 54, team: 'Illu-minati', college: 'BMS Institute of Technology and Management' },
  { id: 55, team: 'Agritech innovators', college: 'Techno India University' },
  { id: 56, team: 'TAGARU TECH', college: 'CMR Institute of Technology' },
  { id: 57, team: 'Prajavani Protocol', college: 'BNM Institute of Technology' },
  { id: 58, team: 'Genetic Drift', college: 'BMS Institute of Technology and Management' },
  { id: 59, team: 'DXTR MINDS', college: 'CMR Institute of Technology' },
  { id: 60, team: 'Gorkhali', college: 'CMR Institute of Technology' },
  { id: 61, team: 'CertiSure', college: 'MVJ COLLEGE OF ENGINEERING' },
  { id: 62, team: "Normal_Dev's", college: 'M S Ramaiah Institute Of Technology' },
  { id: 63, team: 'Sudo wudo', college: 'M S Ramaiah Institute of Technology (MSRIT)' },
  { id: 64, team: 'TinyVoices Tech', college: 'CMR Institute of Technology' },
  { id: 65, team: 'The Touch Explorers', college: 'BVRIT HYDERABAD College of Engineering For Women' },
  { id: 66, team: "Society's Engineers", college: 'CMR Institute Of Technology' },
  { id: 67, team: 'HiveX', college: 'Dr Ambedkar Institute of Technology' },
  { id: 68, team: 'Clinnovaters', college: 'Seshadri Rao Gudlavalleru Engineering College' },
  { id: 69, team: 'FarmZilla', college: 'Dayananda Sagar College of Engineering (DSCE), Bengaluru' },
  { id: 70, team: 'Micro X', college: 'CMR Institute of Technology' },
  { id: 71, team: 'Ohm Shanti Ohm', college: 'CMR Institute of Technology' },
  { id: 72, team: 'AyuConnect', college: 'MVJ College of Engineering' },
  { id: 73, team: 'Code Conquerers', college: 'GOPALAN COLLEGE OF ENGINEERING AND MANAGEMENT' },
  { id: 74, team: 'Themis', college: 'R V College of Engineering' },
  { id: 75, team: 'HackVerse', college: 'CMR Institute of Technology' },
  { id: 76, team: 'Syntax', college: 'Siddaganga Institute of Technology' },
  { id: 77, team: 'NeuralNinjas', college: 'CMR Institute of Technology' },
  { id: 78, team: 'Sense Node', college: 'CMR Institute of Technology' },
  { id: 79, team: 'CatsCanCode', college: 'CMRIT' },
  { id: 80, team: 'THE UNSTOPPABLES', college: 'SRI ESHWAR COLLEGE OF ENGINEERING' },
  { id: 81, team: 'Rescue Revolution', college: 'CMR INSTITUTE OF TECHNOLOGY' },
  { id: 82, team: 'Medi Bridge', college: 'MVJ COLLEGE OF ENGINEERING' },
  { id: 83, team: 'Akansha Kumari', college: 'CMR Institute of Technology' },
  { id: 84, team: 'Team Norbel', college: 'CMR Institute of Technology' },
  { id: 85, team: 'Backlog', college: 'Siddaganga Institute of Technology (SIT), Tumkur' },
  { id: 86, team: 'FetalGuard', college: 'CMR Institute of Technology' },
  { id: 87, team: 'bYTE', college: 'CMR Institute of Technology' },
  { id: 88, team: 'Byte Squad', college: 'AGM Rural College of Engineering' },
  { id: 89, team: 'Dream hack', college: 'CMR Institute of Technology' },
  { id: 90, team: 'Visionary', college: 'CMR Institute of Technology' },
  { id: 91, team: 'Access granted', college: 'CMR Institute of Technology' },
  { id: 92, team: 'Null pointers', college: 'Sri Venkateswara College of Engineering' },
  { id: 93, team: 'The CodeFather', college: 'CMR Institute of Technology' },
  { id: 94, team: 'SpeechMorphers', college: 'MVJ College Of Engineering' },
  { id: 95, team: 'Infinite loops', college: 'CMR Institute of Technology' },
]

// ─── FAQs ────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: 'What is The Social Hackathon?',
    a: 'The Social Hackathon (SH) brings together tech innovators and social entrepreneurs to create solutions that drive positive change and address critical societal challenges. It\'s a collaborative event where participants form teams to develop prototype solutions to real-world problems within a limited timeframe.',
  },
  {
    q: 'When and where will SH 2026 take place?',
    a: 'SH 2026 will be held from May 13–14, 2026 at the CMR Institute Of Technology, Bengaluru.',
  },
  {
    q: 'Who can participate?',
    a: 'SH is open to undergraduate students, and anyone passionate about using technology to solve social problems. Teams can consist of 2–4 members with diverse skill sets.',
  },
  {
    q: 'What about accommodation?',
    a: 'Areas will be set up for those who need short naps, but we prefer all participants to be active as it is a 24-hour hackathon. Organizers will provide energy drinks, and snacks to keep participants going.',
  },
  {
    q: 'Is there an entry fee?',
    a: 'Registration for SH 2026 is completely free, but finalists are required to pay an entry fee of ₹700/- per team.',
  },
  {
    q: 'What resources will be provided?',
    a: 'Participants will have access to: high-speed internet, workspace, meals and refreshments. Teams are expected to bring their own devices.',
  },
  {
    q: 'What are the prizes?',
    a: 'Showcase your innovation, compete with top talents, and stand a chance to win exciting rewards. We have a prize pool of ₹50,000/-.',
  },
  {
    q: 'How will projects be judged?',
    a: 'Projects will be evaluated based on: social impact potential, technical innovation, feasibility and sustainability, user experience design, and presentation quality. Our panel of judges includes social entrepreneurs, technical experts, and impact investors.',
  },
  {
    q: 'Do I need to have a team before registering?',
    a: 'Yes, you need to have a team before registering to ensure smooth collaboration and project development during the event. Make sure to assemble your team before signing up!',
  },
  {
    q: 'What should I bring?',
    a: 'Participants should bring their laptops, chargers, any specialized hardware needed for their projects, and a government-issued ID for check-in. Comfortable clothing and a reusable water bottle are also recommended.',
  },
  {
    q: 'Is there a code of conduct?',
    a: 'Yes, all participants must adhere to our Code of Conduct which promotes a respectful, inclusive, and collaborative environment. This includes guidelines on appropriate behavior, communication, and project content.',
  },
  {
    q: 'Are hardware projects appreciated?',
    a: 'Yes, hardware projects are appreciated! We encourage innovative ideas, whether they involve software, hardware, or a combination of both. Just ensure you bring any necessary components, as availability may be limited at the venue.',
  },
  {
    q: 'What happens to the intellectual property created?',
    a: 'Teams retain full ownership of their projects. However, we encourage open-source approaches and sharing of learnings. If you accept certain sponsor prizes, there may be specific IP terms attached, which will be clearly communicated.',
  },
]

// ─── Team ────────────────────────────────────────────────────────────────────
export const TEAM_MEMBERS = [
  {
    name: 'Daniya',
    role: 'President',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/daniya-john-6b657a304/'
  },
  {
    name: 'Deekshitha',
    role: 'Vice President',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/deekshitha-bandaru/'
  }, {
    name: 'Alina Paul',
    role: 'Core Member',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/alina-paul-340a2026t6974pp/'
  },
  {
    name: 'Nirbhik',
    role: 'PR Head',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/nirbhik-chaki?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Vishwak',
    role: 'Event Management Head',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/vishwaksen21/'
  },
  {
    name: 'Angelina',
    role: 'Social Media Head',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/angelina-georgy/'
  },
  {
    name: 'Harris',
    role: 'Co-ordinator',
    image: '/placeholder.png',
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'Ujjayani',
    role: 'Co-ordinator',
    image: '/placeholder.png',
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'Rakshitha',
    role: 'Co-ordinator',
    image: '/placeholder.png',
    linkedin: 'http://www.linkedin.com/in/rakshitha-j-3b5b97352'
  },
  {
    name: 'Deeksha Pandu',
    role: 'Co-ordinator',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/deeksha-pandu-29b09732a?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Deeksha',
    role: 'Co-ordinator',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/deeksha-ganiga-681260356?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Priscilla',
    role: 'Co-ordinator',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/priscilla-shiny-145102398/'
  },
  {
    name: 'Sunil',
    role: 'Co-ordinator',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/sunil-kumar-1093a3338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Vaibhav',
    role: 'Co-ordinator',
    image: '/placeholder.png',
    linkedin: 'https://www.linkedin.com/in/vaibhav-khanna-52785632a?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  }
]
