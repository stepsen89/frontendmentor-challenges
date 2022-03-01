import React from "react";

function FilterComponent() {
  return (
    <div className="container py-8 relative">
      <div className="flex px-12 justify-center w-3/4 mx-auto ">
        <div className="absolute bg-white -bottom-3 w-1/2">
          <input className="border-4 w-full" />
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
