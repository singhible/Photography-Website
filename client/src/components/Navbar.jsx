import React from "react";
import Logo from "../assests/logo-bl.png";

export default function Navbar() {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-black-2">
      <div className="my-3">
        <img src={Logo} alt="Logo" style={{ width: "220px" }} />
      </div>
      {/* menu */}
      <ul class="hidden md:flex">
        <li>Home</li>
        <li>Photos</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
