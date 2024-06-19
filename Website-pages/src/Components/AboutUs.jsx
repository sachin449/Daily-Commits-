import React, { useEffect, useRef } from 'react'; // Added useEffect and useRef for GSAP
import gsap from 'gsap'; // Imported GSAP
import ScrollTrigger from 'gsap/ScrollTrigger'; // Imported ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Registered ScrollTrigger

const sections = [
  {
    title: 'Mission',
    content: 'Empower our talented teams to deliver top-notch solutions, prioritizing safety and efficiency while safeguarding the environments we operate in.',
    imageUrl: 'sec1.jpg',
    alt: 'Mission Image'
  },
  {
    title: 'Vision',
    content: "Striving to be North America's premier service provider.",
    imageUrl: 'sec2.jpg',
    alt: 'Vision Image'
  }
];

const AboutUs = () => {
  const boxRefs = useRef([]); // Created ref array for boxes

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      gsap.fromTo(
        box, 
        { x: -200, opacity: 0 }, // Initial state
        { 
          x: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: 'power2.out', // Smooth easing
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          }
        }
      ); // GSAP animation for each box
    });
  }, []);

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="./meet02.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#00a7ff] opacity-[20%]"></div>

        {/* Heading and Subheading */}
        <div className="relative container mr-10 flex flex-col top-[55%] left-[45%] h-full px-5 py-10 text-white">
          <div className="mb-20">
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-6">About Us</h1>
            <h2 className="max-w-4xl text-lg sm:text-xl md:text-xl font-light text-balance">
            We have been providing services to Client in sectors of Infrastructure & Real Estate, 
            Manufacturing,Agri-Business & Forestry, Retail & Hospitality,
            Financial Institution & Funds and Health & Education..
            </h2>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="relative h-screen bg-white p-8">
        <h2 className="text-3xl font-semi-bold text-left mt-14 ml-6 mb-8">OUR CORE PILLARS: MISSION, VISION, VALUES</h2>
        <h3 className="text-xl font-semibold text-left ml-6 mb-14 text-[#00a7ff]">EMPOWERING SOLUTIONS, PRESERVING ENVIRONMENTS</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={el => boxRefs.current[index] = el} // Assign ref to each box
              className="relative bg-cover bg-center text-white p-10 rounded-lg h-[90%] mb-16"
              style={{ backgroundImage: `url(${section.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-[#00a7ff] opacity-30 rounded-lg "></div>
              <div className="relative z-10">
                <h4 className="text-3xl font-semibold mb-6">{section.title}</h4>
                <p className="text-lg">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

// after it add About.jsx to complete the ABOUT US PAGE
