import React from "react";
import AllCards from "./AllCards.js"

const Airbyte = () => {
    return (
      <div className="w-full h-full rounded">
        <h1>Airbyte</h1>
        <AllCards/>
        <div class="aspect-w-16 aspect-h-10 shadow-2xl">
          <iframe title="airbyte" src="http://test-Airby-TP8W272IWYRO-1669007140.us-west-1.elb.amazonaws.com" frameborder="0"></iframe>
        </div>
      </div>
    )
}



export default Airbyte; 