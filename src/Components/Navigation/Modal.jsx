
import Font from 'react-font'

// const trigger = <Button>Open Modal</Button>;

export default function Modals() {
  return (
     <>
       <div className="background">
          <div className="content">
          <Font family="Archivo Narrow">
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
              <p>
      Here are instructions for the calculator. You enter a
      a weight in lbs and an calorie intake. It will then
      return a maintenance kcal value which you can try yourself.
      Be warned that the less entries posted the less accuracy This
                calculator has.
             </p>
            </Font>
          </div>
       </div>
     </>
  )
}
     