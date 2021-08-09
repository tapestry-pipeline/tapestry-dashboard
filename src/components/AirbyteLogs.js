import React, { useEffect, useState } from "react";

import axios from "axios";

const AirbyteLogs = ({ toolTitle }) => {
  const [logs, setLogs] = useState([]);

  const getLogs = async (title) => {
    return await axios.get(`http://localhost:7777/api/${title}/getlogs`)
      .then(({data}) => {
        const lines = data.split('\n');
        setLogs(lines);
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getLogs('airbyte')
  }, []);

  return (
    <div class="w-1/2 lg:w-1/2t flex-1 relative">
      <section class="m-4 bg-white border border-gray-300 border-solid rounded shadow inset-0 absolute overflow-auto">
        <header class="border-b border-solid border-gray-300 p-4 text-lg font-medium sticky top-0 bg-white">
          Logs
        </header>
        <section class="overflow-x-auto w-full">
          <table class="w-full">
            <tbody class="text-gray-600 text-sm">
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
        </section>
      </section>
    </div>
  );
}

export default AirbyteLogs;