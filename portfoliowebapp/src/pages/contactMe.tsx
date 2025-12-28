import lines from '../assets/lines.svg';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { GrLinkedin } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import CoolBackground from '../components/coolBackground';
import { useEffect, useRef, useState } from 'react';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    onCaptchaSuccess: () => void;
    onCaptchaExpired: () => void;
  }
}

function ContactMe() {
  const [isVerified, setIsVerified] = useState(false);
  const captchaRef = useRef<HTMLDivElement>(null);
  const isRenderedRef = useRef(false);

useEffect(() => {
  window.onCaptchaSuccess = async () => {

    const token = (window as any).grecaptcha.getResponse();

    try {
      const res = await fetch("http://localhost:3001/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (!data.success) {
        setIsVerified(false);
        alert("CAPTCHA WAS INVALID, CLANKER ALERT! CLANKER ALERT! CLANKER ALERT!");
      } else {
        setIsVerified(true);
        console.log("CAPTCHA WAS VALID, PROCEED AS USUAL DEAR HUMAN!.");
      }
    }
    catch (error) {
      console.error("Error verifying CAPTCHA:", error);
    }
  };

  window.onCaptchaExpired = () => {
    setIsVerified(false);
  };

  const renderCaptcha = () => {
    if ((window as any).grecaptcha && captchaRef.current && !isRenderedRef.current) {
      (window as any).grecaptcha.render(captchaRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        callback: 'onCaptchaSuccess',
        'expired-callback': 'onCaptchaExpired',
      });
      isRenderedRef.current = true;
    }
  };

  if ((window as any).grecaptcha) {
    renderCaptcha();
  } else {
    const interval = setInterval(() => {
      if ((window as any).grecaptcha) {
        renderCaptcha();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }

}, []);

if (!isVerified) {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <CoolBackground image={lines} />
      <div className='relative z-10 bg-Bone rounded-2xl border-6 border-Gold p-12 flex flex-col items-center gap-6'>
        <p className='text-4xl font-bold text-black text-center'>Verify you are human</p>
        <div ref={captchaRef}></div>
      </div>
    </div>
  );
}

return (
    <>
      {!isVerified && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <CoolBackground image={lines} />
          <div className='relative z-10 bg-Bone rounded-2xl border-6 border-Gold p-12 flex flex-col items-center gap-6'>
            <p className='text-4xl font-bold text-black text-center'>Verify you are human</p>
            <div ref={captchaRef}></div>
          </div>
        </div>
      )}

      <div className='relative flex flex-col min-h-screen items-center justify-center gap-4 md:gap-8 p-8'>
        <CoolBackground image={lines} />
        <div className="relative z-10 bg-Bone rounded-2xl border-6 border-Gold p-8">
          <p className='text-5xl font-bold text-black flex flex-col items-center gap-2 mb-12'>Contact me</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center text-center p-4">
              <p className='text-xl sm:text-2xl font-bold text-black underline mb-2 flex items-center gap-2'><IoMailSharp/>alexcarapanceanu@gmail.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <p className='text-xl sm:text-2xl font-bold text-black underline mb-2 flex items-center gap-2'><FaPhoneAlt/>+40 XXX XXX XXX</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <p className='text-xl sm:text-2xl font-bold text-black underline mb-2 flex items-center gap-2'><IoLocationSharp/>Bucharest, RO</p>
            </div>
          </div>
          <div className='flex flex-row text-2xl items-center justify-center text-black gap-20 sm:mt-6 md:mt-12'>
            <p className='text-6xl hover:text-Gold hover:underline hover:decoration-LightPurple transition-all duration-500 cursor-pointer'><GrLinkedin/></p>
            <p className='text-6xl hover:text-Gold hover:underline hover:decoration-LightPurple transition-all duration-500 cursor-pointer'><SiGithub/></p>
            <p className='text-6xl hover:text-Gold hover:underline hover:decoration-LightPurple transition-all duration-500 cursor-pointer'><FaInstagramSquare/></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;