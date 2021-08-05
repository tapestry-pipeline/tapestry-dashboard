import React from "react"; 

const TableList = ({sourceTables, transformedTables}) => {
  return (
    // <div class="h-96 w-full overflow-y-auto">
    <section class="m-4 bg-white border border-gray-300 border-solid rounded shadow inset-0 absolute overflow-auto">
      {/* <header class="border-b border-solid border-gray-300 p-4 text-lg font-medium sticky top-0 bg-white">
        Logs
      </header> */}
    {/* <section class="overflow-x-auto w-full"> */}
    <section class=" flex flex-row flex-wrap items-center text-center border-b border-solid border-gray-300">
      <table class="w-full table-auto">
        <thead class="border-b border-solid border-gray-300 p-4 text-lg font-medium sticky top-0 bg-white">
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal sticky top-0">
              <th class="py-3 px-6 text-left">Source Tables</th>
              <th class="py-3 px-6 text-left">Transformed Tables</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light overflow-y-auto">
          {sourceTables.map((sourceName, index) => (
            <tr key={index} class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-normal">
                <div class="flex items-center">
                  <div class="mr-2">
                      {sourceName}
                  </div>
                </div>
              </td>
              <td class="py-3 px-6 text-left whitespace-normal">
                <div class="flex items-center">
                  <div class="mr-2">
                      {transformedTables[index]}
                  </div>
                </div>
              </td>
            </tr>
          ))}
          </tbody>
      </table>
     </section>
    </section>
  )
}

export default TableList; 