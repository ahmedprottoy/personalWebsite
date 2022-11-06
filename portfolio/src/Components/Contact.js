import React from "react";

const Contact = () => {
  return (
    <div className="p-10 " id="Contact">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-semibold ">Get In Touch</p>
        <span className="bg-sky-500 w-20 h-2 my-10 rounded-2xl "></span>
        <div>
          <a
            href="https://www.facebook.com/rumman.ahmed.prottoy"
            target="_blank"
            rel="noreferrer"
            className="mx-4"
          >
            <i class="fa-brands fa-facebook fa-2x"></i>
          </a>

          <a
            href="https://instagram.com/p_r_o_t_t_o_y?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
            className="mx-4"
          >
            <i class="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://github.com/makarov009"
            target="_blank"
            rel="noreferrer"
            className="mx-4"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/makarov009"
            target="_blank"
            rel="noreferrer"
            className="mx-4"
          >
            <i class="fa-brands fa-github fa-2x"></i>
          </a>

          <a
            href="mailto:prottoy.r.ahmed@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="mx-4"
          >
            <i class="fa-solid fa-envelope fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
