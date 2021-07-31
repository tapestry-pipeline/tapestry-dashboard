import React, { useEffect, useState } from "react"; 
import axios from "axios";
import { Line } from "react-chartjs-2";


const CpuGraph = ({ toolTitle }) => {
  const [cpu, setCpu] = useState([]); 

  const getCPU = async (title) => {
    return await axios.get(`http://localhost:7777/api/${title}/cpu`)
      .then(({ data }) => {
        console.log(data)
        setCpu(data.cpuUtlization); 
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getCPU(toolTitle); 
  }, []); 

  const mockData = [
    {
      Timestamp: '2021-07-30T22:24:00+00:00',
      Average: 2.5109026821159806,
      Unit: 'Percent'
    },
    {
      Timestamp: '2021-07-30T15:54:00+00:00',
      Average: 1.2849325429903327,
      Unit: 'Percent'
    },
    {
      Timestamp: '2021-07-30T20:39:00+00:00',
      Average: 1.3748644034753092,
      Unit: 'Percent'
    },
    {
      Timestamp: '2021-07-30T18:54:00+00:00',
      Average: 1.3597315772048206,
      Unit: 'Percent'
    },
    {
      Timestamp: '2021-07-31T03:09:00+00:00',
      Average: 1.4365279637663382,
      Unit: 'Percent'
    },
    {
      Timestamp: '2021-07-30T16:24:00+00:00',
      Average: 1.2766015251150014,
      Unit: 'Percent'
    },
    {
      Timestamp: '2021-07-30T22:54:00+00:00',
      Average: 1.4281436966877536,
      Unit: 'Percent'
    },
    {
      Timestamp: '2021-07-30T19:24:00+00:00',
      Average: 1.3879158642407128,
      Unit: 'Percent'
    },
    {
      Timestamp: '2021-07-30T21:09:00+00:00',
      Average: 4.6840449507579114,
      Unit: 'Percent'
    },
    {
      Timestamp: '2021-07-31T01:54:00+00:00',
      Average: 1.3979696068485066,
      Unit: 'Percent'
    }
  ]

  const sortedData = mockData.sort((a, b) => Date.parse(a.Timestamp) - Date.parse(b.Timestamp)); 

  const yAxisData = sortedData.map(obj => obj.Average.toFixed(2)); 
  const xAxisData = sortedData.map(obj => {
    const currentHours = (new Date().getTime()/3600000).toFixed(0);
    const hours = (new Date(obj.Timestamp).getTime()/3600000).toFixed(0); 
    return currentHours - hours; 
  })


  const mockData_trans = {
    labels: xAxisData,
    datasets: [
      {
        label: "CPU Average Usage",
        fill: true,
        lineTension: 0.25,
        backgroundColor: "rgba(49, 196, 141)",
        borderColor: "rgba(49, 196, 141)",
        borderWidth: 2,
        data: yAxisData,
      }
    ],
  };

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
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
          CPU Utilization
      </h3>
      <Line
        data={mockData_trans}
        options={chartOptions}
      />
    </div>
  );
}; 

export default CpuGraph;
