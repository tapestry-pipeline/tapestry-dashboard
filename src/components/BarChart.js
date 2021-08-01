import React from "react"; 
import { Bar } from "react-chartjs-2";

const BarChart = ({sourceTablesCount, transformedTablesCount}) => {
  console.log(sourceTablesCount); 
  console.log(transformedTablesCount); 
  const data = {
    labels: ['Source Tables', 'Transformed Tables'],
    datasets: [
      {
        label: '# of Tables',
        data: [sourceTablesCount, transformedTablesCount],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Snowflake Warehouse Data',
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  )
}  

export default BarChart; 
  