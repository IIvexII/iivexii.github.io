"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { SocialInfo } from "@/types";

type DropletDropdownProps = {
  className?: string;
  socialInfo: SocialInfo[];
};

export default function DropletDropdown({ className, socialInfo }: DropletDropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`relative ${className || ""}`}>
      {/* Button to show drop down */}
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className='bg-black text-base py-1 px-5 text-white rounded-full cursor-pointer hover:bg-slate-800 transition duration-300 ease-in-out'
        role='button'
        aria-label='Social links'
        aria-expanded={showDropdown}
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faLink} className='w-5' />
      </div>

      {/* Dropdown that will be show after button is clicked */}
      <div
        ref={dropdownRef}
        className={`absolute top-0 left-[10px] mt-10 transition duration-500  ${
          showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className='flex flex-col space-y-2'>
          {socialInfo.map((social, index) => (
            // show abbrevation via tag
            <abbr
              key={index}
              title={social.name}
              className='py-3 px-3 rounded-full bg-white text-black border border-slate-700 shadow-lg hover:bg-black hover:text-white transition duration-500 ease-in-out bg-opacity-90'
            >
              <a
                key={index}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center'
                aria-label={social.name}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </abbr>
          ))}
        </div>
      </div>
    </nav>
  );
}
