import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7co7thj",
        "template_lcr8mfe",
        form.current,
        "X46eT1z6G78SJXNmv"
      )
      .then(
        (result) => {
          console.log("msg sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="p-10 " id="Contact">
      <div className="flex flex-col items-center justify-center mt-20">
        <p className="text-4xl font-semibold ">Get In Touch</p>
        <span className="bg-sky-500 w-20 h-2 my-10 rounded-2xl "></span>
        <p className="text-2xl font-base mb-20 ">
          If you have any questions or would want to collaborate with me, please
          send a note here!
        </p>
        <div>
          <a
            href="https://www.facebook.com/rumman.ahmed.prottoy"
            target="_blank"
            rel="noreferrer"
            className="mx-10"
          >
            <i class="fa-brands fa-facebook fa-2x"></i>
          </a>

          <a
            href="https://instagram.com/p_r_o_t_t_o_y?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
            className="mx-10"
          >
            <i class="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/prottoy-ahmed-b07b08243/"
            target="_blank"
            rel="noreferrer"
            className="mx-10"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/makarov009"
            target="_blank"
            rel="noreferrer"
            className="md:mx-10 mx-5"
          >
            <i class="fa-brands fa-github fa-2x"></i>
          </a>
        </div>

        <div className="w-full md:w-2/5 my-20">
          <div className="p-10 border border-gray-300 sm:rounded-md">
            <form className="leading-40" ref={form} onSubmit={sendEmail}>
              <label class="block mb-6">
                <input
                  type="text"
                  name="name"
                  className="
            block
            w-11/12
            m-2
            h-20
            px-8
            text-xl
            outline-none
            border-gray-800
            rounded-md
            shadow-md
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Your Name"
                />
              </label>
              <label className="block mb-6">
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-11/12
            m-2
            h-20
            px-8
            text-xl
            border-gray-800
            rounded-md
            outline-none
            shadow-md
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Your Email Address"
                  required
                />
              </label>
              <label className="block mb-6">
                <textarea
                  name="message"
                  className="
            block
            w-11/12
            m-2
            resize-none
            p-8
            h-60
            text-xl
            outline-none
            border-gray-800
            rounded-md
            shadow-md
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="3"
                  placeholder="What Are You Thinking..."
                ></textarea>
              </label>
              <div className="py-10">
                <button
                  type="submit"
                  className="
            h-14
            px-5
            text-xl
            ml-2
            
            text-indigo-100
            bg-sky-500
            rounded-lg
            transition
            duration-500
            focus:shadow-outline
            hover:bg-sky-600
            hover:scale-105
          "
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
