'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '/public/images/tradely.svg';
import { Rotate as Hamburger } from 'hamburger-react';
import Link from 'next/link';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<string>('');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

const Header = () => {
  const Links = [{ name: 'Learn More', to: 'about', id: 1 }];

  const scrollDirection = useScrollDirection();
  const [isOpen, setIsOpen] = useState(false);

  // const handleClick = (to) => {
  //   if (location.pathname !== '/') {
  //     navigate('/');
  //     setTimeout(() => {
  //       document
  //         .getElementById(to)
  //         .scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     }, 500);
  //   } else {
  //     document
  //       .getElementById(to)
  //       .scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  //   setIsOpen(false);
  // };

  return (
    <div
      className={`shadow-md gradient-color py-3 sticky ${
        scrollDirection === 'down' && !isOpen ? '-top-24' : 'top-0'
      } transition-all duration-500 z-50 `}
    >
      <div className='px-6 md:px-8 lg:px-12 md:flex justify-between items-center '>
        {/* LOGO */}
        <div>
          <a
            href='/'
            className='block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased'
          >
            <Image
              src={Logo}
              alt='Tradely Logo'
              className='w-32 h-auto'
              priority
            />
          </a>
        </div>

        {/* Menu Icons */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='absolute right-8 top-3 cursor-pointer md:hidden'
        >
          {/* {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />} */}
          <Hamburger
            rounded
            label='Show menu'
            direction='left'
            size={25}
            easing='ease-in'
            duration={0.15}
          />
        </div>

        {/* nav links */}
        <ul
          className={`md:flex md:pl-0 md:items-center md:pb-0 py-1 text-dark ${
            isOpen ? 'transition delay-300 duration-300' : 'hidden'
          }`}
        >
          {Links.map((link) => (
            <li
              className='font-semibold my-7 md:my-0 md:ml-8 cursor-pointer'
              key={link.id}
            >
              <a
                onClick={() => setIsOpen(false)}
                href={`#${link.to}`}
                className='hover:text-secondary hover-effect hover:opacity-80'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
