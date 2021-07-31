import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import apiClient from "../apiClient.js"
// <iframe title="airbyte" src={dns} frameborder="0"></iframe>
import AllCards from "./AllCards.js"
import LoadingPage from "./LoadingPage.js";
import { appendFile } from "fs";
import Logs from "./Logs.js"
import CpuGraph from "./CpuGraph.js"
 //     {/* <AllCards cards={cards}/> */}


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
      <h1>{toolTitle.toUpperCase()}</h1>
      <a href={dns} target="_blank">Airbyte Link Here</a> 
      <AllCards cards={cards}/>
    </div>
    <div class="grid grid-rows-2 grid-cols-1 gap-4 place-content-around">
      <CpuGraph toolTitle={toolTitle}/>
      <Logs toolTitle={toolTitle}/>
    </div>
     
    
    </>
  )
}

export default MonitorPage; 