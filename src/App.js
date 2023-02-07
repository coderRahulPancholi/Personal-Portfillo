// import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Myskills from './Components/Myskills';
import  {ThemeProvider} from "styled-components"
import { GlobalStyle } from './Gobalstyle';
import Contact from './Components/Contact';
import Topbtn from './Components/Topbtn';

function App() {

  const theme = {

    color:{
      heading:"rgb(24 24 29)",
      text:"rgb(24 24 29)",
      white:"white",
      black:"#212529",
      helper:"#8490ff",
      bg:"#daf0dd",
      background:" linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
      btbg:"#2854b0",


    },

    media:{ mobile: "768px", tab: "998px"},



  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <BrowserRouter>
    <Navbar title ="Rahul Sharma"/>
    <Routes>
     <Route path='/' element={<Home title="Welcome" name="Rahul Sharma" btntext="Download CV"/>}/>
     <Route path='/myskills' element={<Myskills />}/>
     <Route path='/about' element={<About />}/>
     <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    <Topbtn/>
   
    </ThemeProvider>
  
  )
}

export default App;


