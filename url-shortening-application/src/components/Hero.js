import React from "react";

function HeroComponent() {
  return (
    <div className="container h-4/6 pb-24 md:pt-24 pt-12">
      <div className="flex flex-col-reverse md:flex-row md:justify-around md:items-center">
        <div className="flex justify-center flex-col gap-4 items-center p-4 my-8 md:items-start md:w-1/2">
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
            className="h-80 w-80 mx-auto md:h-96 md:w-96"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
