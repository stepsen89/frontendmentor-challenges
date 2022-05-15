import React from "react";

function Header() {
  return (
    <div className="lg:h-1/12">
      <div className="container p-8 md:w-3/4">
        <div className="flex px-6 md:px-12 md:justify-between md:mx-auto">
          <h2 className="text-xl font-bold"> Steps.dev </h2>
          <h4 className="hidden md:block text-lg"> Frontend Mentor Challenges</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
