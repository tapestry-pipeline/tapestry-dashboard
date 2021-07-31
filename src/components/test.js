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

function compare(a, b) {
  const averageA = a.Timestamp;
  const averageB = b.Timestamp;

  let comparison = 0;
  if (averageA > averageB) {
    comparison = 1;
  } else if (averageA < averageB) {
    comparison = -1;
  }
  return comparison;
}

let sortedData = mockData.sort(compare);

// let sortedData = mockData.sort((a, b) => b.Timestamp - a.Timestamp); 
console.log(sortedData); 
const yAxisData = sortedData.map(obj => obj.Average.toFixed(2)); 
const xAxisData = sortedData.map(obj => obj.Timestamp);