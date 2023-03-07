import React, { useEffect, useState } from 'react'
// import * as React from 'react';
// import {Link} from 'react-router-dom'
import styled from 'styled-components'



// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import { WiSolarEclipse } from "react-icons/wi";
import { WiMoonAltWaxingGibbous2 } from "react-icons/wi";








 function Navbar(props) {
  

  const [navw , setNavw]= useState(false);

   
    const listenToScroll=(()=>{
        let mheight = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
     
        
        if(winScroll > mheight){
            setNavw(true);

        }else{
            setNavw(false);
        }
    })

    useEffect(()=>{
        window.addEventListener("scroll", listenToScroll);
        return()=> window.removeEventListener("scroll", listenToScroll);

    },[]);

   

  
  return (

   
    <Mainheader >

 
      
      
       <div className="navbar" style={{maxWidth:navw ?"100%":"1200px",boxShadow:navw ?"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset":"none"}}>

       

        <div className="title">
            <h3 >Rahul<b className="surname"> Sharma</b></h3>
        </div>
        <div className="themetoggle"  >
       
{/* <FormGroup>
      <FormControlLabel control={<Switch  defaultChecked = {props.mode === 'dark'? true:false} />} label="Dark Mode" onChange={props.themer}/>
     
     
    </FormGroup> */}

            {/* <img src={darksvg} alt="" /> */}

            {props.mode === "dark"? <WiSolarEclipse size={40} onClick={props.themer} className="modeicon"/>:<WiMoonAltWaxingGibbous2 size={30} onClick={props.themer} className="modeicon"/>}
        </div>

       

        </div>
   
   



            
      
        

    </Mainheader>
   
  
  )
}

const Mainheader = styled.header`
background-color: ${({theme}) => theme.color.bg1};
position: sticky;
top: 0;
width: 100vw;
z-index: 999;

.modeicon{
  /* color: white; */
  cursor: pointer;
  transform: rotate(-15deg);
  transition: 0.5s;
animation: mani 0.5s ease-out  1  ;



 
}

.surname {
      /* width: 100%;  */
      color: ${({ theme }) => theme.color.btbg};
    }

.navbar{


width: 100%;
/* max-width: 1200px; */
min-height: 70px;

max-height: fit-content;
margin: auto;
/* transition: box-shadow 0.25s linear; */
transition: max-width 0.25s linear;

/* padding: 0 4.8rem; */

background-color: ${({theme})=> theme.color.navbg};


border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;

}

@keyframes mani {
    from{
      transform: rotate(-15deg);
    }
    from{
     
      transform: rotate(90deg);
    }
    
  }
`

export default Navbar
