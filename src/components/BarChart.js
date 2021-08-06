import React from "react"; 
import { Bar } from "react-chartjs-2";

const BarChart = ({sourceTablesCount, transformedTablesCount}) => {
  const data = {
    labels: ['Source Tables', 'Transformed Tables'],
    datasets: [
      {
        label: '# of Tables',
        data: [sourceTablesCount, transformedTablesCount],
        backgroundColor: [
          'rgba(50, 184, 234, 0.2)',
          'rgba(255, 105, 73, 0.2)',
        ],
        borderColor: [
          'rgba(50, 184, 234, 1)',
          'rgba(255, 105, 73, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
  };

  return (
    <section class="m-4 bg-white border border-gray-300 border-solid rounded shadow">
      <header class="border-b border-solid border-gray-300 p-4 text-lg font-medium">
        Snowflake Data Warehouse
      </header>
      <Bar class="" data={data} options={options} />
   </section>
  )
}  

export default BarChart; 
  