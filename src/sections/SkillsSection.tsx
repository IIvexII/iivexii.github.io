"use client";

import { Skill } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";

type SkillsSectionProps = {
  skills: Skill[];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const sectionRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    ref(sectionRef.current);
  }, [ref]);

  const gridBackgroundStyle = {
    backgroundSize: "40px 40px",
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.1) 2px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
    `,
    opacity: 0.3,
  };

  return (
    <section
      id='skills'
      ref={sectionRef}
      className='flex justify-center items-center bg-black text-white h-screen min-h-[680px] md:max-h-[690px] overflow-hidden relative'
    >
      {/* Background Grid */}
      <div className='absolute inset-0' style={gridBackgroundStyle}></div>

      <div className='mx-10 h-full w-full flex justify-center items-center max-w-[1024px] max-sm:flex-col-reverse max-sm:space-y-20 max-sm:pb-16 relative z-10'>
        <div className='mt-56 w-full h-full flex flex-col space-y-16 justify-start items-center max-sm:mt-32'>
          {/* Top Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='text-5xl custom-transition select-none relative'
          >
            Skills
            <motion.div
              className='absolute -bottom-3 left-0 w-14 h-1 rounded-xl bg-blue-500 max-sm:left-1/2 max-sm:-translate-x-1/2'
              animate={{ scaleX: inView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            ></motion.div>
          </motion.h1>

          {/* List of all skills */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial='hidden'
            animate={inView ? "visible" : "hidden"}
            className='flex justify-center gap-6 max-sm:gap-4 flex-wrap'
          >
            {/* Dynamically make a list of skills from prop skills */}
            {skills.map((skill, index) => (
              <motion.abbr
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                title={skill.name}
                key={index}
                className='bg-white rounded-full w-24 h-24 flex justify-center items-center shadow-lg hover:scale-125 custom-transition select-none max-[792px]:w-20 max-[792px]:h-20 max-sm:w-[70px] max-sm:h-[70px]'
              >
                {/* Skill icon */}
                <div className='w-14 h-14 max-[792px]:w-12 max-[792px]:h-12 max-sm:w-9 max-sm:h-9 relative'>
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    fill
                    className='grayscale brightness-95 object-contain'
                  />
                </div>
              </motion.abbr>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
