import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

export default function BottomNav() {
  return (
    <BottomNavbar className='df ac jc'>
        <div className="bnav df ac jc  ">
            <div className="icon"> <Link to='home' smooth={true} activeClass='active' spy={true}> <div><AiOutlineHome size={30}/> </div></Link></div>
            <div className="icon"> <Link to='skills' smooth={true} activeClass='active' spy={true}> <AiOutlineComment size={30}/></Link></div>
            <div className="icon"><Link to='projects' smooth={true} activeClass='active' spy={true}> <AiOutlineCode size={30}/></Link></div>
            <div className="icon"><Link to='about' smooth={true} activeClass='active' spy={true}><AiOutlineUser size={30}/></Link></div>
            <div className="icon"> <Link to='contactme' smooth={true} activeClass='active' spy={true}> <AiOutlineComment size={30}/></Link></div>
        </div>
      
    </BottomNavbar>
  )
}

const BottomNavbar = styled.div`
width: 100vw;
height: 50px;
background: transparent;
position: sticky;
bottom: 0px;
z-index: 999;

.bnav{
    /* width: 100%; */
    /* max-width: 500px; */
    padding: 15px;
    height: 100%;
    /* background-color: ${({theme})=>theme.color.navbg}; */
    border-radius: 50px;
    gap: 40px;



    .icon{
       
        

        Link{
            background-color: aqua;
           width: 30px;
        height: 30px;
        border-radius: 100%;

        div{
          

        }
        }
        
       


        }
        .active {
        color: red;
        }

       
    
}

`