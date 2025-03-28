"use client";

import { highlightText } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Quote } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import MatrixBackground from "@/components/MatrixBackground";

type HeroSectionProps = {
  profileImage: string;
  compressedProfileImage: string;
  quote: Quote;
};

export default function HeroSection({ profileImage, compressedProfileImage, quote }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a small delay to allow page to render first
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='home' className='relative flex justify-center bg-black text-white min-h-screen pt-20 overflow-hidden'>
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Gradient overlay for smooth transition */}
      <div className='absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-black to-transparent z-[1]'></div>

      <div className='relative z-10 mx-10 py-20 sm:py-12 h-full w-full flex justify-left gap-20 items-center max-w-[1024px] max-sm:flex-col-reverse max-sm:space-y-20 max-sm:pb-16'>
        {/* Quote and call to action button*/}
        <div
          className={`flex flex-col space-y-0 max-sm:items-center max-sm:h-full transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {/* Quote */}
          <blockquote className='z-[5] text-5xl text-justify hyphens-auto max-sm:text-3xl max-sm:text-center max-md:text-4xl select-none transition duration-300 ease-in-out'>
            <span className='font-serif italic mr-1 animate-pulse'>&quot;</span>
            <h1 className='inline font-extralight font-serif'>
              {highlightText(quote.text, "italic font-mono typewriter ")}
            </h1>
            <span className='font-serif italic animate-pulse'>&quot;</span>
            <p
              className={`text-left text-sm font-extralight mt-5 max-sm:text-center transition-opacity duration-1000 delay-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              ―{quote.reference}
            </p>
          </blockquote>

          {/* call to action button */}
          <a
            href='#about-me'
            className={`group/about-me h-full w-40 relative top-12 cursor-pointer select-none transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className='bg-white text-black px-8 py-3 rounded-full flex justify-between items-center hover:bg-gray-50 hover:scale-105 transition duration-200 ease-in-out animate-bounce-slow'>
              <FontAwesomeIcon
                icon={faArrowDown}
                className='group-hover/about-me:translate-y-1 transition-transform duration-500 ease-in-out'
              />
              <p>About Me</p>
            </div>
          </a>
        </div>

        {/* My Image */}
        <article
          className={`h-full w-full flex justify-center items-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className='relative'>
            <Image
              src={profileImage}
              alt='My Image'
              width={500}
              height={500}
              className='relative w-[500px] max-sm:w-[300px] select-none pointer-events-none rounded-full shadow-lg hover:scale-110 transition duration-300 ease-in-out'
              priority={true}
              placeholder='blur'
              blurDataURL={compressedProfileImage}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
