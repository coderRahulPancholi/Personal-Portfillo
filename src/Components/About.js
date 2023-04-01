import React  from "react";
import styled from "styled-components";
import pimg from "../Assests/pimg.png";


function About() {
  
  return (
    <Wrapper className="wrapper" id="about">
      <div className="title">
        <h3>About Me </h3>
      </div>
      <div className="profilep">
        <img src={pimg} alt="Profile" />
      </div>
      <div className="maincont">
        <div className="aboutme">
          <h4 style={{ fontSize: "20px" }}>Personal Details</h4>
          <ul style={{ padding: "10px", fontSize: "15px" }}>
            <li>
              <b>Name:-</b>Rahul Sharma
            </li>
            <li>
              <b>Adress:-</b>Bad ke balaji
            </li>
            <li>
              <b>Phone:-</b>
              <a href="tel:+91-9358393743" rel="noreferrer" target={"_blank"}>
                9358393743
              </a>
            </li>
            <li>
              <b>Email:-</b>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=rahulpancholi3937@gmail.com&tf=cm"
                rel="noreferrer"
                target={"_blank"}
              >
                rahulpancholi3937 @gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="aboutme">
          <h4 style={{ fontSize: "20px" }}>Self Introduction</h4>
          <ul style={{ padding: "10px", fontSize: "15px" }}>
            <p>
            My name is RAHUL SHARMA and I am a React developer. With my expertise in React, I specialize in creating responsive and dynamic web applications with seamless user interfaces.
            </p>
          </ul>
        </div>
        {/* <div className="aboutme">
            <h4 style={{fontSize:"20px"}}>Qualifitions</h4>
            <ul style={{padding:"10px",fontSize:"15px"}}>
            <li><b>Highest:-</b>Rahul Sharma</li>
            <li><b>Adress:-</b>Bad ke balaji</li>
            
            </ul>
          </div>
          <div className="aboutme"  >
            <h4 style={{fontSize:"20px"}}>Languages</h4>
            <ul style={{padding:"10px",fontSize:"15px"}}>
            <li><b>Highest:-</b>Rahul Sharma</li>
            <li><b>Adress:-</b>Bad ke balaji</li>
            
            </ul>
          </div> */}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  /* min-height: 70vh; */
  width: 100vw;
  /* padding: 2%; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  /* justify-content: ; */
  background-color: ${({ theme }) => theme.color.bg2};

  .profilep {
    width: 90%;
    max-width: 300px;

    height: 300px;
    border-radius: 100%;
    /* overflow: hidden; */

    /* background-image: linear-gradient( 135deg,${({ theme }) =>
      theme.color.bg1}  10%, ${({ theme }) => theme.color.btbg} 100%); */

    /* outline: 1px solid ${({ theme }) => theme.color.btbg}; */
    /* outline-offset: -5px; */
    /* animation: identifier 2s ease  infinite ;
  transition: animation 5s ease; */

    img {
      width: 100%;
      height: 100%;
    }
  }

  .maincont {
    width: 90%;
    /* max-width: 900px; */
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: center;

    .aboutme {
      width: 100%;
      max-width: 400px;
      border-left: 3px solid #2854b0;
      overflow-x: hidden;
      z-index: 99;

      /* background-color: #252625; */
      background-color: ${({ theme }) => theme.color.bg3};
      border-radius: 10px;

      padding: 5px;

      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      ul li {
        width: fit-content;
        height: fit-content;
      }
      ul li a {
        text-decoration: underline;
      }
    }
  }
`;

export default About;
