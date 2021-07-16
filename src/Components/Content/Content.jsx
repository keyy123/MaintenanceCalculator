import React from 'react'
import Modals from '../Navigation/Modal'
export default function Content() {


  return (
    <>
      <div className="content p">
      <p> This react app's purpose is to determine the caloric
          maintenance intake of an individual based on the
          individual's weight and intake entries.
  
          An individual who is aware of their body's maintenance
          intake is able to quickly form a meal plan for cutting(weight
          loss), bulking (weight gain) or even indefinite maintenance.
        
    </p>

      <p>
        This calculator was inspired by the many people who've asked me
        too many times, "So what do I need to do to lose weight?". The
        classic response is to "eat just enough to not lose weight then
        lower it a bit". This calculator will definitely be used for any
        client that works with me in any capacity. For that client,
        This one's for you. 
        </p>
      </div>
      <Modals />
     
 
</>         
  )
}
