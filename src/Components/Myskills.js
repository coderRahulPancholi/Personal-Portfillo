import React from "react";

import styled from "styled-components";

export default function About() {
  const skills = [
    {
      title: "Java",
      perc: 55,
    },
    {
      title: "Html",
      perc: 99,
    },
    {
      title: "Css",
      perc: 95,
    },
    {
      title: "ReactJs",
      perc: 70,
    },
    {
      title: "NodeJs",
      perc: 20,
    },
    {
      title: "Redux",
      perc: 10,
    }
  ];

  return (
    <AWrapper>
      <div className="maincont">
        <div className="title">
          <h3>Skills </h3>
          <p>Here's Some details about my skills with their percenteges</p>
        </div>

        <div className="skills">
          <div className="skcnt">
            {skills.map((i,ind) => {
              return (
                <div className="allskilss" key={ind}>

                
                <div className="java">
                  <div className="line">
                    <div style={{ width: `${i.perc}%`}} className="bar"></div>3
                  </div>
                  <p>{i.perc}%</p>
                </div>
                <div className="title">
                    <h4>{i.title}</h4>
                </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AWrapper>
  );
}

const AWrapper = styled.section`
min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #161716;

 

  h2 {
    color: white;
    font-size: 50px;
  }
  .title {
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
  .maincont {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    
  }
  .skills {
    width: 100%;
    padding: 5% 0;
  }

  .skcnt {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    align-items: center;
  }

  .allskilss{
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: #252625;
    border-radius: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    

  }

  .java {
    height: 50px;
    width: 100%;
    display: flex;
    gap: 5px;
    

    justify-content: flex-start;
    align-items: center;

    .line {
      height: 10px;
      width: 100%;
      overflow: hidden;
      background-color: white;
      border-radius: 5px;
      /* border-top-right-radius: 5px;
      border-bottom-right-radius: 5px; */
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .bar {
        height: 100%;

        background-color: ${({theme}) => theme.color.btbg};
        

        border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
        /* transition: width 5s ease ; */
      }
    }
  }
`;
