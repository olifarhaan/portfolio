import { MdRealEstateAgent } from "react-icons/md";
import { MdTask } from "react-icons/md";
import { FaStaylinked } from "react-icons/fa6";
import { FaShopify } from "react-icons/fa";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { TiSocialInstagramCircular } from "react-icons/ti";




export const projects = [
  {
    id: 1,
    title: "Griha Milan",
    shortDescription: "A Productivity App of Managing Tasks",
    description:
      "Engineered dynamic listing features, allowing users to create, update, and manage property listings effortlessly. Crafted an interactive interface, elevating user experience with a modern design aligned with industry standards. Integrated Firebase authentication to guarantee data security and user authentication integrity.",
    tech: ["React", "Firebase", "Firestore", "Tailwind"],
    Icon: MdRealEstateAgent,
    github: "https://github.com/olifarhaan/griha-milan",
    link: "https://griha-milan.vercel.app/",
  },
  {
    id: 2,
    title: "Quick Quip",
    shortDescription: "URL Shortening & QR Code Generator App",

    description:
      "Architected and developed a comprehensive & scalable application with URL shortening, QR code generation features, and a modern UI. Used best coding practices & implemented custom middlewares ensuring clean & modularized code and data integrity.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    Icon: FaStaylinked,
    github: "https://github.com/olifarhaan/quick-quip",

    link: "https://quick-quip.onrender.com/",
  },
  {
    id: 3,
    title: "Spring Sprint",
    shortDescription: "A Productivity App of Managing Tasks",

    description:
      "Directed the full-stack development, emphasizing a smooth flow, dynamic frontend & robust data management. Conducted thorough testing to validate optimal performance and ensure the functionality of CRUD operations.",
    tech: ["React", "SpringBoot", "Hibernate", "SQL", "Postman", "Bootstrap"],
    Icon: MdTask,
    github: "https://github.com/olifarhaan/spring-sprint",

    link: "https://griha-milan.vercel.app/",
  },
  {
    id: 4,
    title: "Liba Fashions LLC",
    shortDescription: "eCommerce Web App For Fashion Boutique",

    description:
      "Spearheaded eCommerce website design and development on Shopify and tested thoroughly forintuitive user experience Collaborated with the marketing team to implement theirinstructions, ensuring seamless UI/UX. Single-handedly brought this project to life, from conception to execution, demonstrating exceptional initiative and self-reliance.",
    tech: ["Shopify", "HTML", "CSS", "JS", "Canva"],
    Icon: FaShopify,

    link: "https://libafashions.com",
  },
  {
    id: 5,
    title: "Dev Pulse",
    shortDescription: "Full Stack Blogging Platform for Developers",

    description:
      "Established robust role-based authentication for users, authors, and admins, ensuring secure access and control over services. Facilitated users, authors, and admins in effortlessly crafting, exploring, updating, and managing posts, accounts, and comments. Designed an aesthetically pleasing dashboard and responsive UI with dynamic dark and light mode options.",
    tech: ["React", "Node", "Express", "MongoDB", "Firebase", "Tailwind"],
    Icon: BsFileEarmarkCodeFill,
    github: "https://github.com/olifarhaan/dev-pulse",
    link: "https://dev-pulse-b2r3.onrender.com/",
  },
  {
    id: 6,
    title: "Social Nest",
    shortDescription: "Backend Application  for Social Media App",

    description:
      "SocialNest is a robust and scalable social media backend built using the Node with TypeScript. Leveraging the power of Redis for efficient caching and data management, SocialNest provides users with a seamless and engaging social networking experience. From user authentication and profile management to real-time content sharing, SocialNest offers a comprehensive suite of features to connect users worldwide.",
    tech: ["Typescript", "Node", "Express", "MongoDB", "Redis", "Tailwind"],
    Icon: TiSocialInstagramCircular,
    github: "https://github.com/olifarhaan/social-nest",
  },
];
