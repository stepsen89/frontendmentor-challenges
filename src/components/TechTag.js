import React from "react";

function TechTag({ name }) {
  return (
    <div className="rounded py-2 pr-2 flex flex-wrap items-center justify-center">
      <div class="badge small">{name}</div>
    </div>
  );
}

export default TechTag;
