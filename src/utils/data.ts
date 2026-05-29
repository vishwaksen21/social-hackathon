// ─── Site-wide content ────────────────────────────────────────────────────────

export const HACKATHON_SLUG = 'social-hackathon26'
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
  { label: 'Verify', path: '/verify' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'FAQs & Contact', path: '/contact' },
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
  { value: '1-4', label: 'Team Size' },
  { value: '1000+', label: 'Teams Registered' },
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
  { date: 'April 9, 2026', event: 'Registration Opens' },
  { date: 'April 26, 2026', event: 'Registration & Round 1 Closes' },
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
    title: 'Health & inclusivity',
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
    title: 'Agriculture & Animal Welfare',
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
    title: 'Student innovation & Social Good',
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
  { step: 1, event: 'Registration', date: '9th April – 26th April 2026', side: 'left' },
  { step: 2, event: 'Round 1: Submission of Idea', date: '9th April – 26th April 2026', side: 'right' },
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
export const SHORTLISTED_SOFTWARE = [
  { team: 'ArthSaathi', track: 'Software', college: 'CMR Institute Of Technology', location: 'Bengaluru,Karnataka' },
  { team: 'Bytecode', track: 'Software', college: "KIT's College of Engineering", location: 'Kolhapur, Maharashtra' },
  { team: 'Predators', track: 'Software', college: 'Cmrit', location: 'Bangalore' },
  { team: 'Team ByteForce', track: 'Software', college: 'Dayananda Sagar College of Engineering', location: 'Bengaluru, Karnataka' },
  { team: 'EyeNova', track: 'Software', college: 'Siddaganga Institute of Technology', location: 'B H road Tumkuru ,Karnataka' },
  { team: 'Tech Titans👑', track: 'Software', college: 'Ballari Institute of Technology and Management', location: 'Ballari, Karnataka' },
  { team: 'Research engines', track: 'Software', college: 'Bapuji Institute of Engineering and Technology', location: 'Davanagere, Karnataka' },
  { team: 'UrbanIQ', track: 'Software', college: 'Nagesh Karajagi Orchid College of Engineering and Technology', location: 'Solapur, Maharashtra' },
  { team: 'Null Parking', track: 'Software', college: 'Rajalakshmi Institute of Technology', location: 'Chennai, Tamil Nadu' },
  { team: 'INNOVATION TEAM', track: 'Software', college: 'Ballari Institute of Technology and Management', location: 'Ballari' },
  { team: 'Nightingale', track: 'Software', college: 'MADRAS INSTITUTE OF TECHNOLOGY, ANNA UNIVERSITY', location: 'CHENNAI, TAMIL NADU' },
  { team: 'Rapid Rebels', track: 'Software', college: 'Vijaya Vittala Institute of Technology', location: 'Bengaluru, Karnataka' },
  { team: 'EmbedCraft', track: 'Software', college: 'CMRIT', location: 'BENGALURU , KARNATAKA' },
  { team: 'Four loop', track: 'Software', college: 'R V INSTITUTE OF TECHNOLOGY AND MANAGEMENT', location: 'Bengaluru, Karnataka' },
  { team: 'Harshit Ranjan', track: 'Software', college: 'National Institute of Technology Karnataka', location: 'Surathkal, Karnataka' },
  { team: 'Tech blaze', track: 'Software', college: 'East West Institute of Technology', location: 'Bengaluru, Karnataka' },
  { team: 'CropWise', track: 'Software', college: 'Sharnbasva University', location: 'Kalaburgi, Karnataka, India' },
  { team: 'Fiscal Force', track: 'Software', college: 'Vidyavardhaka College of Engineering', location: 'Mysuru, Karnataka' },
  { team: 'Code Revenants', track: 'Software', college: 'PDA COLLEGE OF ENGINEERING', location: 'Kalaburagi Karnataka' },
  { team: 'Code Crackers', track: 'Software', college: 'Sathyabama Institute of Science and Technology', location: 'Chennai, Tamil Nadu' },
  { team: 'AgroConnect360+', track: 'Software', college: 'Chennai Institute of Technology', location: 'Chennai, Tamil Nadu' },
  { team: 'Team Falcon', track: 'Software', college: 'Cmrit', location: 'Bengaluru, Karnataka' },
  { team: 'BigForge', track: 'Software', college: 'CMR Institute of Technology', location: 'Bengaluru, Karnataka' },
  { team: 'InnovateX', track: 'Software', college: 'CMR Institute of Technology', location: 'Bengaluru, Karnataka' },
  { team: 'Tech Ragnarok', track: 'Software', college: 'CMRIT', location: 'Bangalore, Karanataka' },
  { team: 'HustleHer', track: 'Software', college: 'CMR Institute of technology', location: 'Bengaluru, Karnataka' },
  { team: 'XLR8', track: 'Software', college: 'Cambridge Institute of Technology, Ramaiah University Of App', location: 'Bengaluru,Karnataka' },
  { team: 'AI Burst ⚡', track: 'Software', college: 'GM University', location: 'Davangare' },
  { team: 'STATUS 200', track: 'Software', college: 'IIIT Design and Manufacturing, Kurnool', location: 'Kurnool, Andhra Pradesh' },
  { team: 'avanthikamanoj900', track: 'Software', college: 'Amrita Vishwa Vidyapeetham', location: 'Amritapuri' },
  { team: 'Tech Titans', track: 'Software', college: 'Sri Krishna College of Technology', location: 'Coimbatore, Tamil Nadu' },
  { team: 'CityZen', track: 'Software', college: 'CMRIT', location: 'Bengaluru,Karnataka' },
  { team: 'Technovative', track: 'Software', college: 'AMC Engineering College', location: 'Bangalore, Karnataka' },
  { team: 'Codeflakes', track: 'Software', college: 'Siddaganga institute of technology, tumkur', location: 'tumkur' },
  { team: 'ByteGuard', track: 'Software', college: 'City Engineering College', location: 'Bengaluru, Karnataka' },
  { team: 'The C men', track: 'Software', college: 'MVJ college of engineering', location: 'Karnataka ,banglore' },
  { team: 'Lumina', track: 'Software', college: 'MVJ College of Engineering', location: 'BENGALURU' },
  { team: 'DeFacto', track: 'Software', college: 'CMRIT', location: 'Bangalore Karnataka' },
  { team: 'Cortex', track: 'Software', college: 'CMR Institute of Technology', location: 'Bengaluru,Karnataka' },
  { team: 'Cenere', track: 'Software', college: 'CMR Institute of technology', location: 'Banglore' },
  { team: 'Power', track: 'Software', college: 'CMR Institute of Technology', location: 'Bengaluru,Karnataka' },
  { team: 'APEX', track: 'Software', college: 'CMR Institute of Technology', location: 'Bengaluru' },
  { team: 'CodeCrew', track: 'Software', college: 'Alliance University, AMC College', location: 'Bangalore, Karnataka' },
  { team: 'Rookie Coders', track: 'Software', college: 'CMR Institute of Technology', location: 'Bengaluru' },
  { team: 'PlayedIn', track: 'Software', college: 'CMR Institute of Technology', location: 'Bengaluru' },
  { team: 'Quattrocrackers', track: 'Software', college: 'AMC ENGENEERING COLLEGE', location: 'Bangalore' },
  { team: 'Phoenix', track: 'Software', college: 'Dayananda Sagar Academy of Technology and Management', location: 'Bengaluru, Karnataka' },
  { team: 'BOTS INFO', track: 'Software', college: 'REVA University', location: 'Bengaluru, Karnataka' },
  { team: 'Sizzling brownies', track: 'Software', college: 'Sampoorna Institute of Technology and Research', location: 'Bengaluru, Karnataka' },
  { team: 'Strawhats', track: 'Software', college: 'Siddaganga Insitute of Technology', location: 'Bengaluru,Karnataka' },
  { team: 'Binary brains', track: 'Software', college: 'CMR INSTITUTE OF TECHNOLOGY', location: 'Bengaluru' },
  { team: 'Team Orbit', track: 'Software', college: 'SMVIT & CMRIT', location: 'Bengaluru, Karnataka' },
  { team: 'IntelliGears', track: 'Software', college: 'CMRIT', location: 'Bangalore, Karnataka' },
  { team: 'Vortexa', track: 'Software', college: 'Mysuru Royal Institute of Technology', location: 'Mysuru,Karanataka' },
  { team: 'Team Cranddr', track: 'Software', college: 'Dr SMCE', location: 'Bengaluru, Karnataka' },
  { team: 'Drishti', track: 'Software', college: 'Cmr institute of technology', location: 'Bengaluru, Karnataka' },
  { team: 'Lexical Coders', track: 'Software', college: 'CMR Institution of Technology', location: 'Bengaluru, Karnataka' },
  { team: 'KrishiMitra', track: 'Software', college: 'CMRIT', location: 'Bengaluru, Karnataka' },
  { team: '67 Unlocked', track: 'Software', college: 'CMR INSTITUTE OF TECHNOLOGY', location: 'Karnataka' },
  { team: 'Suraj Kunwar', track: 'Software', college: 'CMRIT', location: 'Bangalore' },
  { team: 'Rahul', track: 'Software', college: 'CMR Institute of Technology', location: 'Banglore,Karnataka' },
]

export const SHORTLISTED_HARDWARE = [
  { team: 'Wrong Brothers', track: 'Hardware', college: 'MVJ College of Engineering', location: 'Bangalore, Karnataka' },
  { team: 'VARS', track: 'Hardware', college: 'CMR Institute of Technology', location: 'Bengaluru,Karnataka' },
  { team: 'VERDE', track: 'Hardware', college: 'CMR Institute of Technology', location: 'Bengaluru,Karnataka' },
  { team: 'MedHide', track: 'Hardware', college: 'Velammal Engineering College', location: 'Chennai, Tamil Nadu' },
  { team: 'Dgthon', track: 'Hardware', college: 'PSNA College of Engineering and Technology', location: 'Dindigul, Tamil Nadu' },
  { team: 'Novocaine', track: 'Hardware', college: 'Cmr institute of technology', location: 'Bengaluru, Karnataka' },
  { team: 'MAVERICKS', track: 'Hardware', college: 'PSNA College of Engineering and Technology', location: 'Dindigul, Tamil Nadu' },
  { team: 'THOR', track: 'Hardware', college: 'K V SALA HIGHER SECONDARY SCHOOL', location: 'Virudhunagar, tamilnadu' },
  { team: 'Notyetdecided', track: 'Hardware', college: 'Siddaganga Institute of Technology', location: 'Tumkur, Karnataka' },
  { team: 'Velocity-X', track: 'Hardware', college: 'Dr. Mahalingam College of Engineering and Technology', location: 'Coimbatore, Tamil Nadu' },
  { team: 'Fire', track: 'Hardware', college: 'Anna University (AU), Chennai', location: 'Chennai, Tamil Nadu' },
  { team: 'Cobra Tech', track: 'Hardware', college: 'BNM Institute of Technology', location: 'Bengaluru' },
  { team: 'Solcane', track: 'Hardware', college: 'cmrit', location: 'Bangalore' },
  { team: 'Roots of change', track: 'Hardware', college: 'CMR Institute of Technology', location: 'Bengaluru' },
  { team: 'Team Synapse', track: 'Hardware', college: 'CMR Institute of Technology', location: 'Bengaluru' },
  { team: 'EcoStarters', track: 'Hardware', college: 'CMR Institute of Technology', location: 'Bengaluru' },
  { team: 'NotFound', track: 'Hardware', college: 'ATME College of Engineering, GSSS IETW, GEC KR Pet', location: 'Mysuru Karnataka' },
  { team: 'Vanguard', track: 'Hardware', college: 'CMR Institute of Technology', location: 'Bengaluru' },
  { team: 'Bits and Byte', track: 'Hardware', college: 'CMR INSTITUTE OF TECHNOLOGY', location: 'Bengaluru' },
  { team: 'Lumina', track: 'Hardware', college: 'CMRIT', location: 'Bangalore, Karnataka' },
  { team: 'Byte busters', track: 'Hardware', college: 'Vidyavardhaka College of Engineering', location: 'Mysuru, Karnataka' },
  { team: 'ROAD RUNNERS', track: 'Hardware', college: 'CMRIT', location: 'Bengaluru,Karnataka' },
  { team: 'BlueWhale', track: 'Hardware', college: 'CMR INSTITUTE OF TECHNOLOGY', location: 'Bengaluru' },
  { team: 'IronEpoch', track: 'Hardware', college: 'Amrita Vishwa Vidyapeetham, Amritapuri Campus', location: 'Kollam, Kerala' },
  { team: 'Tubelights', track: 'Hardware', college: 'CMRIT', location: 'Bengaluru , Karnataka' },
  { team: 'Visionary loop', track: 'Hardware', college: 'Dayananda Sagar Academy of Technology and Management', location: 'Bangalore Urban, Karnataka' },
  { team: '4 BITS', track: 'Hardware', college: 'CMRIT', location: 'BANGALORE, KARNATAKA' },
  { team: 'A2S', track: 'Hardware', college: 'CMRIT', location: 'Bengaluru, Karnataka' },
  { team: 'Synergy', track: 'Hardware', college: 'CMR INSTITUTE OF TECHNOLOGY', location: 'Bengaluru' },
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
    a: 'SH is open to undergraduate students, and anyone passionate about using technology to solve social problems. Teams can consist of 1–4 members with diverse skill sets.',
  },
  {
    q: 'What about accommodation?',
    a: 'Areas will be set up for those who need short naps, but we prefer all participants to be active as it is a 24-hour hackathon. Organizers will provide energy drinks, and snacks to keep participants going.',
  },
  {
    q: 'Is there an entry fee?',
    a: 'Registration for SH 2026 is completely free, but finalists are required to pay an entry fee of ₹750/- per team.',
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
    image: '/rak.jpeg',
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

