import React from 'react';
import ProjectsData from '../ProjectsData';

const Project = () => {
  return (
    <>
      <section
        className='Project min-h-screen w-full py-5 md:py-20 px-4 md:px-20 lg:px-12 bg-[var(--bl-color)]'
        id='Project'
      >
        <h2 className='text-[var(--gr-color)] text-3xl lg:text-4xl font-bold mb-4 lg:mb-12 text-center font-sans uppercase'>
          Projects
        </h2>
        <div
          className='project py-4 lg:flex justify-evenly
         flex-wrap w-full'
        >
          {ProjectsData.map((pr) => (
            <div
              className='projectcard w-full lg:w-108 lg:h-141 bg-[var(--light-dark)] mx-auto rounded-lg lg:mx-0 mb-16 pb-2 shadow-[0_0_12px_rgba(34,197,94,0.3)] transition-all duration-500 ease-in-out'
              key={pr.id}
            >
              <img
                className=' rounded-lg h-65 w-full'
                src={pr.img}
                alt='pinkgame'
              />
              <h2 className='text-center mt-2 text-2xl'>{pr.title}</h2>
              <p className='px-2 pt-2 font-sans text-center lg:text-lg text-sm lg:h-37'>
                {pr.text}
              </p>
              <div className='flex space-x-5 justify-start mt-4 px-4 items-center'>
                <h2>Tech Stack:</h2>
                <span>{pr.HTML}</span>
                <span>{pr.CSS}</span>
                <span>{pr.JS}</span>
                <span>{pr.react}</span>
              </div>
              <div className='flex justify-between items-center px-8 mt-3'>
                <span>
                  <a
                    href={pr.Gitlink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-9 h-8 lg:w-11 lg:h-10 rounded-md border-[2px] border-dashed border-[var(--wh-color)] flex items-center justify-center   hover:border-[var(--gray)] transition-all duration-300 ease-in-out'
                  >
                    <i className='fab fa-github text-xl text-[var(--gray)] lg:text-2xl'></i>
                  </a>
                </span>
                <span>
                  <a
                    href={pr.livelink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-md p-1 border-2 border-dashed border-[var(--wh-color)] flex items-center justify-center   hover:border-[var(--gray)] transition-all duration-300 ease-in-out text-[var(--gray)] text-sm lg:text-base'
                  >
                    Live Demo
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
