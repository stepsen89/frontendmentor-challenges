import React from "react";

function FooterComponent() {
  return (
    <div className="bg-very-dark-violet p-12">
      <div className="flex md:flex-row flex-col md:justify-around justify-center gap-4 items-center md:items-start text-white md:pt-8">
        <img
          src="images/logo-white.svg"
          alt="Shortly logo"
          className="logo-invert pb-8"
        />

        <div className="text-center">
          <h4 className="text-lg font-bold pb-8"> Features </h4>
          <ul>
            <li className="pb-4 text-sm text-gray">
              <a href="#linkShortening"> Link Shortening</a>
            </li>
            <li className="pb-4 text-sm text-gray">
              <a href="#linkShortening"> Branded Links </a>
            </li>
            <li className="pb-4 text-sm text-gray">
              <a href="#linkShortening"> Analytics </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold pb-8"> Resources </h4>
          <ul>
            <li className="pb-4 text-sm text-gray">
              <a href="#linkShortening"> Blog</a>
            </li>
            <li className="pb-4 text-sm text-gray">
              <a href="#linkShortening"> Developers </a>
            </li>
            <li className="pb-4 text-sm text-gray">
              <a href="#linkShortening"> Support </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold pb-8"> Company </h4>
          <ul>
            <li className="pb-4 text-sm text-gray">
              <a href="#linkShortening"> About </a>
            </li>
            <li className="pb-4 text-sm text-gray">
              <a href="#linkShortening"> Our team </a>
            </li>
            <li className="pb-4 text-sm text-gray">
              <a href="#linkShortening"> Careers </a>
            </li>
            <li className="pb-4 text-sm text-gray">
              <a href="#linkShortening"> Contact </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <a href="#">
            <img src="images/icon-facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="images/icon-twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="images/icon-pinterest.svg" alt="" />
          </a>
          <a href="#">
            <img src="images/icon-instagram.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
