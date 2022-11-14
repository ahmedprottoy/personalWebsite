import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import { Link } from "react-scroll";

function Sidebar() {
  return (
    <div className="w-14  top-40 mt-20 hidden md:block fixed rounded shadow-lg ml-2 bg-white z-50">
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
          <a
            href="https://www.linkedin.com/in/prottoy-ahmed-b07b08243/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
        </li>

        <li className="mb-10 hover:bg-gray-300 hover:scale-110 duration-500">
          <Link to={"Contact"} target="_blank" rel="noreferrer">
            <EmailTwoToneIcon sx={{ fontSize: 40 }} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
