import React from "react";
import tapestry_t from "../assets/images/tapestry_graphic_color.png"

const LoadingPage = () => {
  return (
    <div class="grid justify-items-center py-10 my-10">
      <img className="animate-pulse place-content-center h-52 w-52 mx-5 my-5" src={tapestry_t} alt="logo"></img>
      <p className="font-sans text-lg">Please wait while your page is loading...</p>
    </div>
  );
}

export default LoadingPage;