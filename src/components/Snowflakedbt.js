import React, { useEffect, useState } from "react"; 
import axios from "axios";
import BarChart from "./BarChart.js"
import TableList from "./TableList.js"
import LoadingPage from "./LoadingPage.js"

const Snowflakedbt = () => {
  const [sourceTables, setSourceTables] = useState([]);
  const [transformedTables, setTransformedTables] = useState([]); 

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

  useEffect(() => {
    getTables()
  }, []); 

  if (transformedTables.length === 0) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }

  return (
    <>
      <h1>Snowflake & dbt</h1>
      <div class="container mx-auto px-10 space-y-10">
        <BarChart
          sourceTablesCount={sourceTables.length}
          transformedTablesCount={transformedTables.length}
        /> 
        <TableList
          sourceTables={sourceTables}
          transformedTables={transformedTables}
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


