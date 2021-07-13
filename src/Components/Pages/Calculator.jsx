import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Calculator() {
  const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
  const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
  const baseURL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/weigh-in%20records\ `
  const[data,setData] = useState()

  useEffect(() => {
    async function apiCall() {
      const res = await axios.get(baseURL, {headers:{Authorization: `Bearer${AIRTABLE_KEY}` } })
      console.log(res)
    }
    apiCall()
  },[])

  return (
    <div>
      Math
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