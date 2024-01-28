// components/Hero.tsx
import Image from "next/image";
import React from "react";

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageUrl }) => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-white'>
      <div className='p-6 text-center md:text-left'>
        <h1 className='text-4xl font-bold text-gray-800'>{title}</h1>
        <p className='text-xl text-gray-600 mt-4'>{description}</p>
      </div>
      <div className='w-full md:w-1/2'>
        <Image
          src={imageUrl}
          alt='Hero Image'
          width={500}
          height={300}
          objectFit='cover'
          className='grayscale'
        />
      </div>
    </div>
  );
};

export default Hero;
