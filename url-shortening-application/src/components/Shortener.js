import React, { useState, Fragment, useRef } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const baseUrl = "https://api.shrtco.de/v2/shorten";

function ShortenerComponent() {
  const [urlRequest, setUrlRequest] = useState("");
  const [error, setError] = useState("");
  const [urlResponse, setUrlResponse] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const inputRef = useRef();
  const copyRef = useRef();

  const copyText = (e) => {
    // e.target.innerText = "Copied!";
    e.target.style.backgroundColor = "hsl(257, 27%, 26%)";
    setCopySuccess(true);
  };

  const shortenLink = (e) => {
    inputRef.current.value = "";
    inputRef.current.placeholder = "Shorten a link here...";
    axios
      .get(`${baseUrl}?url=${urlRequest}`)
      .then((res) => {
        setUrlResponse(res.data.result.full_short_link3);
      })
      .catch((e) => console.log(e));

    if (!urlRequest) {
      setError("No valid link");
    }
  };

  const handleChange = (e) => {
    setError("");
    setUrlRequest(e.target.value);
    setUrlResponse("");
  };

  return (
    <div className="bg-gray pb-12">
      <div className="mx-auto h-36 -mb-16 md:-mb-16 z-50 relative">
        <div className="absolute w-full -top-16">
          <div className="left-0 right-0 mb-auto flex md:flex-row flex-col bg-dark-violet md:px-16 rounded-lg h-36 justify-center items-center gap-4 w-11/12 md:w-1/2 mx-auto ">
            <input
              className="w-11/12 bg-white border-2 border-blue-50 py-2 rounded-lg"
              placeholder="Shorten a link here..."
              name="link"
              type="text"
              onChange={handleChange}
              ref={inputRef}
            />
            {console.log(error)}
            <button
              className="bg-cyan md:w-48 w-11/12 py-2 rounded-lg text-white font-bold"
              onClick={shortenLink}
            >
              Shorten It!
            </button>
          </div>
          {/* {error && <span className="text-red"> {error} </span>} */}
          {urlResponse && (
            <div className="mx-auto z-50 relative mt-4">
              <div>
                <div className="left-0 right-0 mb-auto flex md:flex-row bg-white px-8 rounded-lg h-16 justify-between items-center gap-4 w-11/12 md:w-1/2 mx-auto ">
                  <h3 className="hidden md:block"> {urlRequest} </h3>
                  <div className="flex flex-row gap-2 items-center">
                    <h3 className="text-cyan font-bold" ref={copyRef}>
                      {" "}
                      {urlResponse}{" "}
                    </h3>
                    <CopyToClipboard text={urlResponse}>
                      <button
                        className="bg-cyan md:w-auto py-2 px-6 rounded-lg text-white font-bold hover:bg-gray"
                        onClick={copyText}
                      >
                        {copySuccess ? "Copied!" : "Copy It"}
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
                {/* {error && <span className="text-red"> {error} </span>} */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShortenerComponent;
