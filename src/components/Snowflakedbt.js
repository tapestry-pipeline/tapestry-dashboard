import React, { useEffect, useState } from "react"; 
import axios from "axios";
import BarChart from "./BarChart.js"
import TableList from "./TableList.js"
import SnowflakeHistory from "./SnowflakeHistory.js"
import LoadingPage from "./LoadingPage.js"

const Snowflakedbt = () => {
  const [sourceTables, setSourceTables] = useState([]);
  const [transformedTables, setTransformedTables] = useState([]);
  const [history, setHistory] = useState([]);  

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

  useEffect(() => {
    getTables();
    getHistory();
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
     <header class="flex items-center gap-6 my-10">
        {/* <img class="inline ml-10" width={50} height={50} src={airbyte} alt="airbyteicon"></img> */}
        <h1 className="font-sans text-4xl text-midnightblue capitalize inline">Snowflake & DBT</h1>
        {/* <span class="inline-flex items-center h-6 p-6 rounded text-white text-3xl bg-green-500">{card.value}</span> */}
        <a href="" target="_blank" rel="noreferrer"><button className="inline-flex items-center px-3 py-1 rounded text-white text-xl bg-airbytepurple">Dashboard Link</button></a>
			</header>
      {/* <h1>Snowflake & dbt</h1> */}
      <div class="flex flex-wrap flex-row">
      {/* <div class="flex flex-wrap -mx-4 overflow-hidden"> */}
      {/* <div  class="my-4 px-4 w-1/2 overflow-hidden"> */}
      <div class="w-1/2 lg:w-1/2t flex-1">
        <BarChart 
          sourceTablesCount={sourceTables.length}
          transformedTablesCount={transformedTables.length}
        /> 
       </div>
       <div class="w-1/2 lg:w-1/2t flex-1 relative">
         {/* <div  class="my-4 px-4 w-1/2 overflow-hidden"> */}
          <TableList
            sourceTables={sourceTables}
            transformedTables={transformedTables}
          /> 
        </div>
      </div>
     
      <SnowflakeHistory
          history={history}
        /> 
    </>
  )
};

export default Snowflakedbt



// Snowflake - deny
// DBT - same origin
// weather - same origin
// AWS - same origin


