// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

// const BlogPost = () => {
//   useEffect(() => {
//     const sections = gsap.utils.toArray('.scroll-section');
//     const timeline = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: 'power1.inOut' } });

//     sections.forEach((section, index) => {
//       timeline.to(section, {
//         xPercent: -100 * (index + 1),
//         duration: 1,
//         ease: 'power1.inOut',
//         delay: 5
//       });
//     });

//     timeline.to(sections, {
//       xPercent: 0,
//       duration: 0,
//       ease: 'none',
//     });
//   }, []);

//   return (
//     <div className="relative overflow-hidden h-screen bg-fixed bg-cover bg-white">
//       <div className="absolute top-0 left-0 flex w-full h-full scroll-container">
//         {[...Array(4)].map((_, index) => (
//           <div key={index} className="scroll-section flex min-w-full h-full">
//             {/* Static text content */}
//             <div className="relative flex w-full h-full">
//               <div className="p-[65px] flex flex-col justify-center items-center text-balance w-full relative">
//                 <div className="left-0 right-0 mr-20 h-full w-11/12">
//                   <div className="animated-content">
//                     <div className="text-sm text-gray-500 mt-24 mb-10">
//                       <h2>Resource management and circular economy</h2>
//                     </div>
//                     <div className="text-3xl font-bold mt-8 mb-10">
//                       Garbage in – energy out: what you need to know when developing waste-to-energy projects
//                     </div>
//                     <div className="mt-4 text-gray-700 text-s">
//                       <p>
//                         Rapid urbanisation in Southeast Asia means increased waste that needs to be managed.
//                         Rapid urbanisation in Southeast Asia means increased waste that needs to be managed.
//                         Rapid urbanisation in Southeast Asia means increased waste that needs to be managed.
//                         While this is clearly a challenge given that the region’s population is expected to
//                       </p>
//                     </div>
//                     <div className="mt-24">
//                       <button className="p-4 text-lg text-gray-800 transition-transform duration-300 ease-in-out transform hover:translate-x-0 hover:translate-y-2">
//                         &gt; Learn More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Animated background image and gray container */}
//             <div className="absolute top-0 left-0 w-full h-full">
//               <div className="relative flex bg-[#E7EEEC] shadow-lg min-h-full w-[42%] ml-10">
//                 <div className="w-[58%] relative z-20 h-[62%] bg-gray-100" style={{ left: '-90px' }}>
//                   <img
//                     src={`./src/assets/2011.jpg`}
//                     alt="Building"
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Top Right Button */}
//       <div className="absolute top-4 right-8 flex space-x-8">
//         <button className="p-4 text-lg text-blue-600 transition-transform duration-300 ease-in-out transform hover:translate-x-2 hover:translate-y-2">
//           &gt; View All
//         </button>
//       </div>

//       {/* Bottom Right Navigation Buttons */}
//       <div className="absolute bottom-4 right-4 flex space-x-4">
//         <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
//           {/* Add left arrow icon here */}
//         </button>
//         <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
//           {/* Add right arrow icon here */}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;

// import React, { useEffect } from 'react';
// import gsap from 'gsap';

// const BlogPost = () => {
//   useEffect(() => {
//     const sections = gsap.utils.toArray('.scroll-section');
//     const timeline = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: 'power1.inOut' } });

//     sections.forEach((section, index) => {
//       timeline.to(section, {
//         xPercent: -100 * (index + 1),
//         duration: 1,
//         ease: 'power1.inOut',
//         delay: 5
//       });

//       // Add animation to text elements
//       const textElements = section.querySelectorAll('.animated-content *');
//       textElements.forEach((element, index) => {
//         timeline.from(element, {
//           opacity: 0,
//           y: 20,
//           duration: 0.5,
//           ease: 'power1.inOut',
//           delay: 0.5 + (index * 0.1)
//         });
//       });

//       // Add animation to background image
//       const backgroundImage = section.querySelector('.bg-image');
//       timeline.from(backgroundImage, {
//         scale: 1.2,
//         duration: 1,
//         ease: 'power1.inOut',
//         delay: 0.5
//       });
//     });

//     timeline.to(sections, {
//       xPercent: 0,
//       duration: 0,
//       ease: 'none',
//     });
//   }, []);

//   return (
//     <div className="blog-post">
//       <div className="scroll-section">
//         <div className="animated-content">
//           <h1>sustainatrix</h1>
//           <h2>Resource management and circular economy</h2>
//           <p>Garbage in - energy out: what you need to know when developing waste-to-energy projects in Southeast Asia</p>
//           <a href="https://www.ramboll.com/en-apac/insights/resilient-societies-and-liveability/rising-to-the-transport-challenge-by-integrating-adaptability">Learn more</a>
//         </div>
//         <div className="bg-image" style={{ backgroundImage: 'url(https://example.com/image1.jpg)' }} />
//       </div>

//       <div className="scroll-section">
//         <div className="animated-content">
//           <h1>sustainatrix 3</h1>
//           <h2>Decarbonise for net zero</h2>
//           <p>The case for re-using concrete</p>
//           <a href="https://www.ramboll.com/en-apac/Insights/resource-management-and-circular-economy/garbage-in-energy-out-what-you-need-to-know-when-developing-waste-to-energy-projects-in-southeast-asia">Learn more</a>
//         </div>
//         <div className="bg-image" style={{ backgroundImage: 'url(https://example.com/image2.jpg)' }} />
//       </div>

//       <div className="scroll-section">
//         <div className="animated-content">
//           <h1>轻</h1>
//           <h2>Resilient societies and liveability</h2>
//           <p>Summer of extremes put a spotlight on urgent need for nature-based climate adaptation solutions</p>
//           <a href="https://www.ramboll.com/en-apac/insights/decarbonise-for-net-zero/the-case-for-re-using-concrete">Learn more</a>
//         </div>
//         <div className="bg-image" style={{ backgroundImage: 'url(https://example.com/image3.jpg)' }} />
//       </div>

//       <div className="scroll-section">
//         <div className="animated-content">
//           <h1>sustainatrix</h1>
//           <h2>Resilient societies and liveability</h2>
//           <p>Summer of extremes put a spotlight on urgent need for nature-based climate adaptation solutions</p>
//           <a href="http://www.rabolt.com/en-apar/insights/decarbonise-for-net-zero/the-case-for-re-using-concrete">Learn more</a>
//         </div>
//         <div className="bg-image" style={{ backgroundImage: 'url(https://example.com/image4.jpg)' }} />
//       </div>
//     </div>
//   );
// };

// export default BlogPost;

import React from 'react';

const BlogPost = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white  ">
      <div className="relative flex bg-[#E7EEEC] shadow-lg min-h-full w-[42%] ml-10">
        
         <div className="p-[65px] flex flex-col justify-center items-center text-balance w-full relative">
          <div className="left-0 right-0  mr-20 h-full w-11/12  ">
            <div className="text-sm text-gray-500 mt-24 mb-10">
              <h2>Resource management and circular economy</h2>
            </div>
            <div className="text-3xl font-bold mt-8 mb-10">
              Garbage in – energy out: what you need to know when developing waste-to-energy projects
            </div>
            <div className="mt-4 text-gray-700 text-s" >
              <p>
                Rapid urbanisation in Southeast Asia means increased waste that needs to be managed.
                Rapid urbanisation in Southeast Asia means increased waste that needs to be managed.
                Rapid urbanisation in Southeast Asia means increased waste that needs to be managed.
                 While this is clearly a challenge given that the region’s population is expected to
                  rise from about 686.825 million to 724.664 million...
              </p>
            </div>
            <div className="mt-24">
        <button className="p-4 text-lg text-gray-800 transition-transform duration-300 
        ease-in-out transform hover:translate-x-0 hover:translate-y-2">
          &gt; Learn More
        </button>
      </div>
            </div>
            </div>
        </div>
      
      


      {/* Image Section */}
      <div className="w-[58%] relative z-20 h-[62%] bg-gray-100" style={{ left: '-90px' }}>
        <img
          src="./src/assets/0013.jpg"
          alt="Building"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Top Right Button */}
      <div className="absolute top-4 right-8 flex space-x-8">
        <button className="p-4 text-lg text-blue-600 transition-transform duration-300 ease-in-out transform hover:translate-x-2 hover:translate-y-2">
          &gt; View All
        </button>
      </div>

      {/* Bottom Right Navigation Buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-4">
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          {/* Add left arrow icon here */}
        </button>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          {/* Add right arrow icon here */}
        </button>
      </div>
    </div>
  );
};

export default BlogPost;