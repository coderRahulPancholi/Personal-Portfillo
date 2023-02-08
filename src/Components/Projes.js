import React from "react";
import styled from "styled-components";
import { Project_Data } from "../Data/Projects";

export default function Projes() {
  return (
    <Wrapper>
       
      <Maincontainer className="dfa">
      <div className="title">
          <h3>Projects </h3>
          <p>I have created some cool website using my skills.Here some website with their preview links</p>
        </div>
        <Items className="dfas">
          {Project_Data.map((i) => {
            return <Item>
              <div className="img">
                <img src={i.img} alt="" />
                

              </div>
              <div className="info">
                <h3>{i.title}</h3>
                <div className="dis">

                <p><b>Tech Use:- </b>{i.technologyuse}</p>
                <p><b>Discription:- </b>{i.discription}</p>
                </div>

              <div className="btns">
                <button>Live Preview</button>
                <button>Source Code</button>
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
  width: 100vw;

  .dfas {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
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
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  border-radius: 10px;
  gap: 10px;
  background-color: #2e3033;
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

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    

    h3{
      text-align: center;
      width: 100%;
      color: white;
      /* font-weight: 200; */
    }

    .dis{
      width: 90%; 
    }

    .btns{
      width: 90%;
      text-align: center;
     

      


      button{
        cursor: pointer;
        padding: 10px;
        margin: 5px;
        border:none;
        border-radius: 5px;
        background-color:royalblue;
        color: white;
        font-weight: bold;
      }
    

    }
  }
`;
