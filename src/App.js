
import './App.css';
import{Route} from 'react-router-dom'
import Header  from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Content from './Components/Content/Content';
import Calculator from './Components/Pages/Calculator';
import {Row, Col} from 'react-materialize'
import NaviBar from './Components/Navigation/NaviBar';



function App() {

   return (
    <div className="App">
      
       <Row>
         <Col
         l='12'
         >
           <Header />
         </Col>
         </Row>
        <Row>
         <Col
           l='12'
         >
           <NaviBar />
           </Col>
      </Row>

        <Route exact path="/">
        <Content />
        </Route>
        <Route exact path="/calculator">
        <Calculator/>
         </Route>
      
        <Footer />
        
    </div>
  );
}

export default App;

{/* What would I need to make my component hierarchy real?

1.) Components folder
2.) Subfolders: Header, Navigation, Pages, Content, Footer
3.) Let's build out our header bar -> footer bar w/ sample text
4.) Import Route in App.js
5.) Build NavBar Component and import link 

*/}

