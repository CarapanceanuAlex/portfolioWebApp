import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between text-3xl font-bold font- text-white p-5 bg-zinc-900 
    xl:sticky top-0 z-51 border-b-6 border-b-Gold'>
        <img src={logo} className='w-27 h-20'></img>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-15 mx-auto">
          <Link to="/">
            <p className="hover:text-Gold hover:underline hover:decoration-LightPurple transition-all duration-500 cursor-pointer">
              About me
            </p>
          </Link>

          <Link to="/projects">
            <p className="hover:text-Gold hover:underline hover:decoration-LightPurple transition-all duration-500 cursor-pointer">
              My projects
            </p>          
          </Link>

          <Link to="/contact">
            <p className="hover:text-Gold hover:underline hover:decoration-LightPurple transition-all duration-500 cursor-pointer">
              Contact me
            </p>          
          </Link>

        </div>
     </div>
     
  );
}

export default Header;