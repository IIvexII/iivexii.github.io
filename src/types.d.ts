import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface SocialInfo {
  name: string;
  icon: IconDefinition;
  link: string;
}

export interface PageInfo {
  name: string;
  icon: IconDefinition;
  link: string;
}

export interface Quote {
  text: string;
  reference: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface MyInfo {
  aboutMe: string;
  skills: Skill[];
}

export interface HeaderProps {
  name: string;
  socialInfo: SocialInfo;
  pageInfo: PageInfo;
}

export interface HeroSectionProps {
  profileImage: string;
  quote: Quote;
}

export interface AboutSectionProps {
  aboutMe: string;
}

export interface SkillsSectionProps {
  skills: Skill[];
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface SeperatorProps {
  className?: string;
}
