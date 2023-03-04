import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import styled from 'styled-components'
import { BiChevronUp } from "react-icons/bi";



function Topbtn() {
    const [topbtnvissible , settopbtnvissible]= useState(false);

    const goToTop = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'})

    };
    const listenToScroll=(()=>{
        let mheight = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
     
        // console.log(winScroll);
        if(winScroll > mheight){
            settopbtnvissible(true);

        }else{
            settopbtnvissible(false);
        }
    })

    useEffect(()=>{
        window.addEventListener("scroll", listenToScroll);
        return()=> window.removeEventListener("scroll", listenToScroll);

    },[]);

  return (
 <Wrapper>
{topbtnvissible && (
    <div className='topbtn df jc ac' onClick={goToTop}>
       <BiChevronUp size={40} color={"white"}/>
    </div>
    )}

 </Wrapper>
  )
};
const Wrapper = styled.section`
 

.topbtn{
    cursor: pointer;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 9999;
    width: 40px;
    height: 40px;
    background-color: ${({theme})=>theme.color.btbg};
    border-radius: 100%;
    animation: topindi 3s ease-in-out 3s infinite ;
    
   
   
  


    @keyframes topindi {

      0%{
        transform: translateY(0px);

      }  
      50%{
        transform: translateY(-5px);

      }
     
      100%{
        transform: translateY(0px);

      }
    }
}

`

export default Topbtn
