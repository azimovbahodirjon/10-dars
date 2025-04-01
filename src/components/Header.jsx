import React from "react";
import { MdOutlineExitToApp } from "react-icons/md";

function Header() {
  return (
    <div className="fixed left-1/2 top-0 z-50 flex w-full -translate-x-1/2 items-center justify-between px-5 py-4 transition duration-300 md:sticky md:mb-10 md:-translate-x-0 md:bg-base-100 md:shadow-md bg-transparent">
      <img
        className="hidden w-12 rounded-full md:block"
        src="./logo.svg"
        alt="Logo"
      />
      <button className="btn btn-sm border-0 bg-transparent md:btn-md">
        <MdOutlineExitToApp className="text-3xl" />
      </button>
    </div>
  );
}

export default Header;
