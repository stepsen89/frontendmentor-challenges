import React, { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const showSideMenu = (e) => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="container p-8 ">
      <div className="flex sm:columns-2 justify-between w-full items-center ">
        <div className="md:flex">
          <div>
            {" "}
            <img src="images/logo.svg" alt="Shortly Logo" />
          </div>
          <div className=" hidden lg:flex md:flex-row md:self-start pl-6">
            <a href="#Features" className="px-6 font-bold text-gray">
              {" "}
              Features{" "}
            </a>
            <a href="#Pricing" className="px-6 font-bold text-gray">
              {" "}
              Pricing{" "}
            </a>

            <a href="#Resources" className="px-6 font-bold text-gray">
              {" "}
              Resources{" "}
            </a>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 items-center">
          <a href="#LogIn" className="px-6 font-bold text-gray">
            {" "}
            Log In{" "}
          </a>
          <a
            href="#SignUp"
            className="w-50 rounded-full bg-cyan p-2 px-8 font-bold text-white"
          >
            {" "}
            Sign Up{" "}
          </a>
        </div>

        <div
          className="space-y-2 lg:hidden"
          onClick={() => {
            showSideMenu();
          }}
        >
          <div className="w-6 h-0.5 bg-gray"></div>
          <div className="w-6 h-0.5 bg-gray"></div>
          <div className="w-6 h-0.5 bg-gray"></div>
        </div>
      </div>
      {show ? SideMenu() : ""}
    </div>
  );
}

function SideMenu() {
  return (
    <div
      className="bg-dark-violet rounded-lg absolute w-3/4 lg:hidden top-20 mx-auto
   z-40"
    >
      <div className="p-8 flex flex-col gap-6 text-white items-center">
        <a href="#Features" className="px-6 font-bold">
          {" "}
          Features{" "}
        </a>
        <a href="#Pricing" className="px-6 font-bold">
          {" "}
          Pricing{" "}
        </a>

        <a href="#Resources" className="px-6 font-bold">
          {" "}
          Resources{" "}
        </a>
      </div>
      <hr className="mx-6 text-white"></hr>
      <div className="p-8 flex flex-col gap-6 text-white items-center">
        <a href="#LogIn" className="px-6 font-bold">
          {" "}
          Log In{" "}
        </a>
        <a
          href="#SignUp"
          className="w-full rounded-full bg-cyan p-2 font-bold text-white text-center"
        >
          {" "}
          Sign Up{" "}
        </a>
      </div>
    </div>
  );
}
