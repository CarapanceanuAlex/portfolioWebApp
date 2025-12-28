import { GiSecretBook } from "react-icons/gi";
import lines from '../assets/lines.svg';
import CoolBackground from '../components/coolBackground';

function Education() {
  return (
        <div className='relative flex flex-col min-h-screen items-center justify-center gap-4 md:gap-8 p-8 border-t-6 border-t-Gold'>
          
          <CoolBackground image={lines}/>

            <div className="bg-Bone rounded-2xl border-6 border-Gold p-8">
                <p className='text-5xl font-bold text-black flex flex-col items-center gap-2 z-50 mb-12'><GiSecretBook/>My education</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-50 w-full">
                  <div className="flex flex-col items-center text-center p-4">
                    <p className='text-3xl font-bold text-black underline mb-2'>Highschool</p>
                    <p className='text-2xl text-black'>Virgil Madgearu Economic Highschool</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <p className='text-3xl font-bold text-black underline mb-2'>Bachelor's Degree</p>
                    <p className='text-2xl text-black'>Romanian-American University</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4">
                    <p className='text-3xl font-bold text-black underline mb-2'>Master's Degree</p>
                    <p className='text-2xl text-black'>Ongoing, at Romanian-American University</p>
                  </div>
                </div>
             </div>
        </div>
        
  );
}

export default Education;