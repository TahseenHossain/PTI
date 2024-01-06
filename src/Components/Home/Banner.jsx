import React from "react";

const Banner = () => {
  return (
    <div className="my-10 w-fill">
      <div className="bg-[#FFAA33]"></div>
      <div className="text-left text-neutral-content bg-[#FFAA33] rounded-3xl">
        <div className="flex flex-col lg:flex-row lg:gap-36 md:py-6 lg:py-20 px-10 md:px-20 lg:px-40 item-center">
          <div className="pt-32">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Deliver Food To Your Door Stepl
            </h1>
            <p className="mb-5 text-white text-3xl">
              Authentic Food Quick Service Fast Delivary
            </p>
          </div>
          <div>
            <img src="https://i.ibb.co/9rJdSg3/Image1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
