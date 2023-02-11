import React, { useState } from "react";
import styled from "styled-components";
import W from "../Assests/Whatsapp.svg";
import M from "../Assests/Mail.svg";
import P from "../Assests/Phone.svg";

function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  

  return (
    <Wrapper>
      <div className="title">
        <h3>Contact Me </h3>
        <p>Feel Free to Contact me </p>
      </div>
      <div className="maincont">
        <div className="contactdiv numwsp">
          <a
            href="tel:+91-9358393743"
            className="contlogo"
            rel="noreferrer"
            target={"_blank"}
          >
            <img src={P} alt="" />
            <p>Call Me</p>
          </a>
          <a
            href="https://wa.me/919358393743"
            className="contlogo"
            rel="noreferrer"
            target={"_blank"}
          >
            <img src={W} alt="" />
            <p>Chat With Me</p>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=rahulpancholi3937@gmail.com&tf=cm"
            className="contlogo"
            rel="noreferrer"
            target={"_blank"}
          >
            <img src={M} alt="" />
            <p>Mail</p>
          </a>
        </div>
        <div className="formdiv">
          <div className="form">
            <p>Get In Touch</p>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Your Message"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="buttons">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=rahulpancholi3937@gmail.com&su=${email}&body=Name:-${name} %20 Massege:-${Message} %20 No.:-${number}`}target={"_blank"}  rel="noreferrer" >
              <button>Mail</button>{" "}
            </a>

            <a
              href={`https://wa.me/919358393743?text=Name:-${name}%20Number:-${number}%20Email:-${email}%20Message:-${Message}`}target={"_blank"}  rel="noreferrer" >
              <button>WhatsApp </button>{" "}
            </a>

          </div>
        </div>
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
    flex-direction: column;
    gap: 40px;
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    align-items: center;

    .contlogo {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .numwsp {
      width: 100%;
      max-width: 500px;
      display: flex;
      gap: 15px;
      align-items: center;
      justify-content: space-around;
    }

    .formdiv {
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      justify-content: center;
      align-items: center;
      border-radius: 15px;

      padding: 20px;
      background-color: #252625;
    }

    .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      input {
        width: 100%;
        padding: 15px;
        outline: none;
        border: none;
        border-radius: 5px;
      }
      textarea {
        min-height: 100px;
        max-width: 100%;
        min-width: 100%;
        padding: 15px;
        outline: none;
        border: none;
        border-radius: 5px;
      }
    }
  }
`;

export default Contact;
