import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";





export default function BottomNav() {
  const [isopen, setIsopen] = useState(false)
  return (
    <BottomNavbar className='dfc jc gap15' >


      
          {isopen?
          <div className="bnav dfc ac jc gap20"> 
            <div className="icon"> <Link to='home' smooth={true} activeClass='active' spy={true}> <div><AiOutlineHome size={30} /> </div></Link></div>
            <div className="icon"> <Link to='skills' smooth={true} activeClass='active' spy={true}> <AiOutlineComment size={30}/></Link></div>
            <div className="icon"><Link to='projects' smooth={true} activeClass='active' spy={true}> <AiOutlineCode size={30}/></Link></div>
            <div className="icon"><Link to='about' smooth={true} activeClass='active' spy={true}><AiOutlineUser size={30}/></Link></div>
            <div className="icon"> <Link to='contactme' smooth={true} activeClass='active' spy={true}> <AiOutlineComment size={30}/></Link></div>
            </div>:null
}
      

        <div className='bnavenabler df ac jc' onClick={()=> setIsopen(!isopen)}>

          {isopen?<BiX size={40} style={{color:"white"}}/>:<BiMenu size={40} style={{color:"white"}}/>}
          


        </div>

      
    </BottomNavbar>
  )
}

const BottomNavbar = styled.div`
position: fixed;
right: 10px;
bottom: 10px;
z-index: 9999;



.bnav{
    /* width: 100%; */
    /* max-width: 500px; */
    padding: 10px;
    /* height: 0; */
  height: 400px;
    overflow: hidden;
    background-color: ${({theme})=>theme.color.navbg};
    border-radius: 50px;
    /* gap: 40px; */
  
    .icon{
       
        

        Link{
            background-color: aqua;
           width: 30px;
        height: 30px;
        border-radius: 100%;

        &::active{
        color: red;
      }
      }
     
  

        }
     
        
    
}
.bnavenabler{
          width: 50px;
          height: 50px;
          border-radius: 100px;
          background-color: ${({theme})=>theme.color.btbg};
        }
       

`