import CoolBackground from "../../components/coolBackground";
import scales from '../../assets/scales.svg';

function HuntingBibel() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-black gap-4 md:gap-6 p-8">
      <CoolBackground image={scales}/>
      
      <p className="text-5xl font-bold">Hunting Bibel</p>
      <p className='text-2xl text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

export default HuntingBibel;