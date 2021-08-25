import React, { useEffect, useState } from "react"; 
import axios from "axios";
import BarChart from "./BarChart.js"
import TableList from "./TableList.js"
import SnowflakeHistory from "./SnowflakeHistory.js"
import LoadingPage from "./LoadingPage.js"
import dbtLogo from "../assets/images/dbt.png"; 
import snowflakeLogo from "../assets/images/snowflake.png";

const Snowflakedbt = () => {
  const [sourceTables, setSourceTables] = useState([]);
  const [transformedTables, setTransformedTables] = useState([]);
  const [history, setHistory] = useState([]);  
  const [dns, setDns] = useState('');

  const getTables = async() => {
    return await axios.get(`http://localhost:7777/api/snowflake/gettables`)
    .then(({ data }) => {
      setSourceTables(data.sourceTables.tableNames);
      setTransformedTables(data.transformedTables.tableNames); 
    })
    .catch(error => {
      console.log(error)
    })
  }

  const getHistory = async () => {
    return await axios.get(`http://localhost:7777/api/snowflake/gethistory`)
    .then(({ data }) => {
      setHistory(data); 
    })
    .catch(error => {
      console.log(error)
    })
  }

  const getDns = async() => {
    return await axios.get(`http://localhost:7777/api/snowflake/getdns`)
    .then(({data}) => {
      setDns(data.dns);
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getTables();
    getHistory();
    getDns();
  }, []); 

  if (transformedTables.length === 0 || history.length === 0) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }

  return (
    <>
     <header class="flex items-center justify-center gap-6 my-10">
        <img class="inline ml-10" width={50} height={50} src={snowflakeLogo} alt="snowflake-logo"></img>
        <h1 className="font-sans text-4xl text-midnightblue capitalize inline">Snowflake</h1>
        <a href={dns} target="_blank" rel="noreferrer"><button className="inline-flex items-center px-3 py-1 rounded text-white text-xl bg-snowflakeblue">Dashboard Link</button></a>
        <img class="inline ml-10" width={50} height={50} src={dbtLogo} alt="dbt-logo"></img>
        <h1 className="font-sans text-4xl text-midnightblue capitalize inline">DBT</h1>
        <a href="https://www.getdbt.com/signup/" target="_blank" rel="noreferrer"><button className="inline-flex items-center px-3 py-1 rounded text-white text-xl bg-dbtorange">Dashboard Link</button></a>
			</header>
      <div class="flex flex-wrap flex-row">
        <div class="w-1/2 lg:w-1/2t flex-1">
          <BarChart 
            sourceTablesCount={sourceTables.length}
            transformedTablesCount={transformedTables.length}
          /> 
        </div>
        <div class="w-1/2 lg:w-1/2t flex-1 relative">
            <TableList
              sourceTables={sourceTables}
              transformedTables={transformedTables}
            /> 
        </div>
      </div>
     
      <SnowflakeHistory history={history} /> 
    </>
  )
};

export default Snowflakedbt
