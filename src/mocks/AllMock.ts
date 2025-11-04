import { Navtype } from "@/types/NavigationTyes";
import { link } from "fs";
import {
  LayoutDashboard,
  Store,
  ShoppingCart,
  MessageSquare,
  Star,
  Wallet,
  FileText,
  Settings,
  LucideIcon,
  PiIcon,
  Zap,
  Hammer,
  Brush,
  BombIcon,
  LeafIcon,
  CpuIcon,
  Smartphone,
  HomeIcon,
  Briefcase,
  ThermometerIcon,
  Camera,
  Calendar,
  BookOpen,
} from "lucide-react";
export const NavigationMockData: Navtype[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Browse Jobs",
    link: "/browser_jobs",
  },
  {
    id: 3,
    title: "Brows Talents",
    link: "browser_talents",
  },
  {
    id: 4,
    title: "Contact",
    link: "",
  },
];

export const ProfileNavigationMockData: Navtype[] = [
  {
    id: 1,
    title: "Personnal Information",
    link: "",
  },
  {
    id: 2,
    title: "Intergation Prefrences",
    link: "",
  },
  {
    id: 3,
    title: "Notifictaion settings",
    link: "",
  },
  {
    id: 4,
    title: "Secutity Settings",
    link: "",
  },
];

export const ProductSidebarNavigationMockData: Navtype[] = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "My Services (Gigs)",
    link: "/dashboard/services",
    icon: FileText,
  },
  {
    id: 3,
    title: "Orders & Sales",
    link: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    id: 4,
    title: "Earnings & Payments",
    link: "/dashboard/earnings",
    icon: Wallet,
  },
  {
    id: 5,
    title: "Messages",
    link: "/dashboard/inbox",
    icon: MessageSquare,
  },
  {
    id: 6,
    title: "Reviews & Ratings",
    link: "/dashboard/reviews",
    icon: Star,
  },
  {
    id: 7,
    title: "Account Settings",
    link: "/dashboard/settings",
    icon: Settings,
  },
];

export const categorieData: {
  id: number;
  name: string;
  icon: LucideIcon;
  slug: string;
}[] = [
  {
    id: 1,
    name: "Plumbing",
    // AVANT: "icon": "lucide:pipe"
    icon: PiIcon,
    slug: "plumbing",
  },
  {
    id: 2,
    name: "Electrician",
    // AVANT: "icon": "lucide:zap"
    icon: Zap,
    slug: "electrician",
  },
  {
    id: 3,
    name: "Carpentry",
    // AVANT: "icon": "lucide:hammer"
    icon: Hammer,
    slug: "carpentry",
  },
  {
    id: 4,
    name: "Painting",
    icon: Brush,
    slug: "painting",
  },
  {
    id: 5,
    name: "Cleaning",
    icon: BombIcon,
    slug: "cleaning",
  },
  {
    id: 6,
    name: "Gardening",
    icon: LeafIcon,
    slug: "gardening",
  },
  {
    id: 7,
    name: "IT Services",
    icon: CpuIcon,
    slug: "it-services",
  },
  {
    id: 8,
    name: "Mobile Repair",
    icon: Smartphone,
    slug: "mobile-repair",
  },
  {
    id: 9,
    name: "Roofing",
    icon: HomeIcon,
    slug: "roofing",
  },
  {
    id: 10,
    name: "Consulting",
    icon: Briefcase,
    slug: "consulting",
  },
  {
    id: 11,
    name: "HVAC",
    icon: ThermometerIcon,
    slug: "hvac",
  },
  {
    id: 12,
    name: "Photography",
    icon: Camera,
    slug: "photography",
  },
  {
    id: 13,
    name: "Event Planning",
    icon: Calendar,
    slug: "event-planning",
  },
  {
    id: 14,
    name: "Tutoring",
    icon: BookOpen,
    slug: "tutoring",
  },
  {
    id: 15,
    name: "Freelance Writing",
    icon: FileText,
    slug: "freelance-writing",
  },
];

export const mostPopulartServece = [
  {
    id: "",
    img: "/services/popular/clean.png",
    title: "Clean up services",
    link: "",
  },

  {
    id: "",
    img: "/services/popular/Plumbing.png",
    title: "Plumbing services",
    link: "",
  },

  {
    id: "",
    img: "/services/popular/Painting.png",
    title: "Painting services",
    link: "",
  },

  {
    id: "",
    img: "/services/popular/electicity.png",
    title: "electicity services",
    link: "",
  },

  {
    id: "",
    img: "/services/popular/clean.png",
    title: "Clean up services",
    link: "",
  },

  {
    id: "",
    img: "/services/popular/Plumbing.png",
    title: "Plumbing services",
    link: "",
  },

  {
    id: "",
    img: "/services/popular/Painting.png",
    title: "Painting services",
    link: "",
  },

  {
    id: "",
    img: "/services/popular/electicity.png",
    title: "electicity services",
    link: "",
  },
  {
    id: "",
    img: "/services/popular/clean.png",
    title: "Clean up services",
    link: "",
  },

  {
    id: "",
    img: "/services/popular/Plumbing.png",
    title: "Plumbing services",
    link: "",
  },

  {
    id: "",
    img: "/services/popular/Painting.png",
    title: "Painting services",
    link: "",
  },

  {
    id: "",
    img: "/services/popular/electicity.png",
    title: "electicity services",
    link: "",
  },
];

export const mostPopulartHired = [
  {
    id: "ara8d11",
    img: "/mecanic.png",
    name: "OSHUN",
    lastname: "AYYO",
    work: "Carpentry",
    active: true,
    location: "Ijebu",
    rating: "4.5/5",
    note: "Expert in fine woodworking and custom furniture",
    bio: "Ayo has over 8 years of experience crafting custom furniture and wooden designs. His work combines durability and beauty with a traditional touch.",
    skills: ["Furniture Design", "Polishing", "Wood Cutting"],
    priceRange: "$50 - $300",
    projects: [
      { title: "Custom Dining Table", img: "/projects/table.jpg", category: "Furniture" },
      { title: "Office Desk", img: "/projects/desk.jpg", category: "Corporate" },
      { title: "Modern Wardrobe", img: "/projects/wardrobe.jpg", category: "Home" },
    ],
  },
  {
    id: "bra9e22",
    img: "/plumber.png",
    name: "ADEBAYO",
    lastname: "KUNLE",
    work: "Plumbing",
    active: true,
    location: "Lagos",
    rating: "4.8/5",
    note: "Specialist in residential and commercial plumbing",
    bio: "Kunle is a licensed plumber serving homes and small businesses. He provides fast, reliable plumbing installations and emergency repairs.",
    skills: ["Pipe Fitting", "Leak Repairs", "Bathroom Installations"],
    priceRange: "$30 - $200",
    projects: [
      { title: "Hotel Plumbing Setup", img: "/projects/hotel-plumbing.jpg", category: "Commercial" },
      { title: "Kitchen Sink Installation", img: "/projects/sink.jpg", category: "Home" },
    ],
  },
  {
    id: "cra0f33",
    img: "/electrician.png",
    name: "CHIOMA",
    lastname: "NWOSU",
    work: "Electrician",
    active: true,
    location: "Abuja",
    rating: "4.7/5",
    note: "Certified electrician with 10 years of experience",
    bio: "Chioma handles residential and industrial electrical projects with a focus on safety and modern technology.",
    skills: ["Wiring", "Maintenance", "Smart Systems"],
    priceRange: "$40 - $250",
    projects: [
      { title: "Smart Home Wiring", img: "/projects/smart-home.jpg", category: "Technology" },
      { title: "Office Lighting Design", img: "/projects/lighting.jpg", category: "Corporate" },
    ],
  },
  {
    id: "dra1g44",
    img: "/painter.png",
    name: "OLUWASEUN",
    lastname: "BABATUNDE",
    work: "Painting",
    active: true,
    location: "Ibadan",
    rating: "4.6/5",
    note: "Professional painter, interior and exterior",
    bio: "Oluwaseun brings life to walls with his creative color blending and professional finishing, offering both interior and exterior painting.",
    skills: ["Color Mixing", "Wall Design", "Exterior Finishing"],
    priceRange: "$25 - $150",
    projects: [
      { title: "Living Room Repaint", img: "/projects/livingroom.jpg", category: "Interior" },
      { title: "Office Exterior Paint", img: "/projects/exterior.jpg", category: "Commercial" },
    ],
  },
  {
    id: "era2h55",
    img: "/welder.png",
    name: "EMEKA",
    lastname: "OKAFOR",
    work: "Welding",
    active: true,
    location: "Port Harcourt",
    rating: "4.9/5",
    note: "Expert welder in metal structures",
    bio: "Emeka designs and builds strong metal structures for construction and custom projects with precision welding techniques.",
    skills: ["Metal Fabrication", "Arc Welding", "Steel Design"],
    priceRange: "$60 - $400",
    projects: [
      { title: "Steel Gate Fabrication", img: "/projects/gate.jpg", category: "Construction" },
      { title: "Balcony Railings", img: "/projects/railing.jpg", category: "Home" },
    ],
  },
  {
    id: "gra4j77",
    img: "/mechanic.png",
    name: "GODWIN",
    lastname: "OKONKWO",
    work: "Mechanic",
    active: true,
    location: "Enugu",
    rating: "4.7/5",
    note: "Certified automotive mechanic",
    bio: "Godwin is a professional auto mechanic who repairs all car brands and ensures clients’ vehicles are safe and road-ready.",
    skills: ["Engine Repair", "Diagnostics", "Car Maintenance"],
    priceRange: "$40 - $300",
    projects: [
      { title: "Toyota Engine Overhaul", img: "/projects/engine.jpg", category: "Repair" },
      { title: "Brake System Upgrade", img: "/projects/brakes.jpg", category: "Maintenance" },
    ],
  },
  {
    id: "hra5k88",
    img: "/tailor.png",
    name: "HALIMA",
    lastname: "BELLO",
    work: "Tailoring",
    active: true,
    location: "Kaduna",
    rating: "4.8/5",
    note: "Renowned tailor, traditional and modern clothing",
    bio: "Halima creates elegant traditional attires and modern fashion with a perfect fit. She’s passionate about Nigerian fabric culture.",
    skills: ["Ankara Sewing", "Fashion Design", "Alterations"],
    priceRange: "$20 - $150",
    projects: [
      { title: "Wedding Gown", img: "/projects/gown.jpg", category: "Bridal" },
      { title: "Agbada Set", img: "/projects/agbada.jpg", category: "Traditional" },
    ],
  },
  {
    id: "ora2r55",
    img: "/photog.png",
    name: "OLUWATOBI",
    lastname: "DAVIES",
    work: "Photography",
    active: true,
    location: "Victoria Island",
    rating: "4.7/5",
    note: "Professional event and corporate photographer",
    bio: "Oluwatobi captures timeless memories at weddings, events, and corporate shoots using modern photography tools.",
    skills: ["Event Coverage", "Editing", "Lighting"],
    priceRange: "$100 - $600",
    projects: [
      { title: "Wedding Shoot", img: "/projects/wedding.jpg", category: "Event" },
      { title: "Corporate Portraits", img: "/projects/portrait.jpg", category: "Studio" },
    ],
  },
  {
    id: "wra0z33",
    img: "/makeup.png",
    name: "WURA",
    lastname: "ADELEKE",
    work: "Makeup Artist",
    active: true,
    location: "Lagos",
    rating: "5.0/5",
    note: "Professional makeup artist, weddings and events",
    bio: "Wura is one of Lagos’ most sought-after makeup artists, specializing in bridal and photo-ready looks with flawless finishes.",
    skills: ["Bridal Makeup", "Editorial", "Beauty Consultation"],
    priceRange: "$40 - $250",
    projects: [
      { title: "Bridal Makeup", img: "/projects/bridal.jpg", category: "Wedding" },
      { title: "Runway Look", img: "/projects/runway.jpg", category: "Fashion" },
    ],
  },
];

export const FeaturiMock = [
  {
    id: "",
    title: "Experts Dedicated to Recruitment",
    desc: "Count on an account manager to find the right expert and meet all your project needs.",
  },
  {
    id: "",
    title: "Advanced Management Tools",
    desc: "Seamlessly integrate freelancers into your team and projects.",
  },
  {
    id: "",
    title: "Satisfaction Guaranteed",
    desc: "Order with confidence, with guaranteed refunds in case of unsatisfactory delivery.",
  },
  {
    id: "",
    title: "Flexible Payment Models",
    desc: "Pay per project or choose hourly rates for longer-term collaboration.",
  },
];
export const ServicesMock = [
  {
    id: "srv_001",
    title: "Plumbing Repair",
    desc: "Fixing leaking pipes, bathroom fittings, and kitchen sinks. Fast and reliable service for homes and offices.",
    image:
      "[https://images.unsplash.com/photo-1581579186919-b50b07e4f87e](https://images.unsplash.com/photo-1581579186919-b50b07e4f87e)",
    price: "₦15,000",
    date: "2025-10-20",
  },
  {
    id: "srv_002",
    title: "Electrical Installation",
    desc: "Professional installation of wiring, sockets, and lighting systems for residential and commercial buildings.",
    image: "",
    price: "₦25,000",
    date: "2025-09-10",
  },
  {
    id: "srv_003",
    title: "Home Painting",
    desc: "Interior and exterior painting with high-quality finishes. Choose from various color styles and textures.",
    image: "",
    price: "₦30,000",
    date: "2025-08-12",
  },
  {
    id: "srv_004",
    title: "Carpentry Work",
    desc: "Custom furniture, door installation, and wood repair crafted by experienced carpenters.",
    image: "",
    price: "₦40,000",
    date: "2025-07-22",
  },
  {
    id: "srv_005",
    title: "Haircut & Grooming",
    desc: "Modern men’s haircut and beard styling services with top hygiene standards.",
    image: "",
    price: "₦5,000",
    date: "2025-09-05",
  },
  {
    id: "srv_006",
    title: "Tailoring & Clothing Design",
    desc: "Custom-made dresses and traditional outfits designed to fit your style perfectly.",
    image: "",
    price: "₦18,000",
    date: "2025-10-01",
  },
  {
    id: "srv_007",
    title: "House Cleaning",
    desc: "Deep cleaning of homes and offices with eco-friendly products. Perfect for end-of-tenancy or post-renovation.",
    image: "",
    price: "₦12,000",
    date: "2025-10-11",
  },
  {
    id: "srv_008",
    title: "Auto Mechanic Service",
    desc: "Engine diagnostics, oil change, and full vehicle inspection by certified mechanics.",
    image: "",
    price: "₦35,000",
    date: "2025-09-25",
  },
  {
    id: "srv_009",
    title: "AC Installation & Maintenance",
    desc: "Installation and servicing of air conditioners for homes, shops, and offices.",
    image:
      "[https://images.unsplash.com/photo-1603791440384-56cd371ee9a7](https://images.unsplash.com/photo-1603791440384-56cd371ee9a7)",
    price: "₦22,000",
    date: "2025-08-30",
  },
  {
    id: "srv_010",
    title: "Gardening & Landscaping",
    desc: "Garden maintenance, lawn care, and flower bed design to beautify your outdoor space.",
    image: "",
    price: "₦28,000",
    date: "2025-09-18",
  },
  {
    id: "srv_011",
    title: "CCTV & Security Installation",
    desc: "Installation of CCTV cameras and smart home security systems for safety and surveillance.",
    image: "",
    price: "₦45,000",
    date: "2025-10-05",
  },
  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },
];

export const JobsMock = [
  {
    id: "srv_001",
    title: "Plumbing Repair",
    desc: "Fixing leaking pipes, bathroom fittings, and kitchen sinks. Fast and reliable service for homes and offices.",
    image:
      "[https://images.unsplash.com/photo-1581579186919-b50b07e4f87e](https://images.unsplash.com/photo-1581579186919-b50b07e4f87e)",
    price: "₦15,000",
    date: "2025-10-20",
  },
  {
    id: "srv_002",
    title: "Electrical Installation",
    desc: "Professional installation of wiring, sockets, and lighting systems for residential and commercial buildings.",
    image: "",
    price: "₦25,000",
    date: "2025-09-10",
  },
  {
    id: "srv_003",
    title: "Home Painting",
    desc: "Interior and exterior painting with high-quality finishes. Choose from various color styles and textures.",
    image: "",
    price: "₦30,000",
    date: "2025-08-12",
  },
  {
    id: "srv_004",
    title: "Carpentry Work",
    desc: "Custom furniture, door installation, and wood repair crafted by experienced carpenters.",
    image: "",
    price: "₦40,000",
    date: "2025-07-22",
  },
  {
    id: "srv_005",
    title: "Haircut & Grooming",
    desc: "Modern men’s haircut and beard styling services with top hygiene standards.",
    image: "",
    price: "₦5,000",
    date: "2025-09-05",
  },
  {
    id: "srv_006",
    title: "Tailoring & Clothing Design",
    desc: "Custom-made dresses and traditional outfits designed to fit your style perfectly.",
    image: "",
    price: "₦18,000",
    date: "2025-10-01",
  },
  {
    id: "srv_007",
    title: "House Cleaning",
    desc: "Deep cleaning of homes and offices with eco-friendly products. Perfect for end-of-tenancy or post-renovation.",
    image: "",
    price: "₦12,000",
    date: "2025-10-11",
  },
  {
    id: "srv_008",
    title: "Auto Mechanic Service",
    desc: "Engine diagnostics, oil change, and full vehicle inspection by certified mechanics.",
    image: "",
    price: "₦35,000",
    date: "2025-09-25",
  },
  {
    id: "srv_009",
    title: "AC Installation & Maintenance",
    desc: "Installation and servicing of air conditioners for homes, shops, and offices.",
    image:
      "[https://images.unsplash.com/photo-1603791440384-56cd371ee9a7](https://images.unsplash.com/photo-1603791440384-56cd371ee9a7)",
    price: "₦22,000",
    date: "2025-08-30",
  },
  {
    id: "srv_010",
    title: "Gardening & Landscaping",
    desc: "Garden maintenance, lawn care, and flower bed design to beautify your outdoor space.",
    image: "",
    price: "₦28,000",
    date: "2025-09-18",
  },
  {
    id: "srv_011",
    title: "CCTV & Security Installation",
    desc: "Installation of CCTV cameras and smart home security systems for safety and surveillance.",
    image: "",
    price: "₦45,000",
    date: "2025-10-05",
  },
  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },
  {
    id: "srv_011",
    title: "CCTV & Security Installation",
    desc: "Installation of CCTV cameras and smart home security systems for safety and surveillance.",
    image: "",
    price: "₦45,000",
    date: "2025-10-05",
  },
  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_011",
    title: "CCTV & Security Installation",
    desc: "Installation of CCTV cameras and smart home security systems for safety and surveillance.",
    image: "",
    price: "₦45,000",
    date: "2025-10-05",
  },
  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_011",
    title: "CCTV & Security Installation",
    desc: "Installation of CCTV cameras and smart home security systems for safety and surveillance.",
    image: "",
    price: "₦45,000",
    date: "2025-10-05",
  },
  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_011",
    title: "CCTV & Security Installation",
    desc: "Installation of CCTV cameras and smart home security systems for safety and surveillance.",
    image: "",
    price: "₦45,000",
    date: "2025-10-05",
  },
  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_011",
    title: "CCTV & Security Installation",
    desc: "Installation of CCTV cameras and smart home security systems for safety and surveillance.",
    image: "",
    price: "₦45,000",
    date: "2025-10-05",
  },
  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },
  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },

  {
    id: "srv_012",
    title: "Interior Decoration",
    desc: "Creative interior design to make your home or office look elegant and modern.",
    image: "",
    price: "₦60,000",
    date: "2025-09-14",
  },
];
