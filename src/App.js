// import logo from './logo.svg';

import './App.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import About from './Components/About';
// import Myskills from './Components/Myskills';
import  {ThemeProvider} from "styled-components"
import { GlobalStyle } from './Gobalstyle';
// import Contact from './Components/Contact';
import Topbtn from './Components/Topbtn';
import Projects from './Components/Projes';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {  useState } from 'react';
// import BottomNav from './Components/BottomNav';
// import Qouts from './Components/Qouts';
// import Swicth from './Components/Swicth';
import ProjectState from "../src/Data/ProjectState"

function App() {
  

  const dark = {

    color:{
      // heading:"#c2c1c0",
      heading:"#b3b4b5",
      text:"#c2c1c0",
      white:"white",
      black:"#212529",
      helper:"#8490ff",
      navbg:"#262926",
      bg1:"#181a18",
      bg2:"#161716",
      bg3:"#252625",
      btbg:"#2854b0",
     


    },

    media:{ mobile: "768px", tab: "998px"},

  }
  const light = {

    color:{
      heading:"#45423c",
      text:"#45423c",
      white:"black",
      black:"white",
      helper:"#8490ff",
      navbg:"#dbdbdb",
      // navbg:"black",
      bg1:"#faf7f7",
      bg2:"white",
      // bg3:"#e6e3e3",
      bg3:"#e8e9ed",
      
      btbg:"#2854b0",


    },

    media:{ mobile: "768px", tab: "998px"},

  }

  
 
  const [mode,setMode]= useState('dark')
  const [theme,setTheme]= useState(dark)
  const togletheme=()=>{
    if(mode === "dark"){

      setMode("light")
      setTheme(light)
    }else if(mode === "light"){
      setMode("dark")
      setTheme(dark)
    }else{
      setMode("dark")
      setTheme(dark)
    }
    
  }
  
  
  
  return (
   <ProjectState>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <Navbar  themer= {togletheme} theme = {theme} dark = {dark} light ={light} setTheme ={setTheme} mode = {mode}/>
    <Home/>
    <Projects dark ={dark} mode = {mode}/>
    <About />
    {/* <Qouts/> */}
    <Contact/>
    <Footer/>
    
    <Topbtn/>
    {/* <BottomNav/> */}

   
    </ThemeProvider>
   
    </ProjectState>
  )
}

export default App;


