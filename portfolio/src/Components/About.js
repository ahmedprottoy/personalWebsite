import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="h-full p-10 shadow-lg" id="About">
      <div className="flex items-center justify-center  flex-col w-full mt-20 space-y-5">
        <p className="font-semibold md:text-6xl text-3xl md:mb-5">ABOUT ME</p>
        <span className="bg-sky-500 w-20 h-2 rounded-2xl"></span>

        <p className="font-light text-center md:text-3xl text-xl md:mx-36 md:mb-28">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="flex flex-col lg:flex-row min-w-min">
          <div data-aos="zoom-in" className="md:w-3/5 my-20 mx-20 ">
            <p className="font-semibold md:text-4xl text-3xl md:mb-10 mb-5">
              Get To know me!
            </p>
            <p className="font-light md:text-2xl text-xl leading-10">
              I'm a student majoring in Software Engineering at SUST with a
              passion for web development. As a web developer, my goal is to
              design more engaging and user-friendly websites in order to
              provide the maximum user experience possible.
              <br />
              <br />
              I'm comfortable with working solo or as part of a team. I'm keen
              to learn new technologies, frameworks, and diving deep to discover
              a solution to an issue since I consider to have an adaptive and
              rapid learning attitude.
              <br />
              <br /> I'm now looking for job opportunities where I can
              contribute, learn, and develop. Don't hesitate to contact me if
              you have a good opportunity that matches my skills and expertise.
            </p>
          </div>
          <div data-aos="zoom-in" className="md:w-2/5 w-full mx-10  my-20">
            <p className="font-semibold ml-10 md:mb-10 mb-5 md:text-4xl text-2xl">
              My Skills
            </p>

            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="w-28 py-2 rounded-2xl text-center my-5 ml-9 bg-gray-300  hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white">REACT</p>
                </div>

                <div className="w-32 py-2 rounded-2xl text-center my-5 mx-2 bg-gray-300 hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white">
                    EXPRESS.JS
                  </p>
                </div>
                <div className="w-20  py-2 rounded-2xl text-center my-5 mx-2 bg-gray-300  hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white ">CSS</p>
                </div>
                <div className="w-20 py-2 rounded-2xl text-center my-5 mx-2 bg-gray-300  hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white">HTML</p>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="w-40 py-2 rounded-2xl text-center my-5 ml-9 bg-gray-300 hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white">
                    TAILWIND CSS
                  </p>
                </div>
                <div className="w-24 py-2 rounded-2xl text-center my-5 mx-2 bg-gray-300 hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white">MYSQL</p>
                </div>
                <div className="w-28 py-2 rounded-2xl text-center my-5 mx-2 bg-gray-300 hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white">GITHUB</p>
                </div>
                <div className="w-32 py-2 hidden lg:block rounded-2xl text-center my-5 mx-2 bg-gray-300 hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white">
                    JAVASCRIPT
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-32 py-2 lg:hidden rounded-2xl text-center my-5 ml-9 bg-gray-300 hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white">
                    JAVASCRIPT
                  </p>
                </div>
                <div className="w-32 py-2 rounded-2xl text-center my-5 ml-2 lg:ml-9 bg-gray-300 hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white">NODE.JS</p>
                </div>
                <div className="w-52 py-2 rounded-2xl text-center my-5 ml-2 lg:ml-3 bg-gray-300 hover:bg-blue-400 hover:scale-110 duration-500">
                  <p className="font-light text-xl hover:text-white">
                    RESPONSIVE DESIGN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
