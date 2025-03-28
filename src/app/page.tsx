"use client";

import { Header, Footer } from "@/components";
import { HeroSection, AboutSection, SkillsSection, ProjectsSection, ContactSection } from "@/sections";
import { socialInfo, pageInfo, quotes, myInfo } from "@/constants";

// Import images from public directory
const profileImage = "/assets/images/my-image-1.png";
const compProfileImage = "/assets/images/compressed/my-image-1.png";
const groupImage = "/assets/images/group-1.png";
const compGroupImage = "/assets/images/compressed/group-1.png";

export default function Home() {
  return (
    <>
      {/*************************
       *         Header
       **************************/}
      <Header name='zafeer' socialInfo={socialInfo} pageInfo={pageInfo} />

      {/*************************
       *         Main
       **************************/}
      <main className='h-screen overflow-x-hidden scroll-smooth'>
        {/*************************
         *      Hero Section
         **************************/}
        <HeroSection profileImage={profileImage} compressedProfileImage={compProfileImage} quote={quotes[0]} />

        {/*************************
         *   About Me Section
         **************************/}
        <AboutSection aboutMe={myInfo.aboutMe} groupImage={groupImage} compressedGroupImage={compGroupImage} />

        {/*************************
         *     Skills Section
         **************************/}
        <SkillsSection skills={myInfo.skills} />

        {/*************************
         *    Projects Section
         **************************/}
        <ProjectsSection projects={myInfo.projects} />

        {/*************************
         *    Contact Section
         **************************/}
        <ContactSection contactInfo={myInfo.contactInfo} />
      </main>

      {/*************************
       *        Footer
       **************************/}
      <Footer name='zafeer' socialInfo={socialInfo} />
    </>
  );
}
