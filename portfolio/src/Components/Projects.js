import React, { useEffect } from "react";
import newsify from "../images/newsifyM.png";
import buzztalk from "../images/buzztalk.jpg";
import expressIT from "../images/expressit.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import Aos from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full p-10 shadow-lg" id="Project">
      <div className="flex flex-col justify-center items-center p-5 md:mx-10">
        <p className=" md:text-6xl text-3xl my-10 font-semibold">MY PROJECTS</p>
        <span className="bg-sky-500 w-20 h-2 my-10 rounded-2xl "></span>

        <p className="md:text-3xl text-xl text-center font-light">
          {" "}
          Here you will find the projects I've worked on in the past few years !
        </p>

        <div
          data-aos="zoom-in"
          className="md:w-10/12 flex md:flex-row items-center justify-center flex-col md:my-32 mt-20 "
        >
          <img className="md:w-3/5 w-3/4 mr-5" src={buzztalk} alt="" />
          <div className="my-7">
            <p className="md:text-4xl md:text-start text-center text-2xl mb-7 md:mb-10">
              BUZZ TALK
            </p>
            <p className=" text-xl mb-16 text-slate-700 ">
              An Interactive Social media Platform for Making Contact,
              Connecting with People, and Interacting with Them by Exchanging
              Views and Ideas. Also used <b>Socket.IO</b> to provide a
              one-to-one chat system, as well as <b>Tiptap</b>, a headless
              editor framework for writing & editing blogs.
              <br /> <br /> Built with React.js, Node.js, Express.js & MySql
            </p>

            <a
              href="https://github.com/makarov009/Buzz-Talk.git"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github fa-3x"></i>
            </a>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="md:w-10/12 flex md:flex-row items-center flex-col md:my-32 mt-20"
        >
          <img className="md:w-3/5 w-3/4 mr-5" src={newsify} alt="" />
          <div className="my-7">
            <p className="md:text-3xl md:text-start text-center text-2xl mb-7 md:mb-10">
              NEWSIFY
            </p>
            <p className=" text-xl mb-16 text-slate-700 ">
              A full-stack sports-blogging platform that allows sports
              enthusiasts to publish about their preferred sports topics.
              <br /> <br /> Built with React.js, Node.js, Express.js & MySql
            </p>

            <a
              href="https://github.com/makarov009/NEWSIFY"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github fa-3x"></i>
            </a>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="md:w-2/3 flex md:flex-row items-center justify-center flex-col md:my-32 mt-20"
        >
          <img className="md:w-3/5 w-1/2 md:mr-24" src={expressIT} alt="" />
          <div className="my-7">
            <p className="md:text-3xl md:text-start text-center text-2xl mb-7 md:mb-10">
              ExpressIT
            </p>
            <p className=" text-xl mb-16 text-slate-700 ">
              A Google Speech API-integrated Android Application That Is Used To
              Correctly Converts Speech into Text or Texts into Speech, with a
              Focus on Helping Persons With Disabilities Interact With Others.
              <br /> <br /> Built with Java & Android Studio
            </p>

            <a
              href="https://github.com/makarov009/ExpressIT"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
