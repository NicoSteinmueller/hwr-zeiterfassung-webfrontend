import React, { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from "react-router-dom"
import { DatePicker } from 'antd'
import moment from 'moment'
import style from "./Statistics.module.css"
import MyChart from "./chart/MyChart"


export default function Statistics({email, password}) {

  const { RangePicker } = DatePicker
  const [datePicker, setDatePicker] = useState('week')
  const [timeInterval, setTimeInterval] = useState({start: moment().startOf('week').format('YYYY-MM-DD') , end: moment().endOf('week').format('YYYY-MM-DD')})
  const [avgWorkingTime, setAvgWorkingTime] = useState('Value')
  const [avgBreak, setAvgBreak] = useState('Value')


  function handleClickWeek(event) {
    setDatePicker('week')
  }

  function handleClickMonth(event) {
    setDatePicker('month')
  }

  function handleClickYear(event) {
    setDatePicker('year')
  }

  function handleClickMissing(event) {
    setDatePicker('week')
  }

  function onChange(date){
    setTimeInterval({start: moment(date._d).startOf(datePicker).format('YYYY-MM-DD'), 
      end:  moment(date._d).endOf(datePicker).format('YYYY-MM-DD')})
  }

  return (
    <section className={style.statistics} id="#statistics">
      <div className={style.header}>
        <h1>Statistik</h1>
      </div>
      <div className={style.infoContainer}>
        <div className={style.infoBox}>
          <h5> Arbeitszeitkonto </h5>
          <p>WiP</p>
        </div>
        <div className={style.infoBox}>
          <h5> Urlaubstage gesamt </h5>
          <p>WiP</p>
        </div>
        <div className={style.infoBox}>
          <h5> Urlaubstage Übertrag </h5>
          <p>WiP</p>
        </div>
        <div className={style.infoBox}>
          <h5> Urlaubstage genommen</h5>
          <p>WiP</p>
        </div>
        <div className={style.infoBox}>
          <h5> Urlaubstage geplant </h5>
          <p>WiP</p>
        </div>
        <div className={style.infoBox}>
          <h5> Urlaubstage Rest </h5>
          <p>WiP</p>
        </div>
      </div>
      <div className={style.btnContainer}>
        <NavLink 
        className={style.btn} 
        to="/Week" 
        onClick={ handleClickWeek }
        style={({ isActive }) => ({
          color: isActive ? "var(--primaryBlue)" : "white",
          background: isActive ? "white" : "var(--primaryBlue)",
        })}>Wochenübersicht</NavLink>

        <NavLink 
        className={style.btn} 
        to="/Month" 
        onClick={ handleClickMonth }

        style={({ isActive }) => ({
          color: isActive ? "var(--primaryBlue)" : "white",
          background: isActive ? "white" : "var(--primaryBlue)",
        })}>Monatsübersicht</NavLink>

        <NavLink 
        className={style.btn} 
        to="/Year" 
        onClick={ handleClickYear }

        style={({ isActive }) => ({
          color: isActive ? "var(--primaryBlue)" : "white",
          background: isActive ? "white" : "var(--primaryBlue)",
        })}>Jahresübersicht</NavLink>

        <NavLink 
        className={style.btn} 
        to="/Missing" 
        onClick={ handleClickMissing }
        style={({ isActive }) => ({
          color: isActive ? "var(--primaryBlue)" : "white",
          background: isActive ? "white" : "var(--primaryBlue)",
        })}>Abwesenheitübersicht</NavLink>

      </div>
      <div className={style.whiteBox}>
        <div className={style.datePicker}>
          <DatePicker 
            size={'large'}
            onChange={(date) => onChange(date)}
            style={{
              textDecorationColor: 'white',
              fontSize: '1.5em',
            }}
            picker={datePicker} 
            bordered={false} />     
        </div>   
        <div className={style.caBox1}>
          <h1>{avgWorkingTime}</h1>
          <h5>Ø Arbeitszeit/Woche</h5>
        </div>
        <div className={style.caBox2}>
          <h1>{avgBreak}</h1>
          <h5>Ø Pausenzeit/Woche</h5>
        </div>
        <div className={style.chart}>
          <Routes>
            <Route path="/" exact element={
              <MyChart 
                changeAvgWorkingTime={newAvgWorkingTime => setAvgWorkingTime(newAvgWorkingTime)} 
                changeAvgBreak={newAvgBreak => setAvgBreak(newAvgBreak)}
                email={email} 
                password={password} 
                start={timeInterval.start} 
                end={timeInterval.end}/>}/>
            <Route path="/Week" element={
              <MyChart 
                changeAvgWorkingTime={newAvgWorkingTime => setAvgWorkingTime(newAvgWorkingTime)}
                changeAvgBreak={newAvgBreak => setAvgBreak(newAvgBreak)}
                email={email} 
                password={password} 
                start={timeInterval.start} 
                end={timeInterval.end}/>}/>
            <Route path="/Month" element={
              <MyChart 
                changeAvgWorkingTime={newAvgWorkingTime => setAvgWorkingTime(newAvgWorkingTime)}
                changeAvgBreak={newAvgBreak => setAvgBreak(newAvgBreak)}
                email={email} 
                password={password} 
                start={timeInterval.start} 
                end={timeInterval.end}/>}/>
            <Route path="/Year" element={
              <MyChart 
                changeAvgWorkingTime={newAvgWorkingTime => setAvgWorkingTime(newAvgWorkingTime)}
                changeAvgBreak={newAvgBreak => setAvgBreak(newAvgBreak)}
                email={email} 
                password={password} 
                start={timeInterval.start} 
                end={timeInterval.end}/>}/>
            <Route path="/Missing" element={
              <MyChart 
                changeAvgWorkingTime={newAvgWorkingTime => setAvgWorkingTime(newAvgWorkingTime)}
                changeAvgBreak={newAvgBreak => setAvgBreak(newAvgBreak)}
                email={email} 
                password={password} 
                start={null} 
                end={null}/>}/>
          </Routes>
        </div>
      </div>

    </section>
  )
}





