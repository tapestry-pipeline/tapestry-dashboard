import React, { useEffect, useState } from "react";

import axios from "axios";

const Logs = ({ toolTitle }) => {
  const [logs, setLogs] = useState([]);

  // const styles = {
  //   width: "1000px",
  //   height: "1000px",
  //   overflow: "scroll",
  // }

  const getDate = (line)  => {
    
  }
/*
  <th class="py-3 px-6 text-left">Client</th>
  <th class="py-3 px-6 text-center">Users</th>
  <th class="py-3 px-6 text-center">Status</th>
  <th class="py-3 px-6 text-center">Actions</th>

 */

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
    <>
      {/* <div class="h-9">
            <div class="w-full lg:w-5/6 h-full">
              <div class="bg-white shadow-md rounded my-6"> */}
              <div class="h-96 w-full overflow-y-auto">
                <table class="w-full table-auto">
                  <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal sticky top-0">
                        <th class="py-3 px-6 text-left">Logs</th>
                    </tr>
                  </thead>
                    <tbody class="text-gray-600 text-sm font-light overflow-y-auto">
                      {logs.map((logLine, index) => (
                          <tr key={index} class="border-b border-gray-200 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-normal">
                              <div class="flex items-center">
                                <div class="mr-2">
                                    {logLine}
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                  </table>
                </div>
              {/* </div>
            </div>
        </div> */}
    </>
    
  );
  
}

export default Logs;

// {logs.map(logLine => {
//   return <p>{logLine}</p>;
// })}