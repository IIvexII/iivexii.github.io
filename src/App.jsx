import { profileImage, wavyImage } from "./assets";
import { Header, Seperator } from "./components";
import { socialInfo, pageInfo, quotes, skills } from "./constants";
import { AboutSection, HeroSection, SkillsSection } from "./sections";

export default function App() {
  

  return (
    <>
      {/*************************
       *         Header
       **************************/}
      <Header name="zafeer" socialInfo={socialInfo} pageInfo={pageInfo} />

      {/*************************
       *         Main
       **************************/}
      <main className='snap-y snap-mandatory max-sm-h:snap-proximity h-screen overflow-x-hidden scroll-smooth'>
        {/*************************
         *      Hero Section
         **************************/}
        <HeroSection profileImage={profileImage} quote={quotes[0]} />
          
        {/* Seperator */}
        <Seperator className="hidden max-sm-h:block"/>
        
        {/*************************
         *   About Me Section
         **************************/}
        <AboutSection />

        {/* Seperator */}
        <Seperator className="hidden max-sm-h:block"/>
        
        {/* Skills Section */}
        <SkillsSection skills={skills} />
      </main>
    </>
  );
}
