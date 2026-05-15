import React, { useState, useRef, useEffect } from 'react';
import skillsData from '../data.jsx';

const Skill = () => {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.6,
      },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section
        className='skills min-h-screen bg-[var(--bl-color)] pt-12 pb-8 lg:pb-0 px-8 md:px-20 lg:py-25 w-full'
        id='Skills'
        ref={skillsRef}
      >
        <h2 className='text-[var(--gr-color)] text-3xl lg:text-4xl font-bold mb-4 lg:mb-12 text-center font-sans '>
          Skills
        </h2>
        <div className='grid lg:grid-cols-2 gap-13 md:px-12   pt-8 md:pt-0'>
          {skillsData.map((skill, index) => (
            <div
              className='skill-row w-full  lg:w-108'
              key={index}
              data-pct={skill.pct}
            >
              <div className='skill-meta flex justify-between items-center'>
                <div className='skill-icon w-8'>
                  {/* <!-- {skill.name} official logo --> */}
                  {skill.icon}
                </div>
                <span className='skill-name ml-2 text-[var(--gray)]'>
                  {skill.name}
                </span>
                <span className='skill-pct ml-auto text-[var(--gray)]'>
                  {skill.pct}%
                </span>
              </div>
              <div className='bar-track w-full lg:w-108 h-2 bg-[var(--gray)] mt-1 rounded-full'>
                <div
                  className=' h-2 rounded-full bg-[var(--gr-color)] transition-all duration-1000 ease-in'
                  style={{ width: animate ? `${skill.pct}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skill;
