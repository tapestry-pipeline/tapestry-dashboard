import React from "react";
import { Link } from "react-router-dom";
import pipeline from "../assets/images/pipeline_no_words.png"

function Home() {
  return (
    <>
      <div class="flex flex-wrap flex-row py-20 px-32">
        <div class="flex-auto mx-auto w-1/2">
          <h1 className="mx-auto text-8xl text-grouparooblue font-sans f-f-l">Ingest. Transform. Sync.</h1>
        </div>
        <div className="flex-auto px-5 m-auto w-1/2">
          <img src={pipeline} alt="pipeline" />
        </div>
      </div>

      <div class="text-center">
        <div className="f-f-r text-xl lg:text-3xl pb-20 sm:pb-0 pt-10 xl:pt-20">
          <h3 className="font-sans">Your end-to-end user data pipeline is here. Click on our documentation to get started.</h3>
        </div>
        <Link to="/documentation" >
          <button className="hover:opacity-90 text-xl py-6 px-10 mt-10 bg-midnightblue rounded text-white text-bold">
            Tapestry Documentation
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;


{/* <>
  <div className="relative w-full h-full flex-overflow grid col-span-4 grid-rows-2 gap-4">
    <div className="relative px-10 ml-5 xl:px-0 container mx-auto grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2 pt-16 lg:pt-36 gap-x-4 gap-y-4">
      <div class="order-1 col-span-2 row-span-1 col-start-1 col-end-2 mx-auto">
        <h1 className="mx-auto flex-shrink text-6xl w-1/2 xl:w-full xl:text-8xl text-grouparooblue font-sans f-f-l">Ingest. Transform. Sync.</h1>
      </div>
      <div className="col-span-2 order-2 col-start-2 col-end-4 row-span-1 flex-auto px-5 ml-15 mt-15">
          <img className="flex-shrink" src={pipeline} alt="pipeline" />
      </div>
      <div className="order-3 col-span-2 row-span-1 col-start-1 col-end-2 f-f-r text-xl lg:text-3xl pb-20 sm:pb-0 pt-10 xl:pt-20">
        <h3 className="font-sans">Your end-to-end user data pipeline is here. Click on our documentation to get started.</h3>
      </div>
      <Link to="/documention" class="order-4 col-span-2 row-span-1 col-start-2 col-end-4">
        <button className=" hover:opacity-90 text-xl w-full xl:text-2xl xl:w-7/12 mt-4 xl:mt-11 f-f-r py-6 bg-midnightblue rounded text-white text-bold">Tapestry Documentation</button>
      </Link>
    </div>
  </div>
</> */}