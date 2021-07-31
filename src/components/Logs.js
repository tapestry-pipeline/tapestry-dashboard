import React, { useEffect, useState } from "react";

import axios from "axios";

const Logs = ({ toolTitle }) => {
  const [logs, setLogs] = useState([]);

  

  const getLogs = async (toolTitle) => {
    return await axios.get(`http://localhost:7777/api/${toolTitle}/getlogs`)
    .then(({data}) => {
      console.log(data)
      setLogs(data);
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getLogs(toolTitle)
  }, []);

  return <>
    
  </>
}

export default Logs;