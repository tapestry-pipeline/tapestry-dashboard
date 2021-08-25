import React from "react";
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
        <a href="https://tapestry-pipeline.github.io/documentation/" rel="noreferrer" target="_blank">
          <button className="hover:opacity-90 text-xl py-6 px-10 mt-10 bg-midnightblue rounded text-white text-bold">
            Tapestry Documentation
          </button>
        </a>
      </div>
    </>
  );
}

export default Home;
