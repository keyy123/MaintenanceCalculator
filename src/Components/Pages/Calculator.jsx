import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Calculator() {
  const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
  const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
  const baseURL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/weigh-in%20records \ `
  
  
  const [data, setData] = useState([])
  const [newArr, setNewArr] = useState([])
  const [toggle, setToggle] = useState(false)
  const [toggleFetch, setToggleFetch] = useState(false)
  const [sum, setSum] = useState(0)
  const [day, setDay] = useState(0)
  const [weight, setWeight] = useState(0)
let Arr2 = []
let Arr3 = []
  

  
  function sumKcal(x) {
    x?.map((log) => {
      setNewArr((newArr) => [...newArr, log.fields.kcal])
     
    })
    // setToggle(prevToggle => !prevToggle)
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

  console.log(Arr2)
  
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
  
  function kcalSum(num) {
    let total = 0;
    total += num
    return total
  }
  
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
      <p>{sum > 0 ? `The sum of your daily intakes is ${sum}` : null}</p>
      <p>{data.length > 0 ? `The number of days at this intake is: ${day}` : null }</p>
      <p>{`Average daily intake is: ${Math.floor(sum / day)}`}</p>
      <p>{`Weight change for the period is: ${weight}`}</p>
      <p>{`This is your maintenance calories for the period: ${calculation()}`}</p>
    </div>
  )
}

//   )
// }
// */
//   )
// }

