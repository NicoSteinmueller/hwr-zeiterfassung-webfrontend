import React, {useEffect, useState} from "react"
import moment from 'moment'
import sha256 from "js-sha256"
import { Button, DatePicker } from 'antd'
import style from "./Correct.module.css"
import TimeField from "react-simple-timefield"
import Select from 'react-select'



export default function Correct({email, password}) {

  const { RangePicker } = DatePicker
  const [dayAndTimesDataJSON, setDayAndTimesDataJSON] = useState(null)
  const [projectDataJSON, setProjectDataJSON] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [workTimes, setWorkTimes] = useState([])
  const [breakTimes, setBreakTimes] = useState([])

  async function fetchTimesData() {
    const param = [`email=${email}`, `password=${sha256(password)}`, `date=${selectedDate}`].join("&")
    const url = `/correct/getDayInformationAndTimes?${param}`
    const response = await fetch(url)

    if(response.ok){
      setDayAndTimesDataJSON(await response.json())
    }
  }

  async function fetchProjectData() {
    const param = [`email=${email}`, `password=${sha256(password)}`].join("&")
    const url = `/human/getAllProjects?${param}`
    const response = await fetch(url)
    
    if(response.ok){
      setProjectDataJSON(await response.json())
    }
  }

  function onChange(date){
    setSelectedDate(moment(date._d).format('YYYY-MM-DD'))
  }

  function onchangeSelectProjectHandler(index, newProject, typ){
    if(typ === 'work'){
      let tempArray = [...workTimes]
      tempArray[index].project = newProject
      setWorkTimes(tempArray)
    }else if(typ === 'break'){
      let tempArray = [...breakTimes]
      tempArray[index].project = newProject
      setBreakTimes(tempArray)
    }else{
      throw 'IllegalStateException'
    }
  }

  function onChangeTimeFieldHandler(index, newValue, oldValue, type, timing){
    const ISONewValue = moment(oldValue).format('YYYY-MM-DDT') + newValue + ':00'  
    
    if(type === 'work'){
      let tempArray = [...workTimes]

      if(timing === 'start'){
        tempArray[index].start = ISONewValue
        setWorkTimes(tempArray)
      }else if(timing === 'end'){
        tempArray[index].end = ISONewValue
        setWorkTimes(tempArray)
      }else{
        throw 'IllegalStateException'
      }
    }else if(type === 'break'){
      let tempArray = [...breakTimes]

      if(timing === 'start'){
        tempArray[index].start = ISONewValue
        setBreakTimes(tempArray)
      }else if(timing === 'end'){
        tempArray[index].end = ISONewValue
        setBreakTimes(tempArray)
      }else{
        throw 'IllegalStateException'
      }
    }else{
      throw 'IllegalStateException'
    }
  }

  async function updateTimesHandler(){
    const postTimes = workTimes.concat(breakTimes)
    const date = selectedDate
    const times = postTimes

    const param = [`email=${email}`, `password=${sha256(password)}` ].join("&")
    const url = `/correct/times?${param}`

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({date, times})
    })
    
  }

  useEffect(() => {
    console.log(projectDataJSON)
  },[projectDataJSON])

  useEffect(() => {
    fetchProjectData()
  }, [email, password])

  useEffect(() => {
    fetchTimesData()
  }, [selectedDate])

  useEffect(() => {
    if(dayAndTimesDataJSON !== null){
      setWorkTimes(dayAndTimesDataJSON.times.filter(time => !time.pause))
      setBreakTimes(dayAndTimesDataJSON.times.filter(time => time.pause))
    }else{
      setWorkTimes([])
      setBreakTimes([])
    }
  }, [dayAndTimesDataJSON])
  
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
                  <Select 
                    defaultValue={projectDataJSON.map(project => {
                      const newArray = {}
                      newArray.value = project
                      newArray.label = project.name
                      return newArray
                      })
                      .filter(value => value.label === time.project.name)}
                    options={projectDataJSON.map(project => {
                      const newArray = {}
                      newArray.value = project
                      newArray.label = project.name
                      return newArray
                      })}
                    styles={
                      {option: (provided, state) => ({
                        ...provided,
                        "&:hover": {
                          backgroundColor: 'var(--secondaryBlue)'
                        }
                        }),
                        control: (provided) => ({
                          ...provided,
                        }),
                      singleValue: (provided, state) => ({
                         color: 'white',
                         fontSize: 'bold',                      
                        })
                      }
                    }
                    onChange={(newValue, event) => onchangeSelectProjectHandler(index, newValue.value, 'work')}
                  />
                  <TimeField key={index} value={moment(time.start).format('HH:mm')} onChange={(event, value) => onChangeTimeFieldHandler(index, value, time.start, 'work', 'start')}/>
                  <TimeField key={index} value={moment(time.end).format('HH:mm')} onChange={(event, value) => onChangeTimeFieldHandler(index, value, time.start, 'work', 'end')}/>
                </>) 
                : <div/> 
            } 
          </div>
          <div className={style.breakContainer}>
            <h2>Projekt</h2>
            <h2>Pausenbeginn</h2>
            <h2>Pausenende</h2>
            {(breakTimes !== null) ?
              breakTimes.map((time, index) => 
                <>
                   <Select 
                    defaultValue={projectDataJSON.map(project => {
                      const newArray = {}
                      newArray.value = project
                      newArray.label = project.name
                      return newArray
                      })
                      .filter(value => value.label === time.project.name)}
                    options={projectDataJSON.map(project => {
                      const newArray = {}
                      newArray.value = project
                      newArray.label = project.name
                      return newArray
                      })}
                    styles={
                      {option: (provided, state) => ({
                        ...provided,
                        "&:hover": {
                          backgroundColor: 'var(--secondaryBlue)'
                        }
                        }),
                        control: (provided) => ({
                          ...provided,
                        }),
                      singleValue: (provided, state) => ({
                         color: 'white',
                         fontSize: 'bold',                      
                        })
                      }
                    }
                    onChange={(newValue, event) => onchangeSelectProjectHandler(index, newValue.value, 'break')}
                  />
                  <TimeField key={index} value={moment(time.start).format('HH:mm')}onChange={(event, value) => onChangeTimeFieldHandler(index, value, time.start, 'break', 'start')}/>
                  <TimeField key={index} value={moment(time.end).format('HH:mm')}onChange={(event, value) => onChangeTimeFieldHandler(index, value, time.start, 'break', 'end')}/>
                </>) 
                : <div/> 
            } 
          </div>
        </div>
        <Button type='primary' onClick={(event) => updateTimesHandler()}> Änderung Speichern </Button>
      </div>
    </section>
  )
}
