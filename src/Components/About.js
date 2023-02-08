import React,{useState} from 'react'
import {Projects} from "../Data/Projects"
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import {Pagination, Navigation, Autoplay,EffectCoverflow } from "swiper";


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
          
        <Swiper
        // grabCursor={true}
        // effect={"cards"}
        effect={"coverflow"}
        // slidesPerView={"2"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
       
        pagination={{
          dynamicBullets: true,
        }}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 50,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        modules={[EffectCoverflow,Autoplay,Pagination,Navigation]}
        className="mySwiper"
      >

         
          {Projects.map((i,ind)=>{
            return(

              <SwiperSlide style={{display:'flex',justifyContent:'center',alignItems:'center',width:"100%",height:"auto"}}>

             
             <Project key={ind} onClick={()=>preview(ind)}>
               <button >{i.title}</button>
             </Project>
        
             </SwiperSlide>

            
            )
          })}

          </Swiper>

     
       
         
        </div>
       
        

      </div> 

      <div style={{display:pvmode?"flex":"none"}} className="pf">
       
        <h1>{prev.title}</h1>
        <button onClick={()=>setPvmode(false)}>close</button>
      </div>



   
    </AWrapper>
    
  )
}

const AWrapper = styled.section`


display: flex;
justify-content: center;
width: 100%;





/* height: calc(100vh - 100px); */



.pf{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: azure;
  z-index: 999;
  flex-direction: column;
}
p{
  color: white;
}

.maincont{
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;

}
.title{
  width: 100%;
  

}
.projects{
 min-width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  height: auto;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  /* padding: 50px; */
 border-radius: 10px;

}
`

const Project = styled.div`

width: 100%;
background-color: #353635;



height: 400px;
display: flex;
background-repeat: no-repeat;
background-position: center;
justify-content: center;
align-items: center;
border-radius: 15px;
/* background-color: #424242; */
/* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;



`

export default About

