import { Modal, Button } from 'react-materialize';
import { Row, Col } from 'react-materialize';


const trigger = <Button>Open Modal</Button>;

export default function Modals() {
  return (
    <>
      
      <Row>
        <Col className="instruction-field"
        s={6}
        >
          <Modal
            actions={[<Button className="close" flat modal="close" node="button" waves="green">Close</Button>]}
            bottomSheet={false}
            fixedFooter={false}
            
            options={{
              endingTop: '10%',
              opacity: 0.5,
              startingTop: '4%'
            }}
            header="Instructions Field"
            trigger={trigger}
            id="Modal-0">
            <p>
      Here are instructions for the calculator. You enter a
      a weight in lbs and an calorie intake. It will then
      return a maintenance kcal value which you can try yourself.
      Be warned that the less entries posted the less accuracy This
              calculator has.
              </p>
          </Modal>
          </Col>
  </Row>    
      </>
  )
}
     