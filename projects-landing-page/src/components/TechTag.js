import React from "react";

function TechTag({ name }) {
  return (
    <div className="rounded py-4 px-6 h-4 bg-blue-50 text-center flex justify-center items-center m-2">
      <h1 className="text-center text-sm font-bold">{name}</h1>
    </div>
  );
}

export default TechTag;
