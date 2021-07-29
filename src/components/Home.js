import React from "react";
import Pipeline from "./Pipeline.js"
import check from "../assets/images/check.jpeg"

const Home = () => {
    return (
      <>
        <h1>Home</h1>
        <div class="grid grid-cols-3 m-5 items-center">
          <img src={check} className="icon" width={30} height={30}></img>
          <img src={check} className="icon" width={30} height={30}></img>
          <img src={check} className="icon" width={30} height={30}></img>
          <Pipeline/>
          <Pipeline/>
          <Pipeline/>
        </div>
      </>
    );
};

export default Home