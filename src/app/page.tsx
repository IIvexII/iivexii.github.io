"use client";

import { Header, Seperator } from "@/components";
import { HeroSection, AboutSection, SkillsSection } from "@/sections";
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
      <main className='snap-y snap-mandatory sm-height h-screen overflow-x-hidden scroll-smooth'>
        {/*************************
         *      Hero Section
         **************************/}
        <HeroSection profileImage={profileImage} compressedProfileImage={compProfileImage} quote={quotes[0]} />

        {/* Seperator */}
        <Seperator className='hidden seperator sm-height' />

        {/*************************
         *   About Me Section
         **************************/}
        <AboutSection aboutMe={myInfo.aboutMe} groupImage={groupImage} compressedGroupImage={compGroupImage} />

        {/* Seperator */}
        <Seperator className='hidden seperator sm-height' />

        {/* Skills Section */}
        <SkillsSection skills={myInfo.skills} />
      </main>
    </>
  );
}
