"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { SocialInfo } from "@/types";

type FooterProps = {
  authorName: string;
  socialLinks: SocialInfo[];
  email: string;
};

export default function Footer({ authorName, socialLinks, email }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Find social links by platform name (case insensitive)
  const findSocialLink = (platformName: string): string | undefined => {
    const platform = socialLinks.find((link) => link.name.toLowerCase() === platformName.toLowerCase());
    return platform?.link;
  };

  // Get specific social platform links
  const githubUrl = findSocialLink("github");
  const linkedinUrl = findSocialLink("linkedin");
  const twitterUrl = findSocialLink("twitter");

  return (
    <footer id='contact' className='relative bg-black text-white pt-12 pb-8 overflow-hidden'>
      {/* Top gradient */}
      <div className='absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black to-transparent z-1'></div>

      <div className='container mx-auto max-w-[1024px] px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-10'>
          {/* Brand/Author Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-xl font-semibold mb-4 relative inline-block'
            >
              {authorName}
              <motion.div
                className='absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500'
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='text-gray-400 mb-4'
            >
              Creating digital experiences with passion and precision.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className='flex space-x-4 mt-4'
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {githubUrl && (
                <a
                  href={githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 bg-black/40 border border-white/10 rounded-full hover:bg-blue-900/30 hover:border-blue-500/50 transition-all duration-300'
                  aria-label='GitHub'
                >
                  <FontAwesomeIcon icon={faGithub} className='h-5 w-5' />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 bg-black/40 border border-white/10 rounded-full hover:bg-blue-900/30 hover:border-blue-500/50 transition-all duration-300'
                  aria-label='LinkedIn'
                >
                  <FontAwesomeIcon icon={faLinkedin} className='h-5 w-5' />
                </a>
              )}
              {twitterUrl && (
                <a
                  href={twitterUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 bg-black/40 border border-white/10 rounded-full hover:bg-blue-900/30 hover:border-blue-500/50 transition-all duration-300'
                  aria-label='Twitter'
                >
                  <FontAwesomeIcon icon={faTwitter} className='h-5 w-5' />
                </a>
              )}
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-lg font-semibold mb-4 relative inline-block'
            >
              Navigation
              <motion.div
                className='absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500'
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </motion.h4>
            <motion.ul
              className='space-y-2'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className='text-gray-300 hover:text-blue-400 transition-colors duration-300 block py-1'
                    scroll={true}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Information */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-lg font-semibold mb-4 relative inline-block'
            >
              Get in Touch
              <motion.div
                className='absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500'
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </motion.h4>

            <motion.div
              className='space-y-2'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className='text-gray-300'>Have a project in mind? Let&apos;s work together.</p>
              <Link
                href={`mailto:${email}`}
                className='inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors duration-300'
              >
                Contact me →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className='h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6'
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Row with Copyright */}
        <div className='text-center text-sm text-gray-500'>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
            © {currentYear} {authorName}. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className='mt-1 text-xs'
          >
            Designed & Built with <span className='text-red-500'>♥</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
