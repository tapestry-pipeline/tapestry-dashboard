import React, { useEffect, useState } from "react";

import axios from "axios";

const Logs = ({ toolTitle }) => {
  const [logs, setLogs] = useState([]);

  const styles = {
    width: "400px",
    height: "400px",
    overflow: "scroll",
  }

  

  const getLogs = async (toolTitle) => {
    return await axios.get(`http://localhost:7777/api/${toolTitle}/getlogs`)
    .then(({data}) => {
      const lines = data.split('\n');
      console.log(lines)
      setLogs(lines);
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getLogs(toolTitle)
  }, []);


  return (
    <div >
      <div className="overflow-y-scroll">
        {logs.map(logLine => {
          return <p>{logLine}</p>;
        })}
      </div>
    </div>
    
  );
  
}

export default Logs;