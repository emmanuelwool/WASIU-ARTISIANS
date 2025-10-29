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
    BookOpen         
} from 'lucide-react'
import { title } from "process";
export const NavigationMockData:Navtype[] =  [
    {
        id:1,
        title:"Home",
        link:""
    },
     {
        id:2,
        title:"Browse Jobs",
        link:""
    },
     {
        id:3,
        title:"Brows Talents",
        link:""
    },
     {
        id:4,
        title:"Contact",
        link:""
    }
]


export const ProfileNavigationMockData:Navtype[] =  [
    {
        id:1,
        title:"Personnal Information",
        link:""
    },
     {
        id:2,
        title:"Intergation Prefrences",
        link:""
    },
     {
        id:3,
        title:"Notifictaion settings",
        link:""
    },
     {
        id:4,
        title:"Secutity Settings",
        link:""
    }
]



export const ProductSidebarNavigationMockData: Navtype[] = [
    {
        id: 1,
        title: "Dashboard",
        link: "/dashboard",
        icon: LayoutDashboard
    },
    {
        id: 2,
        title: "My Services (Gigs)", 
        link: "/dashboard/services",
        icon: FileText 
    },
    {
        id: 3,
        title: "Orders & Sales", 
        link: "/dashboard/orders",
        icon: ShoppingCart
    },
    {
        id: 4,
        title: "Earnings & Payments",
        link: "/dashboard/earnings",
        icon: Wallet
    },
    {
        id: 5,
        title: "Messages",
        link: "/dashboard/inbox", 
        icon: MessageSquare
    },
    {
        id: 6,
        title: "Reviews & Ratings", 
        link: "/dashboard/reviews",
        icon: Star
    },
    {
        id: 7,
        title: "Account Settings", 
        link: "/dashboard/settings",
        icon: Settings
    }
]




export const categorieData: { id: number, name: string, icon: LucideIcon, slug: string }[] = [
  {
    "id": 1,
    "name": "Plumbing",
    // AVANT: "icon": "lucide:pipe"
    "icon": PiIcon,
    "slug": "plumbing"
  },
  {
    "id": 2,
    "name": "Electrician",
    // AVANT: "icon": "lucide:zap"
    "icon": Zap,
    "slug": "electrician"
  },
  {
    "id": 3,
    "name": "Carpentry",
    // AVANT: "icon": "lucide:hammer"
    "icon": Hammer,
    "slug": "carpentry"
  },
  {
    "id": 4,
    "name": "Painting",
    "icon": Brush,
    "slug": "painting"
  },
  {
    "id": 5,
    "name": "Cleaning",
    "icon": BombIcon,
    "slug": "cleaning"
  },
  {
    "id": 6,
    "name": "Gardening",
    "icon": LeafIcon,
    "slug": "gardening"
  },
  {
    "id": 7,
    "name": "IT Services",
    "icon": CpuIcon,
    "slug": "it-services"
  },
  {
    "id": 8,
    "name": "Mobile Repair",
    "icon": Smartphone,
    "slug": "mobile-repair"
  },
  {
    "id": 9,
    "name": "Roofing",
    "icon":  HomeIcon, 
    "slug": "roofing"
  },
  {
    "id": 10,
    "name": "Consulting",
    "icon": Briefcase,
    "slug": "consulting"
  },
  {
    "id": 11,
    "name": "HVAC",
    "icon": ThermometerIcon,
    "slug": "hvac"
  },
  {
    "id": 12,
    "name": "Photography",
    "icon": Camera,
    "slug": "photography"
  },
  {
    "id": 13,
    "name": "Event Planning",
    "icon": Calendar,
    "slug": "event-planning"
  },
  {
    "id": 14,
    "name": "Tutoring",
    "icon": BookOpen,
    "slug": "tutoring"
  },
  {
    "id": 15,
    "name": "Freelance Writing",
    "icon": FileText,
    "slug": "freelance-writing"
  },
  
]



export const mostPopulartServece = [
  {
    id:'',
    img:'/services/popular/clean.png',
    title:'Clean up services',
    link:''
  },


  {
    id:'',
    img:'/services/popular/Plumbing.png',
    title:'Plumbing services',
    link:''
  },


  {
    id:'',
    img:'/services/popular/Painting.png',
    title:'Painting services',
    link:''
  },


  {
    id:'',
    img:'/services/popular/electicity.png',
    title:'electicity services',
    link:''
  },


{
    id:'',
    img:'/services/popular/clean.png',
    title:'Clean up services',
    link:''
  },


  {
    id:'',
    img:'/services/popular/Plumbing.png',
    title:'Plumbing services',
    link:''
  },


  {
    id:'',
    img:'/services/popular/Painting.png',
    title:'Painting services',
    link:''
  },


  {
    id:'',
    img:'/services/popular/electicity.png',
    title:'electicity services',
    link:''
  },
{
    id:'',
    img:'/services/popular/clean.png',
    title:'Clean up services',
    link:''
  },


  {
    id:'',
    img:'/services/popular/Plumbing.png',
    title:'Plumbing services',
    link:''
  },


  {
    id:'',
    img:'/services/popular/Painting.png',
    title:'Painting services',
    link:''
  },


  {
    id:'',
    img:'/services/popular/electicity.png',
    title:'electicity services',
    link:''
  },


 
]


export const mostPopulartHired = [
  {
    id: 'ara8d11',
    img: '/mecanic.png',
    name: 'OSHUN',
    lastname: 'AYYO',
    work: 'Carpentry',
    active: true,
    location: 'Ijebu',
    rating: '4.5/5',
    note: 'Expert in fine woodworking and custom furniture'
  },
  {
    id: 'bra9e22',
    img: '/plumber.png',
    name: 'ADEBAYO',
    lastname: 'KUNLE',
    work: 'Plumbing',
    active: true,
    location: 'Lagos',
    rating: '4.8/5',
    note: 'Specialist in residential and commercial plumbing'
  },
  {
    id: 'cra0f33',
    img: '/electrician.png',
    name: 'CHIOMA',
    lastname: 'NWOSU',
    work: 'Electrician',
    active: true,
    location: 'Abuja',
    rating: '4.7/5',
    note: 'Certified electrician with 10 years of experience'
  },
  {
    id: 'dra1g44',
    img: '/painter.png',
    name: 'OLUWASEUN',
    lastname: 'BABATUNDE',
    work: 'Painting',
    active: true,
    location: 'Ibadan',
    rating: '4.6/5',
    note: 'Professional painter, interior and exterior'
  },
  {
    id: 'era2h55',
    img: '/welder.png',
    name: 'EMEKA',
    lastname: 'OKAFOR',
    work: 'Welding',
    active: true,
    location: 'Port Harcourt',
    rating: '4.9/5',
    note: 'Expert welder in metal structures'
  },
  {
    id: 'fra3i66',
    img: '/mason.png',
    name: 'FATIMA',
    lastname: 'HASSAN',
    work: 'Masonry',
    active: true,
    location: 'Kano',
    rating: '4.4/5',
    note: 'Specialized in modern construction'
  },
  {
    id: 'gra4j77',
    img: '/mechanic.png',
    name: 'GODWIN',
    lastname: 'OKONKWO',
    work: 'Mechanic',
    active: true,
    location: 'Enugu',
    rating: '4.7/5',
    note: 'Certified automotive mechanic'
  },
  {
    id: 'hra5k88',
    img: '/tailor.png',
    name: 'HALIMA',
    lastname: 'BELLO',
    work: 'Tailoring',
    active: true,
    location: 'Kaduna',
    rating: '4.8/5',
    note: 'Renowned tailor, traditional and modern clothing'
  },
  {
    id: 'ira6l99',
    img: '/gardener.png',
    name: 'IBRAHIM',
    lastname: 'MUSA',
    work: 'Gardening',
    active: true,
    location: 'Jos',
    rating: '4.5/5',
    note: 'Landscape gardener with design expertise'
  },
  {
    id: 'jra7m00',
    img: '/cook.png',
    name: 'JOYCE',
    lastname: 'ADEYEMI',
    work: 'Catering',
    active: true,
    location: 'Lagos',
    rating: '4.9/5',
    note: 'Catering chef, local and international cuisine'
  },
  {
    id: 'kra8n11',
    img: '/cleaner.png',
    name: 'KEMI',
    lastname: 'WILLIAMS',
    work: 'Cleaning',
    active: true,
    location: 'Lekki',
    rating: '4.6/5',
    note: 'Professional residential cleaning service'
  },
  {
    id: 'lra9o22',
    img: '/driver.png',
    name: 'LEKAN',
    lastname: 'AJAYI',
    work: 'Driving',
    active: true,
    location: 'Ikeja',
    rating: '4.7/5',
    note: 'Professional driver with international license'
  },
  {
    id: 'mra0p33',
    img: '/barber.png',
    name: 'MOHAMMED',
    lastname: 'YUSUF',
    work: 'Barbering',
    active: true,
    location: 'Sokoto',
    rating: '4.8/5',
    note: 'Expert barber in modern and traditional cuts'
  },
  {
    id: 'nra1q44',
    img: '/stylist.png',
    name: 'NGOZI',
    lastname: 'OBI',
    work: 'Hair Styling',
    active: true,
    location: 'Owerri',
    rating: '4.9/5',
    note: 'Certified hair stylist, all textures'
  },
  {
    id: 'ora2r55',
    img: '/photog.png',
    name: 'OLUWATOBI',
    lastname: 'DAVIES',
    work: 'Photography',
    active: true,
    location: 'Victoria Island',
    rating: '4.7/5',
    note: 'Professional event and corporate photographer'
  },
  {
    id: 'pra3s66',
    img: '/security.png',
    name: 'PETER',
    lastname: 'OKORO',
    work: 'Security',
    active: true,
    location: 'Abuja',
    rating: '4.6/5',
    note: 'Experienced and trained security officer'
  },
  {
    id: 'qra4t77',
    img: '/teacher.png',
    name: 'QUEEN',
    lastname: 'EFFIONG',
    work: 'Tutoring',
    active: true,
    location: 'Calabar',
    rating: '4.9/5',
    note: 'Private teacher, all subjects secondary level'
  },
  {
    id: 'rra5u88',
    img: '/techni.png',
    name: 'RASHEED',
    lastname: 'ADEKUNLE',
    work: 'IT Support',
    active: true,
    location: 'Lagos',
    rating: '4.8/5',
    note: 'Certified IT and network technician'
  },
  {
    id: 'sra6v99',
    img: '/nurse.png',
    name: 'SARAH',
    lastname: 'DANIEL',
    work: 'Nursing',
    active: true,
    location: 'Port Harcourt',
    rating: '4.9/5',
    note: 'Home nurse, palliative and post-op care'
  },
  {
    id: 'tra7w00',
    img: '/trainer.png',
    name: 'TUNDE',
    lastname: 'OLALEYE',
    work: 'Fitness Training',
    active: true,
    location: 'Ikoyi',
    rating: '4.7/5',
    note: 'Certified fitness coach, personalized programs'
  },
  {
    id: 'ura8x11',
    img: '/artist.png',
    name: 'UCHE',
    lastname: 'NNAJI',
    work: 'Art & Design',
    active: true,
    location: 'Enugu',
    rating: '4.8/5',
    note: 'Freelance painter and graphic designer'
  },
  {
    id: 'vra9y22',
    img: '/vet.png',
    name: 'VICTOR',
    lastname: 'ADEGOKE',
    work: 'Veterinary',
    active: true,
    location: 'Abeokuta',
    rating: '4.6/5',
    note: 'Home veterinarian for domestic animals'
  },
  {
    id: 'wra0z33',
    img: '/makeup.png',
    name: 'WURA',
    lastname: 'ADELEKE',
    work: 'Makeup Artist',
    active: true,
    location: 'Lagos',
    rating: '5.0/5',
    note: 'Professional makeup artist, weddings and events'
  },
  {
    id: 'xra1a44',
    img: '/hvac.png',
    name: 'XAVIER',
    lastname: 'UZOMA',
    work: 'HVAC Technician',
    active: true,
    location: 'Abuja',
    rating: '4.7/5',
    note: 'Certified air conditioning and ventilation technician'
  }
]


export const FeaturiMock = [
  {
    id: "",
    title: "Experts Dedicated to Recruitment",
    desc: "Count on an account manager to find the right expert and meet all your project needs."
  },
  {
    id: "",
    title: "Advanced Management Tools",
    desc: "Seamlessly integrate freelancers into your team and projects."
  },
  {
    id: "",
    title: "Satisfaction Guaranteed",
    desc: "Order with confidence, with guaranteed refunds in case of unsatisfactory delivery."
  },
  {
    id: "",
    title: "Flexible Payment Models",
    desc: "Pay per project or choose hourly rates for longer-term collaboration."
  }
]

export const ServicesMock = [
  {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  },
   {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  },
   {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  },
   {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  },
   {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  },
   {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  },
   {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  },
   {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  },
   {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  },

   {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  },
   {
    id:"etfexay",
    title:"Nursecs",
    desc:"",
    imag:"",
    price:"", 
    date:''
  }
]