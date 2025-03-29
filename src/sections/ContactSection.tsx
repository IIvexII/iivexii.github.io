"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ContactInfo = {
  email: string;
  phone?: string;
  location?: string;
};

type ContactSectionProps = {
  contactInfo: ContactInfo;
};

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const sectionRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    ref(sectionRef.current);
  }, [ref]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  // Circuit board pattern background
  const patternBackgroundStyle = {
    backgroundImage: `
      radial-gradient(#ffffff15 2px, transparent 2px),
      linear-gradient(to right, #ffffff08 1px, transparent 1px),
      linear-gradient(to bottom, #ffffff08 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px, 20px 20px, 20px 20px",
  };

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='relative flex justify-center bg-black text-white h-screen min-h-[630px] md:max-h-[690px] overflow-hidden'
    >
      {/* Pattern Background */}
      <div className='absolute inset-0' style={patternBackgroundStyle}></div>

      {/* Gradient overlays for depth */}
      <div className='absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-1'></div>
      <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-1'></div>

      <div className='relative z-10 mx-8 h-full w-full flex justify-center items-center max-w-[1024px] max-md:flex-col'>
        <motion.div
          className='w-full md:w-1/2 px-4'
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className='text-5xl mb-8 select-none relative'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
            <motion.div
              className='absolute -bottom-3 left-0 w-16 h-1 rounded-xl bg-blue-500'
              animate={{ scaleX: inView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            ></motion.div>
          </motion.h1>

          <motion.div
            className='space-y-6 mt-10 backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-white/10'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className='flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300'>
              <div className='bg-black text-blue-400 p-3 rounded-full border border-white/30 group-hover:border-blue-400 transition-colors duration-300'>
                <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5' />
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className='group-hover:text-blue-400 transition-colors duration-300'
                aria-label={`Email: ${contactInfo.email}`}
              >
                {contactInfo.email}
              </a>
            </div>

            {contactInfo.phone && (
              <div className='flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300'>
                <div className='bg-black text-blue-400 p-3 rounded-full border border-white/30 group-hover:border-blue-400 transition-colors duration-300'>
                  <FontAwesomeIcon icon={faPhone} className='w-5 h-5' />
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className='group-hover:text-blue-400 transition-colors duration-300'
                  aria-label={`Phone: ${contactInfo.phone}`}
                >
                  {contactInfo.phone}
                </a>
              </div>
            )}

            {contactInfo.location && (
              <div className='flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300'>
                <div className='bg-black text-blue-400 p-3 rounded-full border border-white/30 group-hover:border-blue-400 transition-colors duration-300'>
                  <FontAwesomeIcon icon={faLocationDot} className='w-5 h-5' />
                </div>
                <span className='group-hover:text-blue-400 transition-colors duration-300'>{contactInfo.location}</span>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className='w-full md:w-1/2 px-4 mt-12 md:mt-0'
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {submitMessage && (
                <motion.div
                  className='bg-blue-900/60 border border-blue-500/50 text-white p-4 rounded'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitMessage}
                </motion.div>
              )}

              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2 text-blue-300'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 bg-black/50 border border-white/30 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300'
                  placeholder='Your name'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2 text-blue-300'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 bg-black/50 border border-white/30 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300'
                  placeholder='your.email@example.com'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2 text-blue-300'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className='w-full px-4 py-2 bg-black/50 border border-white/30 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none'
                  placeholder='Write your message here...'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-black border border-blue-500 text-blue-400 px-6 py-2 rounded hover:bg-blue-500/20 transition-colors duration-300 disabled:opacity-70 group'
              >
                <span className='group-hover:text-white transition-colors duration-300'>
                  {isSubmitting ? (
                    <div className='flex items-center justify-center'>
                      <svg
                        className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
