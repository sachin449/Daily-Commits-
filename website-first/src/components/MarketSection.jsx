import React from 'react';
import { ArrowUpRight } from 'lucide-react';



const MarketSection = () => {
  return (
    <div className="h-screen bg-white relative">



<div className="relative top-[120px] left-[300px] w-[70vw] h-[56vh] z-20  bg-[#E7EEEC]">

<div className="flex flex-row">
<div className="relative mt-10 ml-10 w-1/2">
    <h1 className=" text-lg font-semibold">
      View All &nbsp; <ArrowUpRight className="h-4 w-4" />
    </h1>
    <p className="mt-3 text-sm text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
    </p>
   <button
      type="button"
      className="inline-flex items-center text-lg font-semibold"
    >
      Learn More&nbsp; <ArrowUpRight className="h-4 w-4" />
    </button>
  
</div>

<div className=" relative w-full h-full">
  <img
    src="./src/assets/0013.jpg"
    alt="Laptop"
    
  />
  </div>

</div>
</div>

      <div className="fixed left-20 top-0 bg-[#E7EEEC] shadow-lg h-full w-[42%]">
        {/* Add your content here */}
      </div>
    
    </div>
  );
};

export default MarketSection;



