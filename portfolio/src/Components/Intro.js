import React from "react";
import image from "../images/intro.png";
import image2 from "../images/programmingUndraw.svg";

function Intro() {
  return (
    <div className="h-full   mt-5 py-12 md:py-40 shadow-xl" id="Intro">
      <div className="text-center flex justify-center items-center space-y-5 md:space-y-16 flex-col ">
        <div className="md:flex justify-center  ">
          <img className="w-40 md:w-60" src={image} alt="" />
        </div>
        <div>
          <p className="font-extrabold md:text-7xl md:mb-10 text-3xl mb-5">
            HEY,I'M PROTTOY
          </p>
          <p className="md:font-medium font-normal md:text-4xl text-gray-500 md:mx-32 mx-10 md:mb-28 text-xl ">
            A Web Developer Passionate About Creating Elegant Websites with a
            Clean & User-Friendly Experience.
          </p>
        </div>
        <div>
          <img className="md:w-96 w-52" src={image2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
