import React, { useEffect, useState } from 'react'
// import * as React from 'react';
// import {Link} from 'react-router-dom'
import styled from 'styled-components'
// import darksvg from '../Assests/dark.svg'
// import BootstrapSwitchButton from 'bootstrap-switch-button-react'
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import * as React from 'react';
// import  styled  from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';







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
            <h3 style={{color:navw?`${({theme})=>theme.color.btbg}`:`${({theme}) => theme.color.heading};`}}>{props.title}</h3>
        </div>
        <div className="themetoggle" >
       
<FormGroup>
      <FormControlLabel control={<Switch  defaultChecked = {props.mode === 'dark'? true:false} />} label="Dark Mode" onChange={props.themer}/>
     
     
    </FormGroup>

            {/* <img src={darksvg} alt="" /> */}
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

`

export default Navbar
