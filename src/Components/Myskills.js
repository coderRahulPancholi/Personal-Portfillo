import React, { useEffect, useState } from "react";

import styled from "styled-components";

export default function About() {
  const skills = [
    {
      title: "Java",
      perc: 40,
    },
    {
      title: "Html",
      perc: 90,
    },
    {
      title: "Css",
      perc: 90,
    },
    {
      title: "ReactJs",
      perc: 60,
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
          <h3>My Skills </h3>
          <p>Here's Some details about my skills with their percenteges</p>
        </div>

        <div className="skills">
          <div className="skcnt">
            {skills.map((i) => {
              return (
                <div className="allskilss">

                
                <div className="java">
                  <div className="line">
                    <div style={{ width: `${i.perc}%` }} className="bar"></div>3
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
    background-color: #181a18;
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
      height: 5px;
      width: 100%;
      overflow: hidden;
      background-color: white;
      border-radius: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .bar {
        height: 5px;

        background-color: ${({theme}) => theme.color.btbg};

        /* border-radius: 5px; */
        /* transition: width 5s ease ; */
      }
    }
  }
`;
