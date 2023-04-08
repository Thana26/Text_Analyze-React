import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import Aboutus from './Aboutus';
import React,{ useState } from 'react';
import Alert from './Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const togmode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'dark';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    
    {/* <div className='bg' ></div> */}
    <Router>
    <Navbar title="Text Analysis" mode={mode} togmod={togmode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          
          <Route exact path="/" element={<Textform heading="Enter Text" alert={alert} mode={mode}/>}> </Route>
          <Route exact path="/" element={<Aboutus/>}> </Route>
      </Routes>
    </div>
    </Router>
</>
  );
}

export default App;