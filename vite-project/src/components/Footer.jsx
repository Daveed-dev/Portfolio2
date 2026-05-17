import React from 'react';

const Footer = () => {
  return (
    <footer className='min-h-12 w-full bg-[var(--light-dark)]'>
      <p className='text-center  md:text-xl text-[var(--gray)] pt-3'>
        &copy; {new Date().getFullYear()}{' '}
        <a
          href='https://x.com/David_JoyDD'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[var(--gr-color)]  hover:text-[var(--gray)] transition-all duration-300 ease-in-out'
        >
          David
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
