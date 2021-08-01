import React, { useEffect, useState } from "react";

import axios from "axios";

const GrouparooLogs = ({ toolTitle }) => {
  const [logs, setLogs] = useState([]);

  // const styles = {
  //   width: "1000px",
  //   height: "1000px",
  //   overflow: "scroll",
  // }

/*
  <th class="py-3 px-6 text-left">Client</th>
  <th class="py-3 px-6 text-center">Users</th>
  <th class="py-3 px-6 text-center">Status</th>
  <th class="py-3 px-6 text-center">Actions</th>

 */

  const getLogs = async (toolTitle) => {
    return await axios.get(`http://localhost:7777/api/${toolTitle}/getlogs`)
    .then(({data}) => {
      const parsedData = parseLogs(data)
      setLogs(parsedData);
    })
    .catch(error => {
      console.log(error)
    })
  }

const parseLogs = (logs) => {
  const logLines = logs.logs;
  return logLines.map(currentLog => {
    const createdAt = new Date(currentLog.createdAt).toLocaleString();
    return {
      createdAt,
      verb: currentLog.verb,
      message: currentLog.message,
      topic: currentLog.topic
    }
  });
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
                      <th class="py-3 px-6 text-left">When</th>
                      <th class="py-3 px-6 text-left">Message</th>
                      <th class="py-3 px-6 text-left">Topic</th>
                      <th class="py-3 px-6 text-left">Verb</th>
                    </tr>
                  </thead>
                    <tbody class="text-gray-600 text-sm font-light overflow-y-auto">
                      {logs.map((logLine, index) => (
                          <tr key={index} class="border-b border-gray-200 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-normal">
                              <div class="flex items-center">
                                <div class="mr-2">
                                    {logLine.createdAt}
                                </div>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-normal">
                              <div class="flex items-center">
                                <div class="mr-2">
                                    {logLine.message}
                                </div>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-normal">
                              <div class="flex items-center">
                                <div class="mr-2">
                                    {logLine.topic}
                                </div>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-normal">
                              <div class="flex items-center">
                                <div class="mr-2">
                                    {logLine.verb}
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

export default GrouparooLogs;