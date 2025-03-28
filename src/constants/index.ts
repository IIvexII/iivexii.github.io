import { faLinkedinIn, faGithubAlt, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faHome, faToolbox, faCompassDrafting, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const socialInfo = [
  { name: "Github", icon: faGithubAlt, link: "https://github.com/IIvexII" },
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/zafeer-hafeez/",
  },
  {
    name: "Twitter",
    icon: faXTwitter,
    link: "https://twitter.com/Zafeer_Hafeez",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/zafeerhafeez/",
  },
];

export const pageInfo = [
  { name: "Home", icon: faHome, link: "#home" },
  { name: "About", icon: faCircleInfo, link: "#about-me" },
  { name: "Skills", icon: faToolbox, link: "#skills" },
  { name: "Projects", icon: faCompassDrafting, link: "#projects" },
  { name: "Contact", icon: faAddressCard, link: "#contact" },
];

export const quotes = [
  {
    text: "He who has a {why} to live can bear almost any {how}.",
    reference: "Friedrich Nietzsche",
  },
];

export const myInfo = {
  aboutMe: `My tech story starts with cybersecurity, where I learned to protect systems when I did then CEH. Then I fell in love with frontend development. Backend development taught me to build the systems behind the scenes, and AI chatbots showed me how tech could connect with people and solve their problems by understanding them. {But when I built my first mobile app, it all clicked.}
  
  React Native became my home. Here, I combine everything—secure code from my cybersecurity days, polished UI/UX from frontend work, scalable logic from backend systems, and smart features inspired by AI. Apps aren’t just tools; they’re bridges between problems and solutions.`,

  skills: [
    { name: "React Native", icon: "/assets/tech-stack/react.svg" },
    { name: "JavaScript", icon: "/assets/tech-stack/javascript.svg" },
    { name: "Redux", icon: "/assets/tech-stack/redux.svg" },
    { name: "Tailwind", icon: "/assets/tech-stack/tailwindcss-icon.svg" },
    { name: "GitHub", icon: "/assets/tech-stack/github-icon.svg" },
    { name: "HTML", icon: "/assets/tech-stack/html-5.svg" },
    { name: "CSS", icon: "/assets/tech-stack/css-3.svg" },
    { name: "Figma", icon: "/assets/tech-stack/figma.svg" },
    { name: "Git", icon: "/assets/tech-stack/git.svg" },
    { name: "Postman", icon: "/assets/tech-stack/postman.svg" },
    { name: "Docker", icon: "/assets/tech-stack/docker-icon.svg" },
    { name: "MongoDB", icon: "/assets/tech-stack/mongodb.svg" },
    { name: "MySQL", icon: "/assets/tech-stack/mysql.svg" },
    { name: "Laravel", icon: "/assets/tech-stack/laravel.svg" },
    { name: "Arduino", icon: "/assets/tech-stack/arduino.svg" },
    { name: "Python", icon: "/assets/tech-stack/python.svg" },
    { name: "Django", icon: "/assets/tech-stack/django.svg" },
    { name: "Langchain", icon: "/assets/tech-stack/langchain.png" },
  ],

  projects: [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and Tailwind CSS featuring responsive design and smooth animations.",
      image: "/assets/projects/portfolio.jpg",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      githubLink: "https://github.com/IIvexII/iivexii.github.io",
      demoLink: "https://zafeer.portfolio.com.pk",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with payment integration, product management, and user authentication.",
      image: "/assets/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/IIvexII",
    },
    {
      title: "Robotics Control System",
      description:
        "An embedded system for controlling robotic movements with precision using Arduino and custom sensor integration.",
      image: "/assets/projects/robotics.jpg",
      tags: ["Arduino", "C++", "Hardware", "Electronics"],
      githubLink: "https://github.com/IIvexII",
    },
  ],

  contactInfo: {
    email: "zafeerhafeez@gmail.com",
    location: "Islamabad, Pakistan",
  },
};
