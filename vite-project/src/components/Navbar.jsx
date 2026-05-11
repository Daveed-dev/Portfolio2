import React from 'react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className='nav flex justify-between items-center h-16 px-16 bg-[var(--bl-color)] bg-bottom-[var(--gr-color)]'>
      <div className='flex items-center space-x-4'>
        <i
          className='fas fa-bars text-[var(--gr-color)] text-2xl cursor-pointer bars'
          onClick={() => setOpen(true)}
        ></i>
        <h1 className='nav-logo uppercase text-[var(--gr-color)] text-3xl font-bold'>
          Profile
        </h1>
      </div>
      <ul
        className={`nav-links  md:flex space-x-16 list-none ${open ? 'open' : ''}`}
      >
        <i
          className='fas fa-close text-[var(--gr-color)] text-2xl close hover:text-[var(--gray)] '
          onClick={() => setOpen(false)}
        ></i>
        <li className='nav-link'>
          <a
            href='#Home'
            className=' text-2xl hover:text-[var(--gr-color)]'
            onClick={() => setOpen(false)}
          >
            Home
          </a>
        </li>
        <li className='nav-link'>
          <a
            href='#About'
            className='nav-link text-2xl hover:text-[var(--gr-color)]'
            onClick={() => setOpen(false)}
          >
            About
          </a>
        </li>
        <li className='nav-link'>
          <a
            href='#Projects'
            className='nav-link text-2xl hover:text-[var(--gr-color)]'
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
        </li>
        <li className='nav-link'>
          <a
            href='#Contact'
            className='contactNav nav-link text-2xl hover:text-[var(--gr-color)]'
            onClick={() => setOpen(false)}
          >
            Contact
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
