
import './App.css';
import{Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Content from './Components/Content/Content';
import Calculator from './Components/Pages/Calculator';
import {Row,Col } from 'react-materialize'
import NaviBar from './Components/Navigation/NaviBar';
import WeightLog from './Components/Pages/Weight-Log';
import Details from './Components/Details';
import {Card} from 'react-materialize'
import { BiShow } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'

function App() {

   return (
    <div className="App">
      
       <Row>
         {/* <Header /> */}
           <NaviBar />
           
      </Row>

        <Route exact path="/">
         <Content />
         
      
        </Route>
        <Route exact path="/calculator">
        <Calculator/>
       </Route>
       <Route exact path="/weightlog">
        <WeightLog/>
       </Route>
       <Route exact path="/weightlog/:id">
        <Details />
        </Route>
        <Footer />
        
    </div>
  );
}

export default App;



