"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialInfo } from "@/types";
import Link from "next/link";

type FooterProps = {
  socialInfo: SocialInfo[];
  name: string;
};

export default function Footer({ socialInfo, name }: FooterProps) {
  return (
    <footer className='w-full bg-black text-white py-8'>
      <div className='container mx-auto max-w-[1024px] px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold'>{name}.</h2>
            <p className='text-sm text-gray-400 mt-2'>© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className='flex space-x-4'>
            {socialInfo.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400 transition-colors duration-300'
                aria-label={social.name}
              >
                <FontAwesomeIcon icon={social.icon} className='w-5 h-5' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
