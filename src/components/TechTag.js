import React from "react";

function TechTag({ name, color }) {
  console.log(color);
  return (
    <div className="rounded py-2 pr-2 flex flex-wrap items-center justify-center">
      <h1 className={`text-sm font-bold`} style={{ color: color }}>
        {name}
      </h1>
    </div>
  );
}

export default TechTag;
