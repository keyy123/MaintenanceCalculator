import { Modal, Button } from 'react-materialize';
import { Row, Col } from 'react-materialize';
import Font, {Text} from 'react-font'

// const trigger = <Button>Open Modal</Button>;

export default function Modals() {
  return (
    <>
      
      <Row>
        <Col className="instruction-field"
        s={6}
        >
      
          <Modal
            actions={[<Button className="close" flat modal="close" node="button" waves="green">Close</Button>]}
           
            open={true}
            options={{
              dismissible: true,
              endingTop: '0%',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              opacity: 0.5,
              outDuration: 250,
              preventScrolling: true,
              startingTop: '0%'
            }}
            header= {<Text family="Archivo Black">Instructions Field</Text>}
            // trigger={trigger}
            id="Modal-0"
            trigger={<Button node="button">Open Guide</Button>}
          >
           <Font family = "Archivo Narrow">
            <p>
      Here are instructions for the calculator. You enter a
      a weight in lbs and an calorie intake. It will then
      return a maintenance kcal value which you can try yourself.
      Be warned that the less entries posted the less accuracy This
                calculator has.
                </p>
                </Font>
              
            </Modal>
            
            
          </Col>
  </Row>    
      </>
  )
}
     