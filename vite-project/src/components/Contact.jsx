import React from 'react';

const Contact = () => {
  return (
    <>
      <section className='Contact min-h-[80vh] w-full pt-15' id='Contact'>
        <h2 className='text-[var(--gr-color)] text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center font-sans uppercase'>
          Contact Me
        </h2>
        <div className='contact-form w-full md:flex px-3  justify-center items-end gap-10'>
          <form className='flex flex-col gap-4 bg-transparent p-5 rounded-xl w-full md:w-120'>
            <input
              type='text'
              placeholder='Name'
              className='p-3 rounded-lg outline-none border border-gray-300 '
            />

            <input
              type='email'
              placeholder='Email'
              className='p-3 rounded-lg outline-none border border-gray-300'
            />

            <textarea
              name='message'
              cols='30'
              rows='4'
              placeholder='Message'
              className='p-3 rounded-lg outline-none border border-gray-300 resize-none'
            ></textarea>

            <button className='bg-[var(--gr-color)] text-white py-3 rounded-lg hover:opacity-50 transition cursor-pointer'>
              Send Message
            </button>
          </form>
          <div className='pb-6 mx-12'>
            <span className='text-xl lg:text-2xl'>
              <i class='fa-solid fa-location-dot text-[var(--gr-color)] text-xl lg:text-2xl  '></i>
              Nigeria
            </span>
            <div
              className='flex gap-4 items-center 
              mt-2 lg:mt-4'
            >
              <h2 className='text-xl lg:text-2xl '>Socials:</h2>
              <a
                href='https://github.com/Daveed-dev'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-8 lg:w-11 lg:h-10 rounded-full border-[2px] border-dashed border-[var(--light-dark)] flex items-center justify-center   hover:border-[var(--gray)] transition-all duration-300 ease-in-out'
              >
                <i className='fab fa-github text-xl text-[var(--gray)] lg:text-2xl '></i>
              </a>
              <a
                href='https://x.com/David_JoyDD'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-8 lg:w-11 lg:h-10 rounded-full border-[2px] border-dashed border-[var(--light-dark)] flex items-center justify-center   hover:border-[var(--gray)] transition-all duration-300 ease-in-out'
              >
                <i className='fab fa-twitter text-xl text-[var(--gray)] lg:text-2xl'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
