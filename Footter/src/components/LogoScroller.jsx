import React, { useEffect, useRef, useState } from 'react';

const logoPaths = [
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
  './src/assets/osha.png',
];

const LogoScroller = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, isHovered ? 100 : 20); // Pause scrolling when hovered

    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <div className="mt-18" >
      <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-900">
        {/* Header Text */}
        <div className="text-center mb-[35px]">
          <h1 className="text-3xl font-bold mt-20 animate-fade-in-down transition-all duration-700">
            TAKE YOUR CORPORATE PURPOSE INTO ACTION
          </h1>
          <p className="text-lg mt-4 animate-fade-in-up transition-all duration-700 delay-200">
            More than 100 companies are transforming the future of the oceans with us
          </p>
          <div className="w-16 h-1 bg-teal-500 mx-auto my-6 animate-fade-in transition-all duration-700 delay-300"></div>
        </div>

        {/* Scrolling Logos */}
        <div className="w-full bg-gray-100 py-10 ml-20 mr-20 ">
          <div className="container">
            <div
              className="w-full overflow-hidden whitespace-nowrap px-4 mx-auto max-w-screen-lg"
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="inline-block mt-2 mb-2">
                {logoPaths.concat(logoPaths).map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    className="inline-block mx-4 h-24 transition-transform transform hover:scale-110 hover:opacity-75"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScroller;
