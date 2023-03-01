import React from "react";
import { Link } from "react-scroll";

// import { Link } from 'react-router-dom'
import styled from "styled-components";
// import Contact from './Contact'
import bi from "../Assests/background.png";

function Section() {
  return (
    <AWrapper className="df  " id="home">
      <div className="section-data df jc ac">
        <div className="namedata">
          <p className="toppara">Welcome I'm</p>
          <h1 className="myname">
            Rahul<b className="surname"> Sharma</b>
          </h1>

          <p className="mydata">
            A fornted devopler currently i am learning react js.
          </p>
          <p className="mydata">
            I have created some beautifull website using it go trough my
            projects section to see it.
          </p>
          <Link to="contactme" smooth={true}>
            <button
              className="bt hire-btn btn-text"
              style={{ cursor: "pointer" }}
            >
              Hire Me
            </button>
          </Link>
        </div>
      </div>

      <div className="img">
        <img src={bi} alt=""  style={{width:"100%",height:"100%"}}/>
      </div>
      
    </AWrapper>
  );
}
const AWrapper = styled.section`
  width: 100%;
  /* height: 70%; */
  /* height: calc(100vh - 70px); */
  height: 100vh;
  background-color: ${({ theme }) => theme.color.bg1};

  position: relative;

  .img {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 500px;
    height: 40%;

   
  }
  

  .section-data {
    width: 100%;
    /* animation: loadani 1s ease  1  ; */
    height: 90%;

    .namedata {
      width: 90%;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      align-self: center;
      /* padding: 20px; */
      gap: 10px;
      color: white;
      z-index: 99;
    }

    h1 {
      width: 100%;

      /* color: white; */
      font-weight: 100;
    }
    a {
      text-decoration: none;
      color: black;
      font-weight: 800;
    }
    p {
      width: 100%;
      /* overflow: hidden; */
    }
    .surname {
      /* width: 100%;  */
      color: ${({ theme }) => theme.color.btbg};
    }
  }
`;

export default Section;
