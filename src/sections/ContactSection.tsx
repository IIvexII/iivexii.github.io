"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <section id='contact' className='flex justify-center bg-black text-white h-screen min-h-[630px] md:max-h-[660px]'>
      <div className='mx-8 h-full w-full flex justify-center items-center max-w-[1024px] max-md:flex-col'>
        <div className='w-full md:w-1/2 px-4'>
          <h1 className='text-5xl underline underline-offset-8 mb-8 hover:scale-110 transition duration-500 ease-in-out select-none'>
            Get In Touch
          </h1>

          <div className='space-y-6 mt-10'>
            <div className='flex items-center space-x-4'>
              <div className='bg-white text-black p-3 rounded-full'>
                <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5' />
              </div>
              <a href={`mailto:${contactInfo.email}`} className='hover:underline'>
                {contactInfo.email}
              </a>
            </div>

            {contactInfo.phone && (
              <div className='flex items-center space-x-4'>
                <div className='bg-white text-black p-3 rounded-full'>
                  <FontAwesomeIcon icon={faPhone} className='w-5 h-5' />
                </div>
                <a href={`tel:${contactInfo.phone}`} className='hover:underline'>
                  {contactInfo.phone}
                </a>
              </div>
            )}

            {contactInfo.location && (
              <div className='flex items-center space-x-4'>
                <div className='bg-white text-black p-3 rounded-full'>
                  <FontAwesomeIcon icon={faLocationDot} className='w-5 h-5' />
                </div>
                <span>{contactInfo.location}</span>
              </div>
            )}
          </div>
        </div>

        <div className='w-full md:w-1/2 px-4 mt-12 md:mt-0'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {submitMessage && <div className='bg-green-800 text-white p-4 rounded'>{submitMessage}</div>}

            <div>
              <label htmlFor='name' className='block text-sm font-medium mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 bg-transparent border border-white rounded focus:outline-none focus:ring-2 focus:ring-white'
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 bg-transparent border border-white rounded focus:outline-none focus:ring-2 focus:ring-white'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-sm font-medium mb-2'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className='w-full px-4 py-2 bg-transparent border border-white rounded focus:outline-none focus:ring-2 focus:ring-white'
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition disabled:opacity-70'
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
