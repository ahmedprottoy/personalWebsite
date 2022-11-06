import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";

function Sidebar() {
  return (
    <div className="w-14 absolute top-10 mt-20 hidden md:block  rounded shadow-lg ml-2 bg-white z-50">
      <ul className="mx-2 my-10">
        <li className="mb-10 hover:bg-gray-300 hover:scale-110 duration-500">
          <a
            href="https://www.facebook.com/rumman.ahmed.prottoy"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookTwoToneIcon sx={{ fontSize: 40 }} />
          </a>
        </li>
        <li className="mb-10 hover:bg-gray-300 hover:scale-110 duration-500">
          <a
            href="https://github.com/makarov009"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon sx={{ fontSize: 40 }} />
          </a>
        </li>

        <li className="mb-10 hover:bg-gray-300 hover:scale-110 duration-500">
          <a href="404 not found" target="_blank" rel="noreferrer">
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
        </li>

        <li className="mb-10 hover:bg-gray-300 hover:scale-110 duration-500">
          <a
            href="mailTo:prottoy.r.ahmed@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailTwoToneIcon sx={{ fontSize: 40 }} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
