import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Sidebar() {
  return (
    <div className="w-14 absolute top-20 mt-20 hidden md:block shadow-md ml-2 bg-white">
      <ul className="mx-2 my-10">
        <li className="mb-10 hover:bg-gray-300 hover:scale-110 duration-500">
          <a
            href="https://www.facebook.com/rumman.ahmed.prottoy"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon sx={{ fontSize: 40 }} />
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
      </ul>
    </div>
  );
}

export default Sidebar;
