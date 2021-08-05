import React, { useEffect, useState } from "react";
import axios from "axios";
import AllCards from "./AllCards.js"
import LoadingPage from "./LoadingPage.js";
import { appendFile } from "fs";
import AirbyteLogs from "./AirbyteLogs.js"
import GrouparooLogs from "./GrouparooLogs.js"
import CpuGraph from "./CpuGraph.js"
import airbyte from "../assets/images/airbyte.png";


const MonitorPage = ({ toolTitle }) => {
  const [dns, setDns] = useState('');
  const [cards, setCards] = useState([]);

  let buttonLinkstyles = "hover:opacity-90 text-xl w-full xl:text-2xl xl:w-7/12 mt-4 xl:mt-11 f-f-r py-6 text-white text-bold";

// http://test-Airby-TP8W272IWYRO-1669007140.us-west-1.elb.amazonaws.com
  const getDNS = async (title) => {
    return await axios.get(`http://localhost:7777/api/${title}/getdns`)
      .then(({data}) => {
        setDns(data.dns);
      })
      .catch(error => {
        console.log(error)
      })
  };

  const getCards = async (title) => {
    return await axios.get(`http://localhost:7777/api/${toolTitle}/getcards`)
    .then(({data}) => {
      setCards(data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getDNS(toolTitle);
    getCards(toolTitle);
  }, []);

  // const dns = getDNS(toolTitle);
  // const cards = getCards(toolTitle);
  
  if (!dns || cards.length === 0) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }
  // <div class="col-start-1 row-start-2 col-span-2 flex flex-row ">
  // </div>

  // <a href={dns} target="_blank" rel="noreferrer"><button className="hover:opacity-90 text-xl w-full xl:text-2xl xl:w-7/12 mt-4 xl:mt-11 f-f-r py-6 text-white text-bold bg-airbytepurple">{toolTitle} Dashboard Link</button></a>
  return (
    <>
      <header class="flex items-center gap-6 my-10">
        <img class="inline ml-10" width={50} height={50} src={airbyte} alt="airbyteicon"></img>
        <h1 className="font-sans text-4xl text-midnightblue capitalize inline">{toolTitle}</h1>
        {/* <span class="inline-flex items-center h-6 p-6 rounded text-white text-3xl bg-green-500">{card.value}</span> */}
        <a href={dns} target="_blank" rel="noreferrer"><button className="inline-flex items-center px-3 py-1 rounded text-white text-xl bg-airbytepurple">Dashboard Link</button></a>
			</header>
      <AllCards cards={cards}/>
      
      <div class="flex flex-wrap flex-row">
        <CpuGraph toolTitle={toolTitle}/>
        {toolTitle === "airbyte" ? <AirbyteLogs toolTitle={toolTitle} /> : <GrouparooLogs toolTitle={toolTitle} /> }
      </div>
    </>
  )
}

export default MonitorPage; 