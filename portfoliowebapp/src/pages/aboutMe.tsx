import myPic from '../assets/myPic.jpeg';
import scales from '../assets/scales.svg';
import CoolBackground from '../components/coolBackground';

function AboutMe() {
  return (
    <div
      className='relative flex md:flex-row flex-col items-center justify-center p-5 min-h-screen overflow-hidden'>

      <CoolBackground image={scales} />
      
      <img src={myPic} alt="My picture" className='relative w-100 h-100 sm:w-130 sm:h-130 rounded-full mb-4 md:mb-0 md:mr-10 border-6 border-zinc-900'/>
      <div className='relative flex flex-col items-center max-w-2xl gap-4 md:gap-6 p-8 bg-LightPurple rounded-2xl border-6 border-zinc-900'>
        <p className='text-5xl font-bold text-black'>About me...</p>
        <p className='text-2xl text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default AboutMe;