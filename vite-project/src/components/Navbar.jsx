import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-16 px-16 bg-[var(--bl-color)] bg-bottom-[var(--gr-color)]'>
      <div>
        <h1 className='nav-logo uppercase text-[var(--gr-color)] text-3xl font-bold'>
          Profile
        </h1>
      </div>
      <ul className='nav-links flex space-x-16 list-none'>
        <li>
          <a
            href='#Home'
            className='nav-link text-2xl hover:text-[var(--gr-color)]'
            id='Home'
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#About'
            className='nav-link text-2xl hover:text-[var(--gr-color)]'
            id='About'
          >
            About
          </a>
        </li>
        <li>
          <a
            href='#Projects'
            className='nav-link text-2xl hover:text-[var(--gr-color)]'
            id='Projects'
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href='#Contact'
            className='contactNav nav-link text-2xl hover:text-[var(--gr-color)]'
            id='Contact'
          >
            Contact Me
          </a>
        </li>
      </ul>
      <div>
        <button className='nav-btn btn bg-[var(--gr-color)] text-white hover:bg-[var(--light-dark)] hover:text-[var(--gr-color)] '>
          Hire me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
