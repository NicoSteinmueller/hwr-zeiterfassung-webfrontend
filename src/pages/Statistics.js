import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import { DatePicker, Space } from 'antd';
import classes from "./Statistics.module.css";
import MyChart from "../components/MyChart";


export default function Statistics({email, password}) {

  const { RangePicker } = DatePicker;
  const [datePicker, setDatePicker] = useState('week');
  const [timeInterval, setTimeInterval] = useState({start: prettyDate(getThisSunday(new Date())) , end: prettyDate(getThisSaturday(new Date()))})

  function getThisSaturday(day) {
    let weekDay = day.getDay();
    let saturday = day;

    if ( weekDay < 6) {
      saturday.setDate(day.getDate() + (6 - weekDay));
      return saturday;
    }

    return saturday;
  }

  function getThisSunday(day) {
    let weekDay = day.getDay();
    let sunday = day;

    if( weekDay > 0){
      sunday.setDate(day.getDate() - weekDay );
      return sunday;
    }

    return sunday;
  }
  
  function getFirstDayThisMonth(day) {
    return new Date(day.getFullYear(), day.getMonth(), 1)
  }

  function getLastDayThisMonth(day) {
    return new Date(day.getFullYear(), day.getMonth() + 1, 0);
  }

  function getFirstDayThisYear(day) {
    return new Date(day.getFullYear(), 0, 1);
  }

  function getLastDayThisYear(day) {
    return new Date(day.getFullYear(), 11, 31);
  }

  function prettyDate(date){
    return date.toISOString().substring(0,10);
  }

  function handleClickWeek(event) {
    setDatePicker('week');
  }

  function handleClickMonth(event) {
    setDatePicker('month');
  }

  function handleClickYear(event) {
    setDatePicker('year');
  }

  function handleClickMissing(event) {
    setDatePicker('week');
  }

  function onChange(date, dateString){
      if(datePicker === 'week'){
        setTimeInterval({start: prettyDate(getThisSunday(date._d)), end: prettyDate(getThisSaturday(date._d)) })
      }

      if(datePicker === 'month'){
        const startday = prettyDate(getFirstDayThisMonth(date._d));
        setTimeInterval({start: startday, end: prettyDate(getLastDayThisMonth(date._d)) })
      }

      if(datePicker === 'year'){
        setTimeInterval({start: prettyDate(getFirstDayThisYear(date._d)), end: prettyDate(getLastDayThisYear(date._d)) })
      }

      if(datePicker === 'missing'){
          //TODO
      }
  }

  useEffect(() => {
    console.log(timeInterval);
  }, [timeInterval]);

 


  return (
    <section className={classes.statistics} id="#statistics">
      <div className={classes.header}>
        <h1>Statistik</h1>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.infoBox}>
          <h5> Arbeitszeitkonto </h5>
          <p>WiP</p>
        </div>
        <div className={classes.infoBox}>
          <h5> Urlaubstage gesamt </h5>
          <p>WiP</p>
        </div>
        <div className={classes.infoBox}>
          <h5> Urlaubstage Übertrag </h5>
          <p>WiP</p>
        </div>
        <div className={classes.infoBox}>
          <h5> Urlaubstage genommen</h5>
          <p>WiP</p>
        </div>
        <div className={classes.infoBox}>
          <h5> Urlaubstage geplant </h5>
          <p>WiP</p>
        </div>
        <div className={classes.infoBox}>
          <h5> Urlaubstage Rest </h5>
          <p>WiP</p>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <NavLink 
        className={classes.btn} 
        to="/Week" 
        onClick={ handleClickWeek }
        style={({ isActive }) => ({
          color: isActive ? "var(--primaryBlue)" : "white",
          background: isActive ? "white" : "var(--primaryBlue)",
        })}>Wochenübersicht</NavLink>

        <NavLink 
        className={classes.btn} 
        to="/Month" 
        onClick={ handleClickMonth }

        style={({ isActive }) => ({
          color: isActive ? "var(--primaryBlue)" : "white",
          background: isActive ? "white" : "var(--primaryBlue)",
        })}>Monatsübersicht</NavLink>

        <NavLink 
        className={classes.btn} 
        to="/Year" 
        onClick={ handleClickYear }

        style={({ isActive }) => ({
          color: isActive ? "var(--primaryBlue)" : "white",
          background: isActive ? "white" : "var(--primaryBlue)",
        })}>Jahresübersicht</NavLink>

        <NavLink 
        className={classes.btn} 
        to="/Missing" 
        onClick={ handleClickMissing }
        style={({ isActive }) => ({
          color: isActive ? "var(--primaryBlue)" : "white",
          background: isActive ? "white" : "var(--primaryBlue)",
        })}>Abwesenheitübersicht</NavLink>

      </div>
      <div className={classes.whiteBox}>
        <div className={classes.datePicker}>
          <DatePicker 
            size={'large'}
            onChange={(date, dateString) => onChange(date, dateString)}
            style={{
              textDecorationColor: 'white',
              fontSize: '1.5em',
            }}
            picker={datePicker} 
            bordered={false} />     
        </div>   
        <div className={classes.caBox1}>
          <h1>Value</h1>
          <h5>Ø Arbeitszeit/Woche</h5>
        </div>
        <div className={classes.caBox2}>
          <h1>Value</h1>
          <h5>Ø Pausenzeit/Woche</h5>
        </div>
        <div className={classes.chart}>
          <Routes>
            <Route path="/" exact element={<MyChart email={email} password={password} start={timeInterval.start} end={timeInterval.end}/>}/>
            <Route path="/Week" element={<MyChart email={email} password={password} start={timeInterval.start} end={timeInterval.end}/>}/>
            <Route path="/Month" element={<MyChart email={email} password={password} start={timeInterval.start} end={timeInterval.end}/>}/>
            <Route path="/Year" element={<MyChart email={email} password={password} start={timeInterval.start} end={timeInterval.end}/>}/>
            <Route path="/Missing" element={<MyChart email={email} password={password} start={'2022-04-01'} end={'2022-04-30'}/>}/>
          </Routes>
        </div>
      </div>

    </section>
  );
}





