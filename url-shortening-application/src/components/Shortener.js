import React from "react";

function ShortenerComponent() {
  return (
    <div className="container h-36 -mb-16 z-50 bg-yellow-50 ml-4">
      <div className="flex flex-col bg-dark-violet rounded-lg h-36 justify-center items-center gap-4 w-11/12 absolute">
        <input
          className="w-11/12 bg-white border-2 border-blue-50 py-2"
          placeholder="Shorten a link here..."
        />
        <button className="bg-cyan w-11/12 py-2 text-white font-bold">
          Shorten It!
        </button>
      </div>
    </div>
  );
}

export default ShortenerComponent;
