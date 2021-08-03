import React from "react";
import tapestry_t from "../assets/images/tapestry_graphic_color.png"

const LoadingPage = () => {
  return (
    <div class="grid justify-items-center py-10 my-10">
      <img className="animate-pulse place-content-center h-20 w-20 mx-5 my-5" src={tapestry_t} alt="logo"></img>
      <p className="font-sans text-lg">Please wait while your page is loading...</p>
      {/* <span className="relative inline-flex rounded-xl shadow-lg">
        <span className="flex absolute h-5 w-5 top-0 right-0 -mt-1 -mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-purple-500"></span>
        </span>
      </span> */}
    </div>
  );
}

export default LoadingPage;