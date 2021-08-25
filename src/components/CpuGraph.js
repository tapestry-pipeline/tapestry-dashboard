import React, { useEffect, useState } from "react"; 
import axios from "axios";
import { Line } from "react-chartjs-2";

const CpuGraph = ({ toolTitle }) => {
  const [cpu, setCpu] = useState([]); 

  const getCPU = async (title) => {
    return await axios.get(`http://localhost:7777/api/${title}/cpu`)
      .then(({ data }) => {
        setCpu(data); 
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getCPU(toolTitle); 
  }); 

  if (cpu.length === 0) {
    return (
      <div></div>
    )
  }

  const sortedData = cpu.sort((a, b) => Date.parse(a.Timestamp) - Date.parse(b.Timestamp)); 
  const yAxisData = sortedData.map(obj => obj.Average.toFixed(2));

  const xAxisData = sortedData.map(obj => {
    const currentHours = (new Date().getTime()/3600000);
    const hours = (new Date(obj.Timestamp).getTime()/3600000); 
    return (currentHours - hours).toFixed(2); 
  })

  const backgroundColor = toolTitle === 'airbyte' ? '#9579fd' : '#29abe2';
  const borderColor = toolTitle === 'airbyte' ? 'r#9579fd' : 'r#29abe2';

  const transformedData = {
    labels: xAxisData,
    datasets: [
      {
        label: "CPU Average Usage",
        fill: true,
        lineTension: 0.25,
        backgroundColor,
        borderColor,
        borderWidth: 2,
        data: yAxisData,
      }
    ],
  }

  const chartOptions = { 
    plugins: {
      title: {
        display: false,
        text: "Over Last 6 Hours"
      }, 
      legend: {
        display: false,
        position: 'right'
      }
    }, 
    scales: {
      y: {
        title: {
          display: true,
          text: 'Percentage Used'
        }, 
        min: 0,
        max: 100
      },
      x: {
        title: {
          display: true, 
          text: 'Hours Ago' 
        }
      },      
    }
  }

  return (
    <div class="w-1/2 lg:w-1/2t flex-1">
      <section class="m-4 bg-white border border-gray-300 border-solid rounded shadow">
        <header class="border-b border-solid border-gray-300 p-4 text-lg font-medium">
					CPU Utilization
				</header>
        <section class="overflow-x-auto w-full">
          <Line
            data={transformedData}
            options={chartOptions}
          />
        </section>
      </section>
    </div>
  )
}; 

export default CpuGraph;
