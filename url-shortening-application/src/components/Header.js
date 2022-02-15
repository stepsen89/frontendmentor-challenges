import React from "react";

export default function Header() {
  const showNav = (e) => {
    console.log(e);
  };
  return (
    <div className="container p-8">
      <div className="flex sm:columns-2 justify-between w-full ">
        <div>
          {" "}
          <img src="images/logo.svg" alt="Shortly Logo" />
        </div>
        <div className="space-y-2 md:hidden" onClick={showNav}>
          <div className="w-6 h-0.5 bg-gray"></div>
          <div className="w-6 h-0.5 bg-gray"></div>
          <div className="w-6 h-0.5 bg-gray"></div>
        </div>
      </div>
    </div>
  );
}
