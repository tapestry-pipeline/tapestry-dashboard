import React, { useEffect, useState } from "react";
import axios from "axios";
import AllCards from "./AllCards.js"
import LoadingPage from "./LoadingPage.js";
import { appendFile } from "fs";
import AirbyteLogs from "./AirbyteLogs.js"
import GrouparooLogs from "./GrouparooLogs.js"
import CpuGraph from "./CpuGraph.js"


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

  return (
    <>
      <div className="w-auto h-auto rounded col-span-full">
        <h1 className="font-sans text-4xl text-midnightblue p-5 m-5 capitalize inline">{toolTitle}</h1>
        <a href={dns} target="_blank" rel="noreferrer"><button className="hover:opacity-90 text-xl w-full xl:text-2xl xl:w-7/12 mt-4 xl:mt-11 f-f-r py-6 text-white text-bold bg-airbytepurple">{toolTitle} Dashboard Link</button></a> 
      </div>
      <div class="col-span-full">
        <AllCards cards={cards}/>
        <CpuGraph toolTitle={toolTitle}/>
      </div>
      <div class="col-span-full">
        {toolTitle === "airbyte" ? <AirbyteLogs class="col-start-1 col-span-2 row-start" toolTitle={toolTitle} /> : <GrouparooLogs class="col-span-2" toolTitle={toolTitle} /> }
      </div>
    </>
  )
}

export default MonitorPage; 