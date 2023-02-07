import React from 'react'
// import {Link} from 'react-router-dom'
import styled from 'styled-components'
import darksvg from '../Assests/dark.svg'



 function Navbar(props) {
  return (
   
    <Mainheader>
       

   

       

        <div className="title">
            <h3>{props.title}</h3>
        </div>
        <div className="themetoggle">
            <img src={darksvg} alt="" />
        </div>

     
        
   
   



            
      
        

    </Mainheader>
   
  
  )
}

const Mainheader = styled.header`
width: 90vw;
max-width: 1200px;
min-height: 70px;
max-height: fit-content;
margin: auto;
position: sticky;
top: 0;
/* padding: 0 4.8rem; */
background-color: #262926;

z-index: 999;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;

`

export default Navbar
