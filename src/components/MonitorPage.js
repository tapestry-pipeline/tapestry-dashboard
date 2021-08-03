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
      <div className="w-auto h-auto rounded">
        <h1 className="font-sans text-4xl text-midnightblue p-5 m-5 capitalize">{toolTitle}</h1>
        <a href={dns} target="_blank">Airbyte Link Here</a> 
      </div>
      <div class="grid grid-cols-2 gap-4 place-content-around m-5">
        <AllCards cards={cards}/>
        <CpuGraph toolTitle={toolTitle}/>
      </div>
      <div>
        {toolTitle === "airbyte" ? <AirbyteLogs class="col-span-2" toolTitle={toolTitle} /> : <GrouparooLogs class="col-span-2" toolTitle={toolTitle} /> }
      </div>
    </>
  )
}

export default MonitorPage; 