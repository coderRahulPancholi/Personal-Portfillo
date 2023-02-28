import React from "react";
import styled from "styled-components";
import { Project_Data } from "../Data/Projects";

 


export default function Projes(props) {
  return (
    <Wrapper className="wrapper" id="projects">
       
      <Maincontainer className="dfa">
      <div className="title">
          <h3>Projects </h3>
          <p>I have created some cool website using my skills.Here some website with their preview links</p>
        </div>
        <Items className="dfc jc ac gap15">
          {Project_Data.map((i,ind) => {
            return <Item key={ind} className="df jsa as wrap gap10">
              <div className="img">
                <img src={i.img} alt="porject Images" style={{opacity:props.mode==="dark"?"50%":"100%"}}/>
                

              </div>
              <div className="info dfc jss ac gap15">
                <h3>{i.title}</h3>
                <div className="dis">

                <p><b>Tech Use:- </b>{i.technologyuse}</p>
                <p><b>Discription:- </b>{i.discription}</p>
                </div>

              <div className="btns">
                <button onClick={()=>{window.open(i.link,"_blank")}}>Live Preview</button>
                <button onClick={()=>{window.open(i.code,"_blank")}}>Source Code</button>
                
              </div>
              </div>

            </Item>
          })}
          
        </Items>
      </Maincontainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
/* min-height: 70vh;  */
  width: 100vw;
  
  background-color: ${({theme}) => theme.color.bg1};
  

 
  .title{
    /* padding: 10px; */
    margin-bottom: 50px;
    text-align: center;
  }
`;
const Maincontainer = styled.div`
  width: 100%;
`;
const Items = styled.div`
  width: 100%;
`;
const Item = styled.div`
  width: 90%;
  max-width: 1000px;
  height:auto;
  border-radius: 10px;
  /* background-color: #2e3033; */
  background-color:${({theme}) => theme.color.bg3};
  padding: 1%;
  
  


  .img{
    flex: 1;
    flex-basis: 400px;
    height: 100%;

    img{
      width: 100%;
      max-height: 500px;
      border-radius: 10px;
    }
  }


 

  .info{
    width: 50%;
    flex: 1;
    flex-basis: 400px;
    height: 100%;
    

    h3{
      text-align: center;
      width: 100%;
      /* color: white; */
      /* font-weight: 200; */
    }

    .dis{
      width: 90%; 
    }

    .btns{
      width: 90%;
      text-align: center;
     

      


      button{
        background-color:${({theme}) => theme.color.btbg};
        cursor: pointer;
        padding: 10px;
        margin: 5px;
        border:none;
        border-radius: 5px;
        
        color: white;
        font-weight: bold;

        &:hover{
          background-color: #4969ad;
        }
      }
    

    }
  }
`;
