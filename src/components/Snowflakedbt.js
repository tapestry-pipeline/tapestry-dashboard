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
      <h1>Snowflake & dbt</h1>
      <div class="flex flex-wrap -mx-4 overflow-hidden">
      <div  class="my-4 px-4 w-1/2 overflow-hidden">
        <BarChart 
          sourceTablesCount={sourceTables.length}
          transformedTablesCount={transformedTables.length}
        /> 
       </div>
         <div  class="my-4 px-4 w-1/2 overflow-hidden">
          <TableList
            sourceTables={sourceTables}
            transformedTables={transformedTables}
          /> 
        </div>
      </div>
      <div>
      <SnowflakeHistory
          history={history}
        /> 
      </div>
    </>
  )
};

export default Snowflakedbt



// Snowflake - deny
// DBT - same origin
// weather - same origin
// AWS - same origin


