import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import WeightLog from './Weight-Log'
import { AiFillEdit} from 'react-icons/ai'


export default function Calculator() {
  //global variables
  const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
  const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY





  const baseURL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/weigh-in%20records?sort%5B0%5D%5Bfield%5D=days `
  
  
  
  
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
     return  setNewArr((newArr) => [...newArr, log.fields.kcal])
     
    })
  }

  function highestDay(x) {
    x?.map((log) => {
     return  Arr2.push(log.fields.lbs)
    })
    setDay(Arr2.length)
  }

  function weightChange(x) {
    x?.map((log) => {
      return Arr3.push(log.fields.lbs)
    })
    setWeight(Arr3[0] - (Arr3[Arr3.length - 1]))
  }


  // function sortDay(x) {
  //   x?.map((log) => {
  //    return Arr2.push(log.fields.days)
  //   })

  // }
  
  
  
  
  //UseEffects

  useEffect(() => {
    async function apiCall() {
      const res = await axios.get(baseURL, { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } })
      setData(res.data.records)
      // sumKcal(data)
      setToggle(prevToggle => !prevToggle)
    }
    apiCall()
   // eslint-disable-next-line
  }, [])

  useEffect(() => {
  
    sumKcal(data)
    highestDay(data)
    weightChange(data)
    setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }
    // eslint-disable-next-line
    , [toggle])

  useEffect(() => {
    if (newArr.length > 0) {
      setSum(newArr.reduce((a, b) => a + b))
    }// eslint-disable-next-line
  }, [toggleFetch])


  //  let sum = newArr.reduce((a, b) => { a + b })
  //  console.log(sum)

  console.log(weight)

  function calculation() {
    let averageIntake = Math.floor(sum / day)
    let maintenanceAdjustmentPercent = weight / day
    const onePound = 3500
    let kcalAdjustment = 0
    weight > 0 ? kcalAdjustment = Math.abs((maintenanceAdjustmentPercent)) * onePound: kcalAdjustment = maintenanceAdjustmentPercent * onePound  
    const maintenanceIntake = kcalAdjustment + (averageIntake)
    return maintenanceIntake
  }



  return (
    <div>
      <WeightLog/>
        <div className='Columns'>
        <table>
          <tr>
            <th>Entries</th>
            <th>Weight (lbs)</th>
            <th>Kcal Intake</th>
          </tr>
         
        {data.map((log,index) => {
        return (
         
          <>
            <tr>
             
                {
                  <>
                  <td className="table entry">{index + 1}</td>
                  <td className="table weight">{log.fields.lbs}</td>
                  <td className="table intake">{log.fields.kcal}</td>
                  </>
                }  <Link to={`/weightlog/${log.id}`} key={log.id}><AiFillEdit /> </Link>
         </tr>  
       </>
      
        )
        })
          }
           </table>
    </div>  
      <p>{`This is your maintenance calories for the period: ${calculation()}`}</p>
    </div>
  )
}
  


//logic still shifts between numbers...I'm going to need to fix that so its more user-friendly
