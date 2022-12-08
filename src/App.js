import './App.css';
import Controledclass from './controlled/Controledclass';
import Controlfun from './controlled/Controlfun';
import Uncontrolclass from './controlled/Uncontrolclass';
import Uncontrolfun from './controlled/Uncontrolfun';
import Formikclass from './Formikclass';

function App() {
  return (
    <div className="App">
      <h2>Form Programming</h2>
      {/* <Controlfun />
      <Controledclass/>
{/*  */}
      {/* <Uncontrolfun/>
      <Uncontrolclass/> */}
       
    <Formikclass />
    
    </div>
  );
}

export default App;
