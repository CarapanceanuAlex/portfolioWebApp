interface CoolBackgroundProps {
  image: string;
}

function coolBackground({ image }: CoolBackgroundProps) {
  return (
    <>
        {/*bg pt foarte mic sub 640px*/}
      <div 
        className='absolute inset-0 z-0 sm:hidden'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '250% 150%', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1
        }}
      />

      {/*bg pt mic 640px - 768px */}
      <div 
        className='absolute inset-0 hidden sm:block md:hidden'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '300% 130%', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1
        }}
      />

      {/*bg pt mediu 768px - 1024px*/}
      <div 
        className='absolute inset-0 hidden md:block lg:hidden'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '250% 180%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1
        }}
      />
      
      {/*bg pt mare peste 1024px*/}
      <div 
        className='absolute inset-0 hidden lg:block'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '120% 300%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1
        }}
      />
    </>
  );
}

export default coolBackground;