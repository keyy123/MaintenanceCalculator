import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Calculator() {
  //global variables
  const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
  const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY




  const baseURL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/weigh-in%20records?sort%5B0%5D%5Bfield%5D=days\ `
  
  
  
  
  let Arr2 = []
  let Arr3 = []
  
 
  //states
  const [data, setData] = useState([])
  const [newArr, setNewArr] = useState([])
  const [toggle, setToggle] = useState(false)
  const [toggleFetch, setToggleFetch] = useState(false)
  const [sum, setSum] = useState(0)
  const [day, setDay] = useState(0)
  const [weight, setWeight] = useState(0)
 

  //functions

  function sumKcal(x) {
    x?.map((log) => {
      setNewArr((newArr) => [...newArr, log.fields.kcal])
     
    })
  }

  function highestDay(x) {
    x?.map((log) => {
      Arr2.push(log.fields.days)
     
    }
    )
    setDay(Math.max(...Arr2))
  }

  function weightChange(x) {
    x?.map((log) => {
      Arr3.push(log.fields.lbs)
    })
    setWeight(Arr3[0] - (Arr3[Arr3.length - 1]))
  }

  function sortDay(x) {
    x?.map((log) => {
      Arr2.push(log.fields.days)
    })

  }
  
  
  
  
  //UseEffects

  useEffect(() => {
    async function apiCall() {
      const res = await axios.get(baseURL, { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } })
      setData(res.data.records)
      // sumKcal(data)
      setToggle(prevToggle => !prevToggle)
    }
    apiCall()
   
  }, [])

  useEffect(() => {
  
    sumKcal(data)
    highestDay(data)
    weightChange(data)
    setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }
    , [toggle])

  useEffect(() => {
    if (newArr.length > 0) {
      setSum(newArr.reduce((a, b) => a + b))
    }
  }, [toggleFetch])


  //  let sum = newArr.reduce((a, b) => { a + b })
  //  console.log(sum)

  
  function calculation() {
    let averageIntake = Math.floor(sum / day)
    let maintenanceAdjustmentPercent = weight / day
    const onePound = 3500
    const kcalAdjustment = Math.abs((maintenanceAdjustmentPercent)) * onePound
    const maintenanceIntake = kcalAdjustment + (averageIntake)
    return maintenanceIntake
  }

  

  return (
  <div>
  <div className = 'Columns'>
      {data.map((log) => {
        return (<div>{log.fields.days}, {log.fields.lbs}, {log.fields.kcal}</div>)
        })
      }
    </div>  
      <p>{`This is your maintenance calories for the period: ${calculation()}`}</p>
    </div>
  )
}
  


//logic still shifts between numbers...I'm going to need to fix that so its more user-friendly
