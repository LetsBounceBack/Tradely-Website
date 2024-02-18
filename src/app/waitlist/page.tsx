import { MdEmail } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa6';

export default function waitlist() {
  return (
    <>
      <div className='flex flex-col md:flex-row lg:mt-16 py-12 bg-dark justify-center'>
        <div>
          <h1 className='mb-4 text-4xl md:text-5xl font-bold text-white text-center uppercase'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-[#EFF2AF]'>
              Early Access
            </span>
          </h1>
          <h3 className='mb-4 text-xl md:text-2xl font-bold text-white mt-4 text-center capitalize'>
            Get notified when Tradely launches
          </h3>

          {/* <form className='max-w-sm mx-auto mt-6'>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-white'>
                <MdEmail />
              </div>
              <input
                type='email'
                id='email'
                className='text-sm text-white rounded-lg w-full ps-10 p-2.5 bg-gray-800 outline-none'
                placeholder='example@email.com'
              />
              <button
                type='submit'
                className='absolute inset-y-0 end-0 text-dark hover:text-white bg-[#EFF2AF] hover:bg-[#294922]  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover-effect-enlarge'
              >
                Join Waitlist
              </button>
            </div>
          </form> */}
          <div className='flex justify-center'>
            <a
              href='https://discord.gg/P2PGJCN7bt'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button
                type='submit'
                className='text-dark hover:text-white bg-[#EFF2AF] hover:bg-[#5865f2] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover-effect-enlarge flex items-center'
              >
                <FaDiscord className='mr-2' />{' '}
                Join Discord
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
