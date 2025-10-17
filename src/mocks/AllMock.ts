import { Navtype } from "@/types/NavigationTyes";
import {
    LayoutDashboard,
    Store,         
    ShoppingCart,
    MessageSquare,
    Star,
    Wallet,
    FileText,       
    Settings,
    LucideIcon
} from 'lucide-react'
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