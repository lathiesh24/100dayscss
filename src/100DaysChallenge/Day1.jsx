import React from "react";

const Day1 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center bg-gradient-to-tr from-blue-500 to-blue-300 w-80 h-80">
        <div className="">
          <div className="">
            <div className="flex flex-row">
              <div className="relative h-24 w-5 z-40 bg-white rounded-sm">
                <div className="absolute h-8 w-4 right-4 bg-white z-[2] rotate-45 rounded-sm"></div>
              </div>
              <div className="border-[20px] w-24 h-24 rounded-full border-white"></div>
              <div className="border-[20px] w-24 h-24 rounded-full border-white"></div>
            </div>
          </div>
          <div className="text-5xl">Days</div>
          <div className="text-xl">CSS Challenge</div>
        </div>
      </div>
    </div>
  );
};

export default Day1;
