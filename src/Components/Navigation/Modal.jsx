
import Font from 'react-font'

// const trigger = <Button>Open Modal</Button>;

export default function Modals() {
  return (
     <>
       <div className="background">
          <div className="content">
          <Font family="Archivo Narrow">
          <section className="banner">
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
                a weight in lbs and an calorie intake per entry. Each
                entry represents an entire day so don't worry about it.
                The calculator will return a maintenance value based on the
                data from each entry which you can use to meal prep however
                you would like.
              </p>
              </section>
            </Font>
          </div>
       </div>
     </>
  )
}
     