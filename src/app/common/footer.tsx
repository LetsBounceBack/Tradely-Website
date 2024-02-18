'use client';

import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
} from 'react-icons/fa6';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function footer() {
  return (
    <>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.1 }}
        exit={{ opacity: 0 }}
        className='flex justify-center space-x-4 text-2xl'
      >
        <a
          href='https://discord.gg/P2PGJCN7bt'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className=' hover:text-[#5865f2]'>
            <FaDiscord />
          </button>
        </a>
        <a
          href='https://twitter.com/TradelySocial'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className=' hover:text-[#657786]'>
            <FaXTwitter />
          </button>
        </a>
        <a
          href='https://www.youtube.com/@tradely.social'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className=' hover:text-[#ff0000]'>
            <FaYoutube />
          </button>
        </a>

        <a
          href='https://www.instagram.com/tradely.social'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className=' hover:text-[#e1306c]'>
            <FaInstagram />
          </button>
        </a>

        <a
          href='https://www.linkedin.com/company/tradely-social'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className=' hover:text-[#0a66c2]'>
            <FaLinkedin />
          </button>
        </a>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0 }}
        exit={{ opacity: 0 }}
        className='text-center py-4 opacity-70'
      >
        <p>&copy; 2024 Tradely LLC | All rights reserved</p>
      </motion.div>
    </>
  );
}
