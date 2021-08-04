import React, { useEffect, useState } from "react";
import axios from "axios";
import AllCards from "./AllCards.js"
import LoadingPage from "./LoadingPage.js";
import GrouparooLogs from "./GrouparooLogs.js";
import CpuGraph from "./CpuGraph.js";
import grouparooLogo from "../assets/images/grouparoo.png";

const GrouparooPage = () => {
  const [dns, setDns] = useState('');
  const [cards, setCards] = useState([]);

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
    return await axios.get(`http://localhost:7777/api/${title}/getcards`)
    .then(({data}) => {
      setCards(data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getDNS('grouparoo');
    getCards('grouparoo');
  }, []);
  
  if (!dns || cards.length === 0) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }
  
  return (
    <>
      <header class="flex items-center gap-6 my-10">
        <img class="inline ml-10" width={50} height={50} src={grouparooLogo} alt="grouparoo-logo"></img>
        <h1 className="font-sans text-4xl text-midnightblue capitalize inline">Grouparoo</h1>
        <a href={dns} target="_blank" rel="noreferrer"><button className="inline-flex items-center px-3 py-1 rounded text-white text-xl bg-grouparooblue">Dashboard Link</button></a>
			</header>

      <AllCards cards={cards}/>
      
      <div class="flex flex-wrap flex-row">
        <CpuGraph toolTitle={'grouparoo'} />
        <GrouparooLogs />
      </div>
    </>
  )
}

export default GrouparooPage;