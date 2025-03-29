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
  aboutMe: `I started my tech journey in cybersecurity, learning how to keep systems safe and write secure code. Then I found frontend development and got hooked on creating beautiful, engaging designs. Backend development came next, teaching me how to build the powerful systems that run everything smoothly behind the scenes.

But things really clicked {when I built my first mobile app}. That’s when React Native became my home—a place where I bring it all together: secure coding from my cybersecurity days, eye-catching UI/UX from frontend work, and rock-solid systems from the backend. For me, apps aren’t just tools—they’re the perfect way to solve problems and make life a little easier.`,

  skills: [
    { name: "React Native", icon: "/assets/tech-stack/react.svg" },
    { name: "Expo", icon: "/assets/tech-stack/expo.png" },
    { name: "Skia", icon: "/assets/tech-stack/skia.png" },
    { name: "Reanimated v3", icon: "/assets/tech-stack/reanimated.svg" },

    { name: "NativeWind", icon: "/assets/tech-stack/nativewind.svg" },
    { name: "LiveKit", icon: "/assets/tech-stack/livekit.png" },
    { name: "TypeScript", icon: "/assets/tech-stack/typescript.svg" },

    { name: "JavaScript", icon: "/assets/tech-stack/javascript.svg" },
    { name: "Next.js", icon: "/assets/tech-stack/nextjs.svg" },
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
      title: "LineAudio: Real-Time Audio Meeting App with Role-Based Access",
      description:
        "A real-time audio meeting app that allows users to join meetings with role-based access control, built using React Native and Expo.",
      image: "/assets/images/projects/LineAudio.png",
      tags: ["React Native", "Expo", "NativeWind", "LiveKit"],
    },
    {
      title: "ForecastFlow: See the Future of Weather on Your Phone",
      description: "A weather app that provides real-time weather updates and forecasts, built using React Native.",
      image: "/assets/images/projects/ForecastFlow.png",
      tags: ["React Native", "Expo", "Skia", "Reanimated v3", "React Query"],
    },
    {
      title: "DevGuard: A Platform for freelancers to protect against non-paying clients",
      description:
        "A platform that helps freelancers protect themselves against non-paying clients by providing a unique way of blocking/unblocking apps from the dashboard.",
      image: "/assets/images/projects/DevGuard.png",
      tags: ["Next.js", "Tailwind CSS", "Supabase", "Next-Auth", "Vercel"],
      demoLink: "https://devguard.zafeer.pk/",
    },
  ],

  contactInfo: {
    email: "contact@zafeer.pk",
    location: "Lahore, Pakistan",
  },
};
