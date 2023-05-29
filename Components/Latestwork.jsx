import React from 'react'

function Latestwork() {
  return (
    <div>
      <div className="text-center py-10">
        <h1 className="font-bold text-[40px] max-md:text-[20px]">
          Our Latest Work
        </h1>
        <p className="py-2 max-md:text-[12px]">
          Exclusive designs, surpassing expectations.
        </p>
        <div className="py-2 max-md:text-[12px]">
          <button className="text-[white] bg-[black] px-[30px] py-[5px] text-[16px]">
            View Latest work
          </button>
        </div>
      </div>

      <div className="flex justify-center max-lg:flex-col max-xl:px-5 items-center gap-5">
        <div className="w-[624px] h-[500px] max-md:w-[300px] bg-[#D9D9D9]"></div>
        <div className="w-[624px] h-[500px] max-md:w-[300px] bg-[#D9D9D9]"></div>
      </div>

      <div className="flex justify-center max-lg:flex-col max-xl:px-5 items-center gap-5 py-5">
        <div className="w-[624px] h-[500px] max-md:w-[300px] bg-[#D9D9D9]"></div>
        <div className="w-[624px] h-[500px] max-md:w-[300px] bg-[#D9D9D9]"></div>
      </div>
    </div>
  );
}

export default Latestwork
