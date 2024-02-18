'use client';

import Image from 'next/image';
import Mockups from '/public/images/tradely_mockups.png';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function body() {
  return (
    <>
      <div className='px-3 py-6 md:px-8 lg:px-12 flex flex-col md:flex-row lg:mt-16'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          exit={{ opacity: 0 }}
          className='lg:mr-20 md:mr-10'
        >
          {/* SLOGAN */}
          <h1 className='mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl mt-4 text-center md:text-left md:mt-20 lg:mt-32'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#294922]'>
              Transparency. Trades. Together.
            </span>
          </h1>

          {/* APP STORE BUTTONS */}
          <div className='md:flex justify-left space-x-4 my-10 hidden'>
            <button className='bg-dark hover:bg-[#294922] text-white font-semibold hover:text-white py-2 px-2 border border-black hover:border-transparent rounded-xl inline-flex items-center hover-effect'>
              <FaApple />
              <span className='mx-1'>Coming Soon</span>
            </button>

            <button className='bg-dark hover:bg-[#294922] text-white font-semibold hover:text-white py-2 px-2 border border-black hover:border-transparent rounded-xl inline-flex items-center hover-effect'>
              <FaGooglePlay />
              <span className='mx-1'>Coming Soon</span>
            </button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2 }}
          exit={{ opacity: 0 }}
          className='m-auto p-auto w-auto h-auto'
        >
          <Image src={Mockups} alt='Tradely Logo' className='' priority />
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2 }}
          exit={{ opacity: 0 }}
          className='flex justify-center space-x-4 my-10 md:hidden'
        >
          <button className='bg-dark hover:bg-[#294922] text-white font-semibold hover:text-white py-2 px-2 border border-black hover:border-transparent rounded-xl inline-flex items-center hover-effect'>
            <FaApple />
            <span className='mx-1'>Coming Soon</span>
          </button>

          <button className='bg-dark hover:bg-[#294922] text-white font-semibold hover:text-white py-2 px-2 border border-black hover:border-transparent rounded-xl inline-flex items-center hover-effect'>
            <FaGooglePlay />
            <span className='mx-1'>Coming Soon</span>
          </button>
        </motion.div>
      </div>
    </>
  );
}
