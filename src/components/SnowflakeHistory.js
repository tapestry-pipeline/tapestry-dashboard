import React from "react"; 

const SnowflakeHistory = ({history}) => {
  
  return (
    <div class="h-96 w-full overflow-y-auto">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal sticky top-0">
          { Object.keys(history[0]).forEach(header => {
              <th class="py-3 px-6 text-left">{header}</th>
            }
          )}    
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light overflow-y-auto">
          { history.forEach(query => {
            <tr class="border-b border-gray-200 hover:bg-gray-100">
            { Object.values(query).forEach(value => {
              <td class="py-3 px-6 text-left whitespace-normal">
                <div class="flex items-center">
                  <div class="mr-2">
                      {value}
                  </div>
                </div>
              </td>
              })
            }
            </tr>
          })}
        </tbody>
        </table>
    </div>
  )
}

export default SnowflakeHistory;