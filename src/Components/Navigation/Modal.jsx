import { Modal, Button } from 'react-materialize';

const trigger = <Button>Open Modal</Button>;

export default function Modals() {
  return(
  <Modal actions={[<Button flat modal="close" node="button" waves="green">Close</Button>]} header="Instructions Field" trigger={trigger} id="Modal-0">
      Here are instructions for the calculator. You enter a
      a weight in lbs and an calorie intake. It will then
      return a maintenance kcal value which you can try yourself.
      Be warned that the less entries posted the less accuracy This
      calculator has. 
    </Modal>
  )
}
     