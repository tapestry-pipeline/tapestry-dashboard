import React from "react"; 

const SnowflakeHistory = ({history}) => {
  // <section class="m-4 bg-white border border-gray-300 border-solid rounded shadow inset-0 absolute overflow-y-auto">
  // {/* <div class="h-96 w-full overflow-y-auto"> */}
    // {/* <section class=" flex flex-row flex-wrap items-center text-center border-b border-solid border-gray-300"> */}
  
  return (
    
    <>
    <section class="m-4 bg-white border border-gray-300 border-solid rounded shadow inset-0 overflow-y-auto h-96">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal sticky top-0">
          { Object.keys(history[0]).map(header => (
              <th class="py-3 px-6 text-left">{header}</th>
          ))}    
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light overflow-y-auto">
          { history.map((query, index) => (
            <tr key={index} class="border-b border-gray-200 hover:bg-gray-100">
            { Object.values(query).map(value => (
              <td class="py-3 px-6 text-left whitespace-normal">
                <div class="flex items-center">
                  <div class="mr-2">
                      {value}
                  </div>
                </div>
              </td>
            ))}
            </tr>
          ))}
        </tbody>
        </table>
    </section> 
    </>
  )
}

export default SnowflakeHistory;