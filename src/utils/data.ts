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
  { team: 'Syntax Error', leader: 'Aayush Rasaily', college: 'CMR Institute of Technology' },
  { team: 'BigForge', leader: 'Jashwanth N', college: 'CMR Institute of Technology' },
  { team: 'ArthSaathi', leader: 'Gagan Y', college: 'CMR Institute of Technology' },
  { team: 'Tech Ragnarök', leader: 'Prajwal G', college: 'CMRIT College of Engineering' },
  { team: 'Codeflakes', leader: 'Geeta Saunshi', college: 'Siddaganga Institute of Technology, Tumkur' },
  { team: 'Predators', leader: 'James C Pathadan', college: 'CMRIT' },
  { team: 'Zenith', leader: 'Aditya Kumar Jha', college: 'LNCT University' },
  { team: 'byte_X', leader: 'Aaditya Gupta', college: 'CMR Institute of Technology' },
  { team: 'Night Owls', leader: 'Manasvi Sutar', college: 'MVJ College of Engineering' },
  { team: 'Vortexa', leader: 'Ananya P', college: 'Mysuru Royal Institute of Technology' },
  { team: 'HEXAHERS', leader: 'Sanjana Kumari', college: 'CMRIT' },
  { team: 'AI Burst ⚡', leader: 'Uma Mahesh L', college: 'GM University' },
  { team: 'Quattrocrackers', leader: 'Shifanaaz', college: 'AMC Engineering College' },
  { team: 'EMBEDCRAFT', leader: 'Aaryan Upadhyay', college: 'CMRIT' },
  { team: 'Compile Craft', leader: 'Abhishek Kumar Choudhary', college: 'RVITM' },
  { team: 'Hackstreet Boys', leader: 'Tejas Y', college: 'Sapthagiri NPS University' },
  { team: 'Error 404', leader: 'Dalavai Vaishnavi', college: 'CMR Institute of Technology' },
  { team: 'CityZen', leader: 'DS Lokesh Gowda', college: 'CMRIT' },
  { team: 'HustleHer', leader: 'Prapti Srivastava', college: 'CMR Institute of Technology' },
  { team: 'Craetelox', leader: 'Rohit Gupta', college: 'Baderia Global Institute of Engineering and Management, Jabalpur' },
  { team: 'InnovateX', leader: 'Sonali S', college: 'CMR Institute of Technology' },
  { team: 'Tech Titans', leader: 'Jawaharram S', college: 'Sri Krishna College of Technology' },
  { team: 'TECH TITANS', leader: 'Pruthviraj Kale', college: 'Pimpri Chinchwad College of Engineering' },
  { team: 'Rapid Rebels', leader: 'Riddhika Sharma', college: 'Vijaya Vittala Institute of Technology' },
  { team: 'Tech Titans', leader: 'Tejashwini M', college: 'Ballari Institute of Technology and Management' },
  { team: 'Thinkers', leader: 'Sree Kanikadevi K', college: 'Chennai Institute of Technology' },
  { team: 'Tech Blaze', leader: 'Nishanth S', college: 'East West Institute of Technology' },
  { team: '4-Bits', leader: 'Aryan Shrinivas Sutar', college: 'Rajarambapu Institute of Technology, Rajaramnagar' },
  { team: 'City Sense', leader: 'Harshit Ranjan', college: 'National Institute of Technology Karnataka' },
  { team: 'CodeTitans', leader: 'Rishikesh', college: 'Nagarjuna College of Engineering & Technology' },
  { team: 'Cloud9', leader: 'Karthik S', college: 'Padre Conceicao College of Engineering' },
  { team: 'Ace', leader: 'Piyush Anil Thakre', college: 'Prof. Ram Meghe Institute of Technology and Research, Badnera' },
  { team: 'Marcos', leader: 'Manish Sharma', college: 'GMRIT Deemed to be University' },
  { team: 'EyeNova', leader: 'Bhavana N', college: 'Siddaganga Institute of Technology' },
  { team: 'AI QUADRANT', leader: 'Prathyaksh S', college: 'Vidyavardhaka College of Engineering Mysore' },
  { team: 'Black Dragon', leader: 'Dinesh R', college: 'SNS College of Engineering' },
  { team: 'STATUS 200', leader: 'M.V.S. Karthikeya', college: 'Kurnool, Andhra Pradesh' },
  { team: 'EcoSortAI+', leader: 'Ganga Vanaparthi', college: 'Mangaluru, Karnataka' },
  { team: 'TEAM BYTEFORCE', leader: 'Shreeraksha H S', college: 'Dayananda Sagar College of Engineering' },
  { team: 'Synergy', leader: 'Keshav Kunal', college: 'Ramaiah Institute of Technology' },
  { team: 'Code Revenants', leader: 'Santoshi Shrinivas Reddy', college: 'PDA College of Engineering' },
  { team: 'XLR-8', leader: 'Veerla Jishnu Teja', college: 'Cambridge Institute of Technology, Ramaiah University of Applied Sciences' },
  { team: 'Tech Initiators', leader: 'Arpitha Jain C B', college: 'Shree Dharmasthala Manjunatheshwara Institute of Technology (SDMIT), Ujire, Karnataka' },
  { team: 'FourLoop', leader: 'Moulya Mallikarjun', college: 'R V Institute of Technology and Management' },
  { team: 'Innovation Team', leader: 'S M Veeresh', college: 'Ballari Institute of Technology and Management' },
  { team: 'Code Storm 313', leader: 'Nisha Parween', college: 'Gandhi Engineering College' },
  { team: 'MUDRA-ML', leader: 'Premsagar Deshmane', college: 'SNJB\'s Late Sau. Kantabai Bhawarlalji Jain College of Engineering' },
  { team: 'Fiscal Force', leader: 'Bandhavi S S', college: 'Vidyavardhaka College of Engineering' },
  { team: 'CODE CRACKERS', leader: 'Infant Jenilia J', college: 'Sathyabama Institute of Science and Technology' },
  { team: 'Null Parking', leader: 'Eknath', college: 'Rajalakshmi Institute of Technology' },
  { team: 'Research Engines', leader: 'G P Dhanya', college: 'Bapuji Institute of Engineering and Technology' },
  { team: 'Wind Breakers', leader: 'Dhivakar S', college: 'K.S. Rangasamy College of Technology' },
  { team: 'Tiffin Wala RankBrain', leader: 'Bharat Pandey', college: 'Maharana Institute of Professional Studies' },
  { team: 'Nightingale', leader: 'Sahana M', college: 'Madras Institute of Technology, Anna University' },
  { team: 'AgroConnect360+', leader: 'Narmatha R', college: 'Chennai Institute of Technology' },
  { team: 'Avanthikamanoj900', leader: 'Avanthika Manoj', college: 'Amrita Vishwa Vidyapeetham' },
  { team: 'CropWise', leader: 'Padmanabhacharya', college: 'Kalaburgi, Karnataka, India' },
  { team: 'UrbanIQ', leader: 'Sonali Devkar', college: 'Solapur, Maharashtra' },
]

export const SHORTLISTED_HARDWARE = [
  { team: 'Route Rangers', leader: 'Varsha Kokatnur', college: 'CMR Institute of Technology' },
  { team: 'Novocaine', leader: 'Amritha M R', college: 'CMR Institute of Technology' },
  { team: 'Cobra Tech', leader: 'Akash B R', college: 'BNM Institute of Technology' },
  { team: 'THOR', leader: 'Sivasankara Mathesh M', college: 'K V Sala Higher Secondary School' },
  { team: 'Solcane', leader: 'G. Gautham Vas', college: 'CMRIT' },
  { team: 'BIO-VOLT', leader: 'Hardhik Bhatia', college: 'Sir M. Visvesvaraya Institute of Technology (SMVIT), Bengaluru' },
  { team: 'VERDE - Vehicle for Environmental Recon, Detection & Exploration', leader: 'Likitha N', college: 'CMR Institute of Technology' },
  { team: 'Vishwakarma', leader: 'Vedant Prakash Chilbule', college: 'SNS College of Technology' },
  { team: 'MedHide', leader: 'Geethanjali V N', college: 'MVJ College of Engineering' },
  { team: 'FIRE', leader: 'Sivakumar Balaji', college: 'PSNA College of Engineering and Technology' },
  { team: 'VARS', leader: 'Mohamed Aqeeb', college: 'CMR Institute of Technology' },
  { team: 'NotYetDecided', leader: 'Kuldeep Chouhan R', college: 'Siddaganga Institute of Technology' },
  { team: 'RootRhythm', leader: 'Sathvik A S', college: 'CMR Institute of Technology' },
  { team: 'Gestro Motion', leader: 'Abhigyan Paramanik', college: 'PM Shri KV Khurda Road' },
  { team: 'R.O.V.E.R — Recon & Observation Vehicle for Emergency Response', leader: 'Likitha N', college: 'CMRIT' },
  { team: 'TEAM VELOCITY-X', leader: 'Sneka Venkateswari M', college: 'Rajalakshmi Institute of Technology' },
  { team: 'DGTHON', leader: 'M. Raghul', college: 'PSNA College of Engineering and Technology (PSNACET),Dindigul' },
  { team: 'Tech Hawks', leader: 'Nithin S', college: 'Chennai Institute of Technology' },
  { team: 'Ignited Minds', leader: 'Kalaiyarasu R', college: 'Vidyavardhaka College of Engineering' },
  { team: 'Toggle', leader: 'Dhanalakshmi D', college: 'Anna University (AU), Chennai' },
  { team: 'TEAM COGNYX', leader: 'Anu Priya D', college: 'None' },
  { team: 'MediSync AR', leader: 'None', college: 'Maharaja Institute of Technology Tandavpura' },
  { team: 'ECO MINDS', leader: 'Akshat Raj', college: 'Bannari Amman Institute of Technology' },
  { team: 'INVICTUS', leader: 'Jeevesh Sankar M', college: 'CMR Institute of Technology' },
  { team: 'Mavericks', leader: 'Richie Joen A', college: 'PSNA College of Engineering and Technology (PSNACET),Dindigul' },
  { team: 'Technovative', leader: 'Piyush Kumar Singh', college: 'Cambridge Institute of Technology' },
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

export const WAITLIST_SOFTWARE = [
  { team: 'CodeX', leader: 'Rahul Reddy', college: 'Siddaganga Institute of Technology' },
  { team: 'Code Krafters', leader: 'Muhammad Danish J', college: 'Gopalan College of Engineering and Management' },
  { team: 'Neural Setu', leader: 'R DARSHAN', college: 'JSSATEB' },
  { team: 'BOTS INFO', leader: 'Nagaraj R S', college: 'REVA University' },
  { team: 'Phoenix', leader: 'Niharika G', college: 'Dayananda Sagar Academy of Technology and Management' },
  { team: 'Kishan Tech', leader: 'Varsha Pattanshetti', college: 'Nagarjuna College of Engineering and Technology' },
  { team: 'Sizzling Brownies', leader: 'Khadijatul Kubra', college: 'Sampoorna Institute of Technology and Research' },
  { team: 'Fusion 2', leader: 'Kashfa Saba', college: 'Nagarjuna College of Engineering and Technology' },
  { team: 'CodeX', leader: 'Rahul Reddy', college: 'Siddaganga Institute of Technology' },
  { team: 'CODE_SORCERERS', leader: 'P. Venkata Sai Rohith', college: 'Sir M Visvesvaraya Institute of Technology' },
  { team: 'Dream Decoders', leader: 'Abu Talha Ansari', college: 'New Horizon College of Engineering' },
  { team: 'ALPHA SEEKERS', leader: 'B Abhinav Varma', college: 'RNS Institute of Technology' },
]

export const WAITLIST_HARDWARE = [
  { team: 'Westria', leader: 'Mahathi BJ', college: 'SNS College of Technology' },
  { team: 'NetCoders', leader: 'Ayush', college: 'Vellore Institute of Technology, Bhopal' },
  { team: 'Toggle', leader: 'Dhanalakshmi D', college: 'SNS College of Technology' },
  { team: 'IronEpoch', leader: 'Amrita Raj', college: 'Amrita Vishwa Vidyapeetham, Amritapuri Campus' },
  { team: 'HUG FOR BUG', leader: 'Harshitha K', college: 'Ballari Institute of Technology and Management' },
  { team: 'BYTE BUSTERS', leader: 'Prithvik Raju Naik', college: 'Dr. Mahalingam College of Engineering and Technology' },
  { team: 'Tech Blasters', leader: 'Chiranthan M', college: 'PSNA College of Engineering and Technology' },
]
