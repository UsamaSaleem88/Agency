import React from "react";
import Mobilenavbar from "./Mobilenavbar";

function Navbar() {
  return (
    <div>
      <ul className="lg:flex hidden justify-center items-center gap-5 py-[10px]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>

        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Faq</a>
        </li>
      </ul>
      <Mobilenavbar />
    </div>
  );
}

export default Navbar;
