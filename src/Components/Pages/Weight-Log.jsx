import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router'


const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const baseURL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/weigh-in%20records `



export default function WeightLog() {
  const History = useHistory()
  const [lbs, setLbs] = useState(0)
  const [kcal, setKcal] = useState(0)
  const fields = {
    kcal,
    lbs
  };

async function handleSubmit(e) {
  e.preventDefault()
  await axios.post(baseURL, { fields }, { headers:{Authorization: `Bearer ${AIRTABLE_KEY}`}})
  History.push("/calculator")
}
  
  

  return (
    <div>
      <h3>Add a new weigh-in</h3>
    <form onSubmit={handleSubmit}>
      <label>kcal intake</label>
      <input
        name="kcal"
          value={kcal}
          type="number"
        onChange={(e) => setKcal(e.target.valueAsNumber)} />
      <label>weight (lbs)</label>
      <input
          name="lbs"
          value={lbs}
          type="number"
          onChange={(e) => setLbs(e.target.valueAsNumber)} />
        <button>Add New Entry</button>
    </form>
    </div>
  )
}
