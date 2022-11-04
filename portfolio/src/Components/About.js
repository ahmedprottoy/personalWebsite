import React from "react";

function About() {
  return (
    <div className="h-full p-24">
      <div className="flex items-center justify-center flex-col space-y-7">
        <p className="font-semibold md:text-6xl md:mb-10 mb-5">ABOUT ME</p>
        <span className="bg-sky-500 w-20 h-3 rounded-2xl"></span>

        <p className="font-light text-center md:text-3xl md:mx-32 mx-10 md:mb-28 md:mx-40">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="flex">
          <div>
            <p className="font-semibold md:text-6xl md:mb-10 mb-5">
              Get To know me!
            </p>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section. <br />
              <br />
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming.
              <br /> <br /> I'm open to Job opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to contact
              me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
