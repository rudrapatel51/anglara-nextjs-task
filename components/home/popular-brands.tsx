import React from 'react';
import Image from 'next/image';
import "./popularbrands.css"

const PopularBrands: React.FC = () => {
  const animationSpeed = "40s";

  const scrollAnimation = {
    animation: `scroll ${animationSpeed} linear infinite`,
  };
  
  return (
    <>
      <h2 className='text-2xl md:text-4xl text-[#1E293B] font-bold lg:pl-24 p-5'>Popular Brands</h2>
    <div className="flex items-center justify-center pb-12 pt-12">
      <div className="slider h-28 overflow-hidden mx-auto relative py-8 pb-8">
        <div className="slide-track flex" style={scrollAnimation}>
          {Array(14)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="slide w-64 h-24 flex-shrink-0 relative">
                <Image
                  src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${(index % 7) + 1}.png`}
                  alt={`Brand logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
              </div>
            ))}
        </div>
      </div>
    </div>
            </>
  );
};

export default PopularBrands;