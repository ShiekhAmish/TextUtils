import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{useState} from 'react';
import Alert from './Components/Alert';


let name= "Amish Sabir";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert =(message,type) =>{
    setalert(
    {
      msg:message,
      type: type,
    }
    
    );
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode =()=>{
    if (mode === 'light')
    {
      setMode ('dark');
      document.body.style.backgroundColor="black";
      showAlert("Dark Mode is Enabled", "success");
      // document.title='Dark mode is Enabled';
      // setInterval(() => {
      //   document.title='Install TextUtis....';
      // }, 2000);
      // setInterval(() => {
      //   document.title=' TextUtils is a very good Application....';
      // }, 1500);
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is Enabled", "success");
      // document.title='Light Mode is Enabled';

    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    
   <TextForm showAlert={showAlert} heading="Enter TextUtils - Word Counter,Charecter Counter,Remove Extra Spaces" mode={mode}/>
    </>
  );
}

export default App;
