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
  { label: 'Contact', path: '/contact' },
]

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/socialhackathon_cmrit?utm_source=qr&igsh=enExdmZpNHl1OHBw',
  linkedin: 'https://www.linkedin.com/in/innovation-club-4847a2333/',
  email: 'mailto:innovationclub@cmrit.ac.in',
  phone: '+91 7019151370',
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
    icon: '/themes/urban-planning.jpg',
    title: 'Smart Cities & Infrastructure',
    description: 'Smart Cities focus on building sustainable, efficient, and technology-driven urban environments. This includes urban planning, smart transportation, and energy-efficient systems powered by AI and data analytics. Optimizing energy usage in computing and infrastructure plays a key role in reducing environmental impact.',
    focuses: [
      'Smart traffic management systems',
      'Energy optimization in data centers',
      'Urban mobility systems',
      'Sustainable infrastructure planning',
      'Relevant SDGs: SDG 7, 9, 11, 13',
    ],
  },
  {
    id: 2,
    icon: '/themes/education.jpg',
    title: 'Education & Digital Empowerment',
    description: 'Education and digital platforms are transforming how knowledge is delivered and accessed. With initiatives like IndiaStack, Aadhaar, and digital governance, technology is enabling inclusive and personalized learning while improving transparency and accessibility.',
    focuses: [
      'Personalized learning platforms',
      'Digital identity-based services',
      'Skill development tools',
      'Governance systems for education access',
      'Relevant SDGs: SDG 4, 10, 16',
    ],
  },
  {
    id: 3,
    icon: '/themes/healthcare.jpg',
    title: 'Health, Well-being & AI for Impact',
    description: 'Technology and AI are revolutionizing healthcare by improving accessibility, diagnostics, and patient care. AI-driven systems can help in early disease detection, telemedicine, and inclusive healthcare delivery, especially in rural and underserved areas.',
    focuses: [
      'AI-based diagnostic tools',
      'Telemedicine platforms',
      'Mental health support systems',
      'Smart healthcare monitoring solutions',
      'Relevant SDGs: SDG 3, 10, 17',
    ],
  },
  {
    id: 4,
    icon: '/themes/agriculture.jpg',
    title: 'Agriculture & Food Systems',
    description: 'Agriculture is a critical sector that can benefit from technology to improve productivity, sustainability, and resilience to climate change. Smart farming techniques and data-driven insights can enhance crop yield and reduce resource wastage.',
    focuses: [
      'Crop monitoring solutions',
      'Precision agriculture',
      'Smart irrigation systems',
      'Supply chain optimization for farmers',
      'Relevant SDGs: SDG 2, 12, 13',
    ],
  },
  {
    id: 5,
    icon: '/themes/climate.png',
    title: 'Climate Tech & Sustainability',
    description: 'Climate technology focuses on addressing environmental challenges through innovative solutions such as renewable energy, waste management, and sustainable resource usage. Reducing carbon footprint and promoting green technologies are key priorities.',
    focuses: [
      'Solar energy optimization',
      'EV infrastructure',
      'Pollution monitoring systems',
      'Climate data analytics',
      'Relevant SDGs: SDG 7, 11, 12, 13, 15',
    ],
  },
  {
    id: 6,
    icon: '/themes/fin.png',
    title: 'Financial Inclusion & Social Good',
    description: 'Financial inclusion ensures that everyone has access to banking, credit, and digital financial services. At the same time, technology can also support social good initiatives such as animal welfare, ethical systems, and community development.',
    focuses: [
      'Digital payments & microfinance platforms',
      'Fraud detection systems',
      'Financial literacy tools',
      'Technology for animal welfare and conservation',
      'Relevant SDGs: SDG 1, 8, 9, 10, 15',
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
export const FINALIST_TEAMS: { id: number, team: string, college: string }[] = []

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
    image: '/daniya.jpeg',
    linkedin: 'https://www.linkedin.com/in/daniya-john-6b657a304/',
    phone: '+91 9535173412'
  },
  {
    name: 'Deekshitha',
    role: 'Vice President',
    image: '/dee.jpeg',
    linkedin: 'https://www.linkedin.com/in/deekshitha-bandaru/',
    phone: '+91 8660261627'
  },
  {
    name: 'Alina Paul',
    role: 'Core Member',
    image: '/alina.jpeg',
    linkedin: 'https://www.linkedin.com/in/alina-paul-340a2026t6974pp/',
    phone: '+91 7975790986'
  },
  {
    name: 'Nirbhik',
    role: 'PR Head',
    image: '/nirbhik.jpeg',
    linkedin: 'https://www.linkedin.com/in/nirbhik-chaki?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    phone: '+91 8861721676'
  },
  {
    name: 'Vishwak Sen',
    role: 'Event Management Head',
    image: '/vishwak3.png',
    linkedin: 'https://www.linkedin.com/in/vishwaksen21/',
    phone: '+91 7019151370'
  },
  {
    name: 'Angelina',
    role: 'Social Media Head',
    image: '/anje.jpeg',
    linkedin: 'https://www.linkedin.com/in/angelina-georgy/',
    phone: '+91 9008375961'
  },
  {
    name: 'Harris',
    role: 'Co-ordinator',
    image: '/harris.jpeg',
    linkedin: 'https://linkedin.com/'
  },
  {
    name: 'Ujjayani',
    role: 'Co-ordinator',
    image: '/ujjayani.jpeg',
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
    image: '/deeksha1.jpeg',
    linkedin: 'https://www.linkedin.com/in/deeksha-pandu-29b09732a?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Deeksha',
    role: 'Co-ordinator',
    image: '/deeksha.jpeg',
    linkedin: 'https://www.linkedin.com/in/deeksha-ganiga-681260356?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  },
  {
    name: 'Priscilla',
    role: 'Co-ordinator',
    image: '/pri.jpeg',
    linkedin: 'https://www.linkedin.com/in/priscilla-shiny-145102398/'
  },
  {
    name: 'Sunil',
    role: 'Co-ordinator',
    image: '/sunil.jpeg',
    linkedin: 'https://www.linkedin.com/in/sunil-kumar-1093a3338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    name: 'Vaibhav',
    role: 'Co-ordinator',
    image: '/vaibhav.jpg',
    linkedin: 'https://www.linkedin.com/in/vaibhav-khanna-52785632a?utm_source=share_via&utm_content=profile&utm_medium=member_android'
  }
]
