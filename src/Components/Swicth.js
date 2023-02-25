
import React, { useState } from 'react'
import styled from 'styled-components'

export default function Swicth() {
    const [tx,setTx] =useState(true)

    const toggleswicht=()=>{
        if(tx=== true){
            setTx(false)

        }else{
            setTx(true)
        }
    }
  return (
    <Sw>
        <div className="line" style={{justifyContent:tx?"flex-start":"flex-end" ,backgroundColor:tx?"black":"blue"}} onClick={toggleswicht}>
            <div className="cir" style={{backgroundColor:tx?"blue":"aqua"}} >

            </div>
        </div>
      
    </Sw>
  )
}
const Sw = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.line{
    height: 10px;
    width: 35px;
    background-color: black;
    border-radius: 10px;
    display: flex;
/* justify-content: flex-start; */
align-items: center;
transition: justify-content 5s ease ;
/* padding: 1px; */


    .cir{
        width: 20px;
        height: 20px;
        border-radius: 100%;
        /* background-color: blue; */
        transition: all 1s ease ;
    }
}

`