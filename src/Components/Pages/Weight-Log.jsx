import React from 'react'
import axios from 'axios'
import { useState} from 'react'


const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const baseURL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/weigh-in%20records `



export default function WeightLog() {
  const [lbs, setLbs] = useState(0)
  const [kcal, setKcal] = useState(0)
  const fields = {
    kcal,
    lbs
  };

async function handleSubmit(e) {
  e.preventDefault()
  await axios.post(baseURL, { fields }, { headers:{Authorization: `Bearer ${AIRTABLE_KEY}`}})
    
  }
  return (
    <div>
      <h3>Add a new weigh-in</h3>
    <form onSubmit={handleSubmit}>
      <label>kcal intake</label>
      <input
        name="kcal"
        value={kcal}
        onChange={(e) => setKcal(e.target.value)} />
      <label>weight (lbs)</label>
      <input
        name="lbs"
        value={lbs}
          onChange={(e) => setLbs(e.target.value)} />
        <button>Add New Entry</button>
        
    </form>
    </div>
  )
}
