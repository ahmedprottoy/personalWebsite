import React from "react";
import image from "../images/mf-avatar.svg";
import image2 from "../images/programmingUndraw.svg";

function Intro() {
  return (
    <div className="h-full  bg-gray-100 mt-5 md:py-24 py-12 md:py-40">
      <div className="text-center flex justify-center items-center space-y-5 md:space-y-16 flex-col ">
        <div className="md:flex justify-center  ">
          <img className="w-40 md:w-52" src={image} alt="" />
        </div>
        <div>
          <p className="font-extrabold md:text-6xl md:mb-10 mb-5">
            HEY,I'M PROTTOY
          </p>
          <p className="font-medium md:text-3xl md:mx-32 mx-10 md:mb-28">
            A frontend-focused web developer creates the user interface of
            websites and web applications that leads to the success of the
            overall product.
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
