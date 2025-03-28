"use client";

import { highlightText } from "@/utils";
import Image from "next/image";
import { motion, useInView } from "framer-motion"; // Added useInView hook
import { useRef } from "react"; // Added useRef for element references

type AboutSectionProps = {
  aboutMe: string;
  groupImage: string;
  compressedGroupImage: string;
};

export default function AboutSection({ aboutMe, groupImage, compressedGroupImage }: AboutSectionProps) {
  // Create refs for the elements we want to animate on scroll
  const sectionRef = useRef(null);
  const articleRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);

  // Check if elements are in view
  const sectionInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const articleInView = useInView(articleRef, { once: false });
  const headingInView = useInView(headingRef, { once: false });
  const imageInView = useInView(imageRef, { once: false });

  return (
    <section
      id='about-me'
      ref={sectionRef}
      className='flex justify-center items-center bg-black text-white min-h-screen h-fit relative overflow-hidden'
    >
      {/* Animated decorative elements - hidden on small screens */}
      <motion.div
        className='absolute top-20 left-10 w-24 h-24 border-t-2 border-l-2 border-gray-700 opacity-50 hidden lg:block'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: sectionInView ? 0.5 : 0, x: sectionInView ? 0 : -20 }}
        transition={{ duration: 1, delay: 0.3 }}
      ></motion.div>
      <motion.div
        className='absolute bottom-20 right-10 w-24 h-24 border-b-2 border-r-2 border-gray-700 opacity-50 hidden lg:block'
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: sectionInView ? 0.5 : 0, x: sectionInView ? 0 : 20 }}
        transition={{ duration: 1, delay: 0.3 }}
      ></motion.div>

      {/* Subtle animated particles */}
      <div className='absolute inset-0'>
        <div className='stars'></div>
        <div className='stars2'></div>
      </div>

      <div className='mx-8 h-full w-full flex justify-center items-center max-w-[1024px] max-sm:flex-col max-sm:justify-between max-sm:space-y-10 max-sm:pb-16'>
        <motion.article
          ref={articleRef}
          className='flex flex-col max-sm:justify-end space-y-10 w-full pr-14 max-lg:pr-10 max-md:pr-4 max-md:space-y-8 max-sm:space-y-6 max-sm:mt-28 max-sm:pr-0'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: articleInView ? 1 : 0, y: articleInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            ref={headingRef}
            className='text-5xl font-bold text-white max-md:text-3xl max-sm:text-center transition duration-500 ease-in-out select-none relative'
            initial={{ opacity: 0 }}
            animate={{ opacity: headingInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
            <motion.span
              className='absolute -bottom-3 left-0 w-20 h-1 rounded-xl bg-blue-500 max-sm:left-1/2 max-sm:-translate-x-1/2'
              initial={{ width: 0 }}
              animate={{ width: headingInView ? 80 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.span>
          </motion.h1>
          <motion.p
            className='text-lg text-justify hyphens-auto max-lg:text-lg max-[900px]:text-base custom-transition select-none leading-relaxed text-gray-200'
            initial={{ opacity: 0 }}
            animate={{ opacity: articleInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {highlightText(aboutMe, "highlight")}
          </motion.p>
        </motion.article>

        {/* image collection */}
        <motion.div
          ref={imageRef}
          className='w-full h-full flex justify-center items-center max-sm:items-start relative'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0.95 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className='absolute inset-0 rounded-lg transform translate-x-2 translate-y-2 max-sm:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: imageInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <Image
            src={groupImage}
            alt='Group image'
            width={400}
            height={400}
            className='filter saturate-0 object-cover rounded-lg max-lg:w-[350px] max-[900px]:w-[300px] max-sm:w-[220px] max-sm:scale-110 transition duration-500 ease-in-out shadow-lg'
            placeholder='blur'
            blurDataURL={compressedGroupImage}
          />
        </motion.div>
      </div>
    </section>
  );
}
