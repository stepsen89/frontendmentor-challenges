import React from "react";

function BoostComponent() {
  return (
    <div className="bg-dark-violet">
      <div className="container boost  h-auto p-8 py-24 md:py-16 flex justify-center items-center flex-col gap-6">
        <h1 className="text-2xl text-center text-white font-bold">
          {" "}
          Boost your links today
        </h1>
        <button className="w-auto rounded-full bg-cyan p-4 px-12 font-bold text-white">
          {" "}
          Get Started{" "}
        </button>
      </div>
    </div>
  );
}

export default BoostComponent;
