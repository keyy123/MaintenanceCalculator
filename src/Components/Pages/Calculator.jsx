import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import log from 'loglevel'

export default function Calculator() {
  const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
  const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
  const baseURL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/weigh-in%20records \ `
  const[data,setData] = useState([])

  useEffect(() => {
    async function apiCall() {
      const res = await axios.get(baseURL, {headers:{Authorization: `Bearer ${AIRTABLE_KEY}` } })
      setData(res.data.records)
    }
    apiCall()
  },[])


  return (
    <div>
      {data?.map((log, index) => {
        for(let i = 0; i < index.length; i++ ){
          const timePeriod = Math.MAX(log.fields?.days)
          console.log(timePeriod)
        }
        return(
          <div key={log.id}>
            
          <h2>{log.fields?.days}</h2>
          <h2>{log.fields?.kcal}</h2>
          <h2>{log.fields?.lbs}</h2>
          </div>
      )})}
    </div>
  )
}

//What do I need to get data from airtable into my program?
{/* 
  1.) I need to make a .env.development.local to store airtable base and key
  2.) Assign them values of process.env.REACT_APP_AIRTABLE_BASE=BASE and same for key
  3.) Make a baseURL as a variable
  4.) Make a useEffect and useState for axios.get call 
  5.) Map the data to page to be safe
*/ }