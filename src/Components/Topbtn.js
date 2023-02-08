import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import styled from 'styled-components'



function Topbtn() {
    const [topbtnvissible , settopbtnvissible]= useState(false);

    const goToTop = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'})

    };
    const listenToScroll=(()=>{
        let mheight = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
     
        console.log(winScroll);
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
    <div className='topbtn' onClick={goToTop}>
       <h1>Top</h1> 

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
    z-index: 99;
    h1{
        color: white;
    }
}

`

export default Topbtn
