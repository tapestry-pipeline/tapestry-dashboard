import React, { useEffect, useState } from "react";
import axios from "axios";

const GrouparooLogs = () => {
  const [logs, setLogs] = useState([]);

  const getLogs = async (title) => {
    return await axios.get(`http://localhost:7777/api/${title}/getlogs`)
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
    getLogs('grouparoo')
  }, []);


  return (
    <>
      <div class="w-1/2 lg:w-1/2t flex-1 relative">
        <section class="m-4 bg-white border border-gray-300 border-solid rounded shadow inset-0 absolute overflow-auto">
          <header class="border-b border-solid border-gray-300 p-4 text-lg font-medium sticky top-0 bg-white">
            Logs
          </header>
          <section class="overflow-x-auto w-full">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
                  <th class="py-3 px-6 text-left">When</th>
                  <th class="py-3 px-6 text-left">Message</th>
                  <th class="py-3 px-6 text-left">Topic</th>
                  <th class="py-3 px-6 text-left">Verb</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-xs font-light">
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
          </section>
        </section>
      </div>
    </>
  );
}

// {/* <div class="h-9">
//             <div class="w-full lg:w-5/6 h-full">
//               <div class="bg-white shadow-md rounded my-6"> */}
//               <div class="h-96 w-full overflow-y-auto">
//                 <table class="w-full table-auto">
                  
//                   </table>
//                 </div>
//               {/* </div>
//             </div>
//         </div> */}

export default GrouparooLogs;