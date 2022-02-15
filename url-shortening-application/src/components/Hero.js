import React from "react";

function HeroComponent() {
  return (
    <div className="container h-3/5 pb-24 md:pt-8">
      <div className="flex flex-col-reverse md:flex-row md:justify-center mg:items-center">
        <div className="flex justify-center flex-col gap-4 items-center m-4 my-8 md:items-start md:w-2/5">
          <h1 className="text-4xl text-center font-bold md:text-5xl md:text-left">
            {" "}
            More than just shorter links
          </h1>
          <p className="text-center text-gray font-bold text-4xl md:text-left md:text-lg">
            {" "}
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="w-50 rounded-full bg-cyan p-4 px-8 font-bold text-white">
            {" "}
            Get Started{" "}
          </button>
        </div>
        <div>
          <img
            src="images/illustration-working.svg"
            alt="A person sitting on a chair in front of a computer working"
            className="ml-8 h-80"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
