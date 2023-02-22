import React, { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
import styled from 'styled-components'
// import darksvg from '../Assests/dark.svg'



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
       

   

       <div className="navbar" style={{maxWidth:navw ?"100%":"1200px"}}>

       

        <div className="title">
            <h3>{props.title}</h3>
        </div>
        <div className="themetoggle" >
          {/* {props.theme === props.dark?<p onClick={props.themer}>light</p >:<p onClick={props.themer}>dark</p>} */}
   
          <div class="dfjac">
  <input type="checkbox" class="custom-control-input" id="customSwitch1"  onChange={props.themer} defaultChecked/>
  <label class="custom-control-label" for="customSwitch1" >Enable Dark Mode</label>
</div>

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

.navbar{


width: 100%;
/* max-width: 1200px; */
min-height: 70px;
max-height: fit-content;
margin: auto;
transition: max-width 0.25s linear;

/* padding: 0 4.8rem; */

background-color: ${({theme})=> theme.color.navbg};

z-index: 999;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;

}

`

export default Navbar
