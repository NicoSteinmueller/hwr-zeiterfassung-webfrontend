import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import sha256 from "js-sha256";


export default function MyChart(props) {
  const [dateInterval, setDateInterval] = useState([]);
  const [responseStatus, setResponseStatus] = useState(null);
 

  async function fetchDateIntervalData(email, password, start, end) {

    const param = [`email=${email}`, `password=${sha256(password)}`, `start=${start}`,`end=${end}`].join("&");
    const url = `/overview/DayCompactOverviewInInterval?${param}`;
    const response = await fetch(url);
    if(response.ok){
      setDateInterval(await response.json());
    }
    setResponseStatus(response.status);  
  }
  
  function dataToDate(data){
    return data.date
  }
  
  function dataToWorkTime(data){
    return data.workTime
  }

  function dataToBreak(data){
    return data.break
  }

  function calculateAverage(workingTimes) {
    const sum = workingTimes.reduce((a, b) => a + b, 0);
    return workingTimes.length === 0 ? 0 : (sum / workingTimes.length);
  } 

  useEffect(() => {
    fetchDateIntervalData(props.email,props.password, props.start, props.end);
  }, [props.email,props.password, props.start, props.end]);

  useEffect(() => {
    const avgWorkingTime = Number(calculateAverage(dateInterval.map(dataToWorkTime)));
    const avgBreak = Number(calculateAverage(dateInterval.map(dataToBreak)));
    const decimalPlaces = 1;
    props.changeAvgWorkingTime(avgWorkingTime.toFixed(decimalPlaces));
    props.changeAvgBreak(avgBreak.toFixed(decimalPlaces));
  }, [dateInterval]);


  return (
    <Bar
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
        data={{
          labels: (responseStatus === 200 ? dateInterval.map(dataToDate) : []) ,
          datasets:[{
            backgroundColor: 'rgb(112, 155, 231, 0.8)',
            borderColor: 'rgb(13, 34, 83)',
            borderWidth: 2,
            borderRadius: 20,
            data: (responseStatus === 200 ? dateInterval.map(dataToWorkTime) : []) ,
          }]
        }}
      />
  );
}
