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
      Average: 1.5109026821159806,
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
      Average: 1.6840449507579114,
      Unit: 'Percent'
    },
    {
      Timestamp: '2021-07-31T01:54:00+00:00',
      Average: 1.3979696068485066,
      Unit: 'Percent'
    }
  ]

  // const testData = mockData.map(obj => obj.Average.toFixed(2))

  // function compare(a, b) {
  //   const averageA = a.Timestamp;
  //   const averageB = b.Timestamp;
  
  //   let comparison = 0;
  //   if (averageA > averageB) {
  //     comparison = 1;
  //   } else if (averageA < averageB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }
  
  // let sortedData = mockData.sort(compare);

  let sortedData = mockData.sort((a, b) => a.Timestamp - b.Timestamp); 
  const yAxisData = sortedData.map(obj => obj.Average.toFixed(2)); 
  const xAxisData = sortedData.map(obj => obj.Timestamp);
  // TRIALS BELOW HERE
  // let finalAverages = [];

  // for (let i=0; i < sortedData.length; i++) {

  // }
  // sortedData

  const mockData_trans = {
    labels: xAxisData,
    datasets: [
      {
        label: "CPU Average Usage",
        fill: false,
        lineTension: 0.25,
        backgroundColor: "rgba(49, 196, 141)",
        borderColor: "rgba(49, 196, 141)",
        borderWidth: 2,
         data: yAxisData,
      }
    ],
  };

  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
          Last 6 Hours
      </h3>
      <Line
        data={mockData_trans}
        options={{
          title: {
            display: true,
            text: "CPU Utilization",
            fontSize: 20,
            fontStyle: "normal",
            fontColor: "rgba(17, 24, 39)",
          },
          legend: {
            display: true,
            position: "right",
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Percentage Used",
                },
              },
            ],
            xAxes: [
              {
                type: 'time', 
                scaleLabel: {
                  display: true,
                  labelString: "Timestamp",
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}; 

export default CpuGraph;