"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 bg-black/80 flex justify-center items-center z-[1000]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Close modal on backdrop click
        >
          <motion.div
            className='bg-zinc-900 rounded-lg shadow-lg max-w-[600px] w-full p-6 relative'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button className='absolute top-3 right-4 text-gray-400 hover:text-white z-10' onClick={onClose}>
              ✕
            </button>
            <div className='mt-4'>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Ref and inView hook for animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      id='projects'
      ref={sectionRef}
      className='flex justify-center bg-black text-white min-h-[650px] py-16 relative'
    >
      <div className='mx-10 w-full flex flex-col items-center max-w-[1024px] z-10'>
        <motion.h1
          className='text-5xl font-bold text-white mb-10 select-none relative'
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Projects
          <motion.span
            className='absolute -bottom-3 left-0 w-20 h-1 rounded-xl bg-blue-500'
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          ></motion.span>
        </motion.h1>

        {/* Project Catalog */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full px-4 py-6'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='group overflow-hidden shadow-lg transition duration-300 flex flex-col cursor-pointer'
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className='relative h-56 w-full'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover rounded-lg group-hover:opacity-70 transition duration-300'
                />
              </div>
              <div className='py-4'>
                <h3 className='text-xl text-blue-400 group-hover:text-blue-500 transition duration-300'>
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Project Details */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <>
            <div className='relative h-60 w-full mb-4'>
              <Image src={selectedProject.image} alt={selectedProject.title} fill className='object-cover rounded-lg' />
            </div>
            <h2 className='text-2xl font-bold text-blue-400 mb-4'>{selectedProject.title}</h2>
            <p className='text-gray-300 mb-4'>{selectedProject.description}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {selectedProject.tags.map((tag, idx) => (
                <span key={idx} className='bg-zinc-700/80 text-gray-300 text-xs px-3 py-1 rounded-full'>
                  {tag}
                </span>
              ))}
            </div>
            <div className='flex justify-between'>
              {selectedProject.githubLink && (
                <a
                  href={selectedProject.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-700 transition duration-300'
                >
                  GitHub
                </a>
              )}
              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-white text-black px-4 py-2 rounded-md hover:bg-white/80 transition duration-300'
                >
                  Live Demo
                </a>
              )}
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
