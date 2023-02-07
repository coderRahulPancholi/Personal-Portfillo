import React, { useState } from 'react'
import {Projects} from "../Data/Projects"
import styled from 'styled-components'


function About() {
const [prev,setPrev]= useState([])
const [pvmode,setPvmode]= useState(false)

const preview =(id)=>{
  const pd = Projects.find((i,ind)=>{
    return id === ind


  })
  setPrev(pd)
  setPvmode(true)

}



 

 
 


  return (

   
    <AWrapper>


       <div className="maincont">
        <div className="title">

        <h3 >Projects </h3>
        </div>

        <div className="projects">
          

         
          {Projects.map((i,ind)=>{
            return(

             <Project key={ind} style={{backgroundImage:`url(${i.img})`}}>
               <button onClick={()=>preview(ind)}>{i.title}</button>
             </Project>
            
            )
          })}

     
       
         
        </div>
       
        

      </div> 

      <div style={{display:pvmode?"flex":"none"}} className="pf">
        <img src={prev.img} alt="" />
        <h1>{prev.title}</h1>
        <button onClick={()=>setPvmode(false)}>close</button>
      </div>



   
    </AWrapper>
    
  )
}

const AWrapper = styled.section`

display: flex;
justify-content: center;


/* height: calc(100vh - 100px); */



.pf{
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: azure;
  z-index: 999;
}
p{
  color: white;
}

.maincont{
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;

}
.title{
  width: 100%;
  

}
.projects{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  
  padding: 50px;
 border-radius: 10px;

}
`

const Project = styled.div`
flex: 1;
min-width: 300px;
height: 200px;
display: flex;
background-repeat: no-repeat;
background-position: center;
justify-content: center;
align-items: center;
border-radius: 15px;
/* background-color: #424242; */
/* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */



`

export default About

