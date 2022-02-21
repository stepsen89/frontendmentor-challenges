import React from "react";

function Header() {
  return (
    <div class="header">
      <div class="flex">
        {/* <div> */}
        <img src="/images/logo.svg" alt="" />
        {/* </div> */}
        <div>
          <button class="btn small"> Menu </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
