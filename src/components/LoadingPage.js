import React from "react";

const LoadingPage = () => {
  return (
    <div class="grid">
      <h1>TAP LOGO</h1>
      <p>Please wait while your page is loading...</p>
      <span className="relative inline-flex rounded-xl shadow-lg">
        <span className="flex absolute h-5 w-5 top-0 right-0 -mt-1 -mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-purple-500"></span>
        </span>
      </span>
    </div>
  );
}

export default LoadingPage;