import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router'
export default function Details() {
  
  
  const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
  const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
  const baseURL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/weigh-in%20records\ `
  const {id} = useParams()

    const [lbs, setLbs] = useState(0)
  const [kcal, setKcal] = useState(0)
  const [data, setData] = useState([])
    const fields = {
      kcal,
      lbs
    };
  useEffect(() => {
    async function apiCall() {
      const res = await axios.get(`${baseURL}/${id}`, { headers:{Authorization: `Bearer ${AIRTABLE_KEY}`}})
      setData(res.data)
      setKcal(data.fields?.kcal)
      setLbs(data.fields?.lbs)
    }
    apiCall()
  }, [])
 
 
  async function handleSubmit(e) {
    e.preventDefault()
    console.log(fields)
      const res = await axios.patch(`${baseURL}/${id}`, { fields }, { headers:{Authorization: `Bearer ${AIRTABLE_KEY}`}})
  
    }
    return (
      <div>
        <h3>Add a new weigh-in</h3>
      <form onSubmit={handleSubmit}>
        <label>kcal intake</label>
          <input
            type="number"
          name="kcal"
          value={kcal}
          onChange={(e) => setKcal(e.target.valueAsNumber)} />
        <label>weight (lbs)</label>
          <input
            type="number"
          name="lbs"
          value={lbs}
            onChange={(e) => setLbs(e.target.valueAsNumber)} />
          <button>Add New Entry</button>
          
      </form>
      </div>
    )
  }
  