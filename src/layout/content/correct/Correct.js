import React, {useEffect, useState} from "react"
import moment from 'moment'
import sha256 from "js-sha256"
import { Button, DatePicker } from 'antd'
import style from "./Correct.module.css"
import TimeField from "react-simple-timefield"



export default function Correct({email, password}) {

  const { RangePicker } = DatePicker
  const [data, setData] = useState(null)
  const [responseStatus, setResponseStatus] = useState(null)
  const [workTimes, setWorkTimes] = useState([])
  const [breakTimes, setBreakTimes] = useState([])

  async function fetchTimesData(email, password, date) {

    const param = [`email=${email}`, `password=${sha256(password)}`, `date=${date}`].join("&")
    const url = `/correct/getDayInformationAndTimes?${param}`
    const response = await fetch(url)
    if(response.ok){
      setData(await response.json())
      mapWorkingTimes(data)
    }
    setResponseStatus(response.status)  
  }

  function onChange(date){
    const day = moment(date._d).format('YYYY-MM-DD')
    fetchTimesData(email, password, day)
  }

  function mapWorkingTimes(data){
    const work =  data.times.filter(time => time.pause === false)
    setWorkTimes(prevState => work)
  }

  function mapBreakTimes(data){
    return data.times.filter(time => time.pause === true)
  }

  function updateList(index, typ, newValue){
    if(typ === 'work'){
      setWorkTimes(workTimes[index].start = newValue)
    }
  }

  const updateTimesHandler = (event) =>{
    event.preventDefault()
    // fetch post data 
  }

  useEffect(() => {
    console.log(data)
    if(data !== null){
      console.log(workTimes)
      console.log(breakTimes)
    }
  }, [data])

  useEffect(() => {
    console.log(workTimes)
  }, [workTimes])


  return (
    <section id="#correct">
      <div className={style.container}>
        <h1>Antrag auf Korrektur der Arbeitszeit</h1>
        <DatePicker 
          size={'large'}
          onChange={(date) => onChange(date)}
          style={{
            textDecorationColor: 'white',
            fontSize: '1.5em',
            borderWidth: '1px',
          }}
          picker={'day'} 
          bordered={false} />
        <h1>Gespeicherte Arbeitszeiteinträge</h1>
        <div className={style.timesContainer}>
          <div className={style.workContainer}>
            <h2>Projekt</h2>
            <h2>Arbeitsbeginn</h2>
            <h2>Arbeitsende</h2>
            {(workTimes !== null) ?
              workTimes.map((time, index) => 
                <>
                  <input key={index} defaultValue={time.project.name}/>
                  <TimeField key={index} value={moment(time.start).format('HH:mm')}/>
                  <TimeField key={index} value={moment(time.end).format('HH:mm')}/>
                </>) 
                : <div/> 
            } 
          </div>
          <div className={style.breakContainer}>
            <h2>Projekt</h2>
            <h2>Pausenbeginn</h2>
            <h2>Pausenende</h2>
            {(breakTimes !== null) ?
              breakTimes.map(time => 
                <>
                  <input defaultValue={time.project.name}/>
                  <TimeField value={moment(time.start).format('HH:mm')}/>
                  <TimeField value={moment(time.end).format('HH:mm')}/>
                </>) 
                : <div/> 
            } 
          </div>
        </div>
        <Button type='primary' onClick={updateTimesHandler}> Änderung Speichern </Button>
      </div>
    </section>
  )
}
