import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div className="title">
        <h3>Contact Me </h3>
        <p>Feel Free to Contact me </p>
      </div>
      <div className="maincont">
        <div className="numwsp"></div>
        <div className="form"></div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  /* background-color: #161716; */

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
    /* max-width: 900px; */
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export default Contact;
