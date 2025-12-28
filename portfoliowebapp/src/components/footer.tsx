import { GrLinkedin } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:gap-60 p-5 bg-zinc-900 z-50 border-t-6 border-Gold'>
        <div className='flex flex-col items-center gap-4'>
              <p className='text-3xl font-bold text-white'>Connect with me</p>
              <div className="flex flex-row gap-4">
                <p className='text-3xl  text-white'><GrLinkedin/></p>
                <p className='text-3xl  text-white'><SiGithub/></p>
                <p className='text-3xl  text-white'><FaInstagramSquare/></p>
              </div>
              <p className="text-xl text-white opacity-50">Copyright © 2025 Cărăpănceanu Alexandru</p>
        </div>
     </div>
  );
}

export default Footer;