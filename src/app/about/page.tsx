'use client';

import Image from 'next/image';
import Sharecount from '/public/images/sharecount.png';
import SharecountMobile from '/public/images/sharecount-mobile.png';
import Snaptrade from '/public/images/snaptrade.png';
import Communities from '/public/images/communities.png';
import { FaDiscord } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function about() {
  return (
    <>
      <div className='py-12 lg:py-12' id='about'>
        <div className='grid lg:grid-cols-[40%_60%] px-6 md:px-8 lg:px-12 bg-dark p-10'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            exit={{ opacity: 0 }}
            className='flex justify-center md:justify-normal items-center'
          >
            <h1 className='mb-4 text-3xl md:text-5xl font-extrabold leading-none items-center text-white text-center md:text-left'>
              Connect with&nbsp;
              <span className='text-[#EFF2AF]'>verified</span>&nbsp;
              shareholders
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            exit={{ opacity: 0 }}
            className='flex justify-center md:justify-normal items-center ml-0 lg:ml-10 lg:mr-20'
          >
            <h4 className='mb-4 text-xl md:text-2xl font-semibold leading-none text-center md:text-left max-w-lg md:max-w-none'>
              <span className='text-white'>
                A social media platform designed for retail by retail.
                Addressing the need for market transparency while fostering
                shareholder communication and growth.
              </span>
            </h4>
          </motion.div>
        </div>

        <div className='grid lg:grid-cols-[30%_70%] gap-4 px-6 md:px-8 lg:px-12 bg-dark pb-10 space-y-2 md:space-y-0'>
          {/* TRANSPARENCY */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            exit={{ opacity: 0 }}
            className='bg-blue-400 row-span-2 min-h-96 w-full shadow-md relative overflow-hidden'
          >
            <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-1 lg:grid-rows-2 md:items-center absolute'>
              {/* TEXT + SUBTEXT */}
              <div className='flex flex-col items-center md:items-start pt-6 md:pt-0 md:px-0 relative md:pb-8 lg:mr-4 lg:mb-32 md:order-2 order-1 md-order:2 lg:order-1 '>
                <h4 className='text-3xl md:text-3xl font-extrabold leading-none text-center md:text-left lg:ps-8 lg:pt-12 text-dark lg:mt-2 px-4 md:px-0'>
                  Transparency
                </h4>
                <h4 className='mb-4 text-xl md:text-xl font-medium leading-none text-center md:text-left pt-4 lg:ps-8 px-4 mx-4 md:mx-0 md:px-0 text-white'>
                  Get the <span className='font-extrabold'>true&nbsp;</span>
                  sharecount across multiple brokerages for your favorite
                  tickers
                </h4>
              </div>
              {/* IMAGE */}
              <div className='order-2 md:order-1 lg:order-2 flex justify-center items-center w-full md:w-96 lg:absolute md:bottom-0 md:right-0'>
                {/* DESKTOP */}
                <Image
                  src={Sharecount}
                  alt='Community Sharecounts'
                  className='hidden lg:block md:w-10/12 lg:w-auto md:top-12 md:left-20 lg:top-20 lg:left-20 md:relative'
                  priority
                />
                {/* MOBILE */}
                <Image
                  src={SharecountMobile}
                  alt='Community Sharecounts'
                  className='block lg:hidden w-40 md:w-auto relative -top-52 md:top-10'
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* TRADES */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            exit={{ opacity: 0 }}
            className='bg-[#A2D9CE] min-h-96 shadow-md flex items-center justify-center relative overflow-hidden'
          >
            <div className='grid grid-rows-2 md:grid-cols-2 md:items-center absolute md:space-x-32 w-full md:flex'>
              {/* TEXT + SUBTEXT */}
              <div className='flex flex-col justify-center items-center md:items-start relative pt-32 md:pt-0'>
                <h4 className='text-3xl md:text-3xl font-extrabold leading-none text-left md:ps-16 text-dark'>
                  Trades
                </h4>
                <h4 className='mb-4 text-xl md:text-xl font-medium leading-none text-center md:text-left px-4 md:ps-16 pt-4 mx-4 md:mx-0 text-white'>
                  Powered by SnapTrade for
                  <span className='font-extrabold'>&nbsp;secure</span> brokerage
                  connections. Your credentials are never stored on our servers
                </h4>
              </div>
              {/* IMAGE */}
              <div className='flex md:relative justify-center md:-left-20 w-full md:w-80'>
                <Image
                  src={Snaptrade}
                  alt='Community Sharecounts'
                  className='w-40 md:w-full relative -top-12 md:top-20'
                  priority
                />
              </div>
            </div>
          </motion.div>
          {/* TOGETHER */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            exit={{ opacity: 0 }}
            className='bg-[#DAA598] min-h-96 shadow-md flex items-center justify-center relative overflow-hidden'
          >
            <div className='grid grid-rows-2 md:grid-cols-2 md:items-center absolute md:space-x-32 w-full md:flex'>
              {/* TEXT + SUBTEXT */}
              <div className='order-1 md:order-2 flex flex-col justify-center items-center md:items-start pt-32 md:pt-0'>
                <h4 className='text-3xl md:text-3xl font-extrabold leading-none text-left md:ps-20 text-dark'>
                  Together
                </h4>
                <h4 className='mb-4 text-xl md:text-xl font-medium leading-none text-center md:text-left px-4 md:ps-20 pt-4 mx-4 md:mx-0 text-white'>
                  Create or join customizable communities with
                  <span className='font-extrabold'>&nbsp;real</span>{' '}
                  shareholders
                </h4>
              </div>
              {/* IMAGE */}
              <div className='flex md:relative justify-center md:left-auto order-2 md:order-1 w-full md:w-64'>
                <Image
                  src={Communities}
                  alt='Community Sharecounts'
                  className='w-40 md:w-auto relative -top-12 md:-left-12 md:top-28'
                  priority
                />
              </div>
            </div>
          </motion.div>
          {/* // Comment */}
        </div>

        <div className='flex flex-col md:flex-row py-8 bg-dark justify-center'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className='mb-4 text-4xl md:text-5xl font-bold text-white text-center uppercase'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-[#EFF2AF]'>
                Early Access
              </span>
            </h1>
            <h3 className='mb-4 text-xl md:text-2xl font-bold text-white mt-4 text-center capitalize'>
              Get notified when Tradely launches
            </h3>

            <div className='flex justify-center pb-8'>
              <a
                href='https://discord.gg/P2PGJCN7bt'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button
                  type='submit'
                  className='text-dark hover:text-white bg-[#EFF2AF] hover:bg-[#5865f2] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover-effect-enlarge flex items-center'
                >
                  Join Discord
                  <FaDiscord className='ml-2 size-4' />
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
