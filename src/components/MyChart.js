import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import sha256 from "js-sha256";

function dataToDate(data){
  return data.date
}

function dataToWorkTime(data){
  return data.workTime
}


export default function MyChart(props) {
  const [dateInterval, setDateInterval] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
 

  async function fetchDateIntervalData(email, password, start, end) {
    const param = [`email=${email}`, `password=${sha256(password)}`, `start=${start}`,`end=${end}`].join("&");
    const url = `/overview/DayCompactOverviewInInterval?${param}`;
    const response = await fetch(url);
    setDateInterval(await response.json());
    setResponseStatus(response.status);  
  }

  useEffect(() => {
    fetchDateIntervalData(props.email,props.password, props.start, props.end);
  }, [props.email,props.password, props.start, props.end]);

  useEffect(() => {
    console.log(dateInterval);
  }, [dateInterval]);

  if (!dateInterval) {
    return "loading...";
  }

  return (
    
    responseStatus === 200 ?
    <Bar
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
        data={{
          labels: dateInterval.map(dataToDate),
          datasets:[{
            backgroundColor: 'rgb(112, 155, 231, 0.8)',
            borderColor: 'rgb(13, 34, 83)',
            borderWidth: 2,
            borderRadius: 20,
            data: dateInterval.map(dataToWorkTime),
          }]
        }}
      />
      : <p>Nichts</p> 
  );
}
