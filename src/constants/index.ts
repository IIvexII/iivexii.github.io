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
    text: "{Clarity} about what matters provides clarity about what does not.",
    reference: "Cal Newport",
  },
];

export const myInfo = {
  aboutMe: `As a computer science student, I have a strong passion for {designing
    and developing systems} that solve real-world problems. I am a
    self-taught computer programmer with strong foundations in web development, 
    embedded system programming, and system designing. I am very consious about the
    code quality and follow best practices in almost all my projects. 
    I have an interest in robotics as well. During my tenure as a {Technical Head} 
    at GEARS (Garrison Engineering and Robotics Society), 
    we have participated in various national robotic competitions and have won several awards.`,

  skills: [
    { name: "Python", icon: "/assets/tech-stack/python.svg" },
    { name: "JavaScript", icon: "/assets/tech-stack/javascript.svg" },
    { name: "React", icon: "/assets/tech-stack/react.svg" },
    { name: "Redux", icon: "/assets/tech-stack/redux.svg" },
    { name: "Tailwind", icon: "/assets/tech-stack/tailwindcss-icon.svg" },
    { name: "HTML", icon: "/assets/tech-stack/html-5.svg" },
    { name: "CSS", icon: "/assets/tech-stack/css-3.svg" },
    { name: "Figma", icon: "/assets/tech-stack/figma.svg" },
    { name: "Git", icon: "/assets/tech-stack/git.svg" },
    { name: "GitHub", icon: "/assets/tech-stack/github-icon.svg" },
    { name: "Postman", icon: "/assets/tech-stack/postman.svg" },
    { name: "Docker", icon: "/assets/tech-stack/docker-icon.svg" },
    { name: "MongoDB", icon: "/assets/tech-stack/mongodb.svg" },
    { name: "MySQL", icon: "/assets/tech-stack/mysql.svg" },
    { name: "Laravel", icon: "/assets/tech-stack/laravel.svg" },
    { name: "Arduino", icon: "/assets/tech-stack/arduino.svg" },
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
