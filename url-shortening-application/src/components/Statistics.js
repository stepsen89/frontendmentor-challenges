import React from "react";

function StatisticsComponent() {
  return (
    <div className="h-4/6 pb-48 md:pt-24 pt-12 bg-gray">
      <div className="container">
        <div className="flex flex-col md:items-center ">
          <div className="flex justify-center flex-col gap-4 items-center p-4 my-8 md:mb-24 md:w-1/2">
            <h1 className="text-2xl md:text-5xl text-center font-bold ">
              {" "}
              Advanced Statistics
            </h1>
            <p className="text-center text-grayish-violet font-bold text-md text-dark-violet md:text-lg">
              {" "}
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-16 md:px-12">
            <div className="bg-white w-5/6 md:w-2/3 mx-auto py-16 px-4 md:px-8 relative rounded-lg">
              <div className="bg-dark-violet rounded-full p-6 absolute -top-8 left-1/3 md:left-8">
                <img
                  src="./images/icon-brand-recognition.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-center text-xl font-bold pb-6 md:text-left">
                {" "}
                Brand Recognition{" "}
              </h3>
              <p className="text-center text-md text-gray md:text-left">
                {" "}
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content{" "}
              </p>
            </div>
            <div className="bg-white w-5/6 md:w-auto mx-auto py-16 px-4 md:px-8 relative rounded-lg md:top-8">
              <div className="bg-dark-violet rounded-full p-6 absolute -top-8 left-1/3 md:left-8">
                <img
                  src="./images/icon-detailed-records.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-center text-xl font-bold pb-6 md:text-left">
                {" "}
                Detailed Records
              </h3>
              <p className="text-center text-md text-gray md:text-left">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="bg-white w-5/6 md:w-auto mx-auto py-16 px-4 md:px-8 relative rounded-lg md:top-16">
              <div className="bg-dark-violet rounded-full p-6 absolute -top-8 left-1/3 md:left-8">
                <img
                  src="./images/icon-fully-customizable.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-center text-xl font-bold pb-6 md:text-left">
                Fully Customizable
              </h3>
              <p className="text-center text-md text-gray md:text-left">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsComponent;
