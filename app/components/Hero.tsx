import React from 'react';
import { AuroraBackground } from './ui/aurora-background';

const Hero = () => {
  return (
    <div className='bg-black'>
      <AuroraBackground>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-white'>CUBA</h1>
          <p className='mt-4 text-lg text-gray-300'>Your journey starts here</p>
        </div>
      </AuroraBackground>
    </div>
  );
}

export default Hero;
