import { Icon } from "@chakra-ui/react"
import {  
    FiHome, 
    FiUser, 
    FiPenTool, 
    FiPhone, 
    FiFolder, 
    FiGithub, 
    FiTwitter, 
    FiMail
} from "react-icons/fi"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"

const links = [
    {
      id: 0,
      text: 'Home',
      url: '/',
      icon: FiHome,
    },
    {
        id: 1,
        text: 'About',
        url: '#about',
        icon: FiUser,

    },
    {
        id: 2,
        text: 'Projects',
        url: '#projects',
        icon: FiFolder,
    },
    {
        id: 3,
        text: 'Blog',
        url: '/blog',
        icon: FiPenTool,
    },
    {
        id: 4,
        text: 'Contact',
        url: '#contact',
        icon: FiPhone,
    }
]


export default links

export const socials = [
    {
        id: 1,
        icon: <Icon as={FiMail} />
,
        url: 'mailto:bellololade2017@gmail.com',
    },
    {
        id: 2,
        icon: <Icon as={FiGithub} />
,
        url: 'https://github.com/Haryor-Mhie-max',
    },
    {
        id: 3,
        icon: <Icon as={FiTwitter} />
,
        url: 'https://mobile.twitter.com/hey_Ololade',
    },
]


export const items = [
    {
        id: '01',
        stack: [<Icon as={SiNextdotjs} />, <Icon as={SiTailwindcss} />],
        title: 'Coffe Shop Landing Page',
        desc: '5 bucks is a coffee shop landing page concept. The idea is to get a coffee delivered faster at no cost higher than 5 bucks. They also offer delivery as service.',
        image: '/5Bucks.png',
        url: '/',
    },
    {
        id: '02',
        stack: [<Icon as={SiNextdotjs} />, <Icon as={SiTailwindcss} />],
        title: 'TradR Crypto Landing Page',
        desc: 'TradR is a crypto landing page concept. The idea is to be able to buy and sell any cryptocurrency as fast as possible from anywhere with low cost.',
        image: '/TradR.png',
        url: '/',
    },
    {
        id: '03',
        stack: [<Icon as={SiNextdotjs} />, <Icon as={SiTailwindcss} />],
        title: 'Cryptol Onboarding Screen',
        desc: 'Haven is a real estate landing page. Aimed at providing the best houses at affordable prices without the discomfort of house hunting. You can buy, sell and rent houses from Haven now!.',
        image: '/haven.png',
        url: 'https://new-haven.vercel.app/',
    },
    
]