"use client";

import Image from "next/image";
import Link from "next/link";

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

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id='projects'
      className='flex justify-center bg-black text-white h-screen min-h-[630px] md:max-h-[660px] overflow-hidden'
    >
      <div className='mx-10 h-full w-full flex flex-col justify-center items-center max-w-[1024px]'>
        <h1 className='text-5xl underline underline-offset-8 mb-10 hover:scale-110 custom-transition select-none'>
          Projects
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full overflow-y-auto px-4 py-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-white text-black rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 flex flex-col'
            >
              <div className='relative h-48 w-full'>
                <Image src={project.image} alt={project.title} fill className='object-cover' />
              </div>

              <div className='p-4 flex flex-col flex-grow'>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-sm text-gray-700 mb-4 flex-grow'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className='bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded'>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='flex justify-between mt-auto'>
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target='_blank'
                      className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition'
                    >
                      GitHub
                    </Link>
                  )}
                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target='_blank'
                      className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
