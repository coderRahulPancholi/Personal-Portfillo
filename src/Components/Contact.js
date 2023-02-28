import React, { useState } from "react";
import styled from "styled-components";
import W from "../Assests/Whatsapp.svg";
import M from "../Assests/Mail.svg";
import P from "../Assests/Phone.svg";
import Ms from "../Assests/mailsmall.svg";
import Ws from "../Assests/whatsappsmall.svg";

function Contact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [validation, setValidation] = useState(false);

  const whatsappsend = () => {
    let url =
      "https://api.whatsapp.com/send?phone=919358393743" +
      "&text=" +
      "Name: " +
      name +
      "%0a" +
      "Email: " +
      email +
      "%0a" +
      "Contact Number: " +
      number +
      "%0a" +
      "Massege : " +
      Message +
      "%0a";

    if (
      name.length > 1 &&
      email.length > 5 &&
      number.length === 10 &&
      Message.length > 10
    ) {
      window.open(url, "_blank");
      setName("");
      setNumber("");
      setEmail("");
      setMessage("");
    } else {
      setValidation(true);
      // alert("enter data")
    }
    setTimeout(() => {
      setValidation(false);
    }, 5000);
  };
  const mailsend = () => {
    let mailurl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=rahulpancholi3937@gmail.com&su=NewQuery" +
      "&body=" +
      "Name: " +
      name +
      "%0a" +
      "Email: " +
      email +
      "%0a" +
      "Contact Number: " +
      number +
      "%0a" +
      "Massege : " +
      Message +
      "%0a";

    if (
      name.length > 1 &&
      email.length > 5 &&
      number.length === 10 &&
      Message.length > 10
    ) {
      window.open(mailurl, "_blank");
      setName("");
      setNumber("");
      setEmail("");
      setMessage("");
    } else {
      setValidation(true);
      // alert("enter data")
    }
    setTimeout(() => {
      setValidation(false);
    }, 5000);
  };

  return (
    <Wrapper className="dfc ac jc gap20 wrapper" id="contactme">
      <div className="title">
        <h3>Contact Me </h3>
        <p>Feel Free to Contact me </p>
      </div>
      <div className="maincont dfc ac">
        <div className="contactdiv numwsp df ac jsa wrap gap15">
          <div className="contlogo dfc ac jsc" onClick={()=>{window.open("tel:+91-9358393743","_blank")}}>
            <img src={P}  alt="" />
            <p>Call Me</p>
          </div>
          <div className="contlogo dfc ac jsc" onClick={()=>{window.open("https://api.whatsapp.com/send?phone=919358393743","_blank")}}>
            <img src={W} alt="" />
            <p>Chat With Me</p>
          </div>
          <div className="contlogo dfc ac jsc" onClick={()=>{window.open("https://mail.google.com/mail/u/0/?fs=1&to=rahulpancholi3937@gmail.com&tf=cm","_blank")}}>
            <img src={M} alt="" />
            <p>Mail me</p>
          </div>
        </div>
        <div className="formdiv dfc jsc ac gap15">
          <div className="form dfc ac gap15">
            <p>Get In Touch</p>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value.toUpperCase())}
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
          <div
            className="error"
            style={{
              display: validation ? "flex" : "none",
              color: "red",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            Please Enter A vaild data to send Response{" "}
          </div>
          <div className="buttons dfjac gap15 wrap">
            <button onClick={mailsend} className="mail df ac jsb">
              <img src={Ms} alt="" />
              Mail Me{" "}
            </button>
            <button onClick={whatsappsend} className="whatsapp df ac jsb">
              <img src={Ws} alt="" /> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  /* padding: 2%; */
  /* min-height: 70vh; */
  background-color: ${({theme}) => theme.color.bg1};

  /* background-color: #161716; */
  /* background-color: #161716; */

  h2 {
    /* color: white; */
    font-size: 50px;
  }
  .title {
    color:${({theme}) => theme.color.heading};
    width: 100%;
    text-align: center;
    font-size: 20px;
  }

  .maincont {
    width: 90%;
    gap: 40px;

    .contlogo {
      color:${({theme}) => theme.color.text};
      cursor: pointer;
      text-align: center;
    }
    .numwsp {
      width: 100%;
      max-width: 500px;
    }

    .formdiv {
      width: 100%;
      max-width: 500px;
      border-radius: 15px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 20px;
    }

    .form {
      width: 100%;

      input {
        width: 100%;
        padding: 15px;
        outline: none;
        border: none;
        border-radius: 5px;
        /* background-color:#161716 ; */
        background-color: ${({theme}) => theme.color.bg3};
        color:${({theme}) => theme.color.text};
      }
      textarea {
        min-height: 100px;
        max-width: 100%;
        min-width: 100%;
        padding: 15px;
        outline: none;
        border: none;
        border-radius: 5px;
        /* background-color:#161716 ; */
        background-color: ${({theme}) => theme.color.bg3};
        color:${({theme}) => theme.color.text};

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .buttons {
      width: 100%;

      button {
        cursor: pointer;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: ${({theme}) => theme.color.bg3};
        color:${({theme}) => theme.color.text};
        font-weight: bold;

        &:hover {
          background-color: ${({theme}) => theme.color.bg2};
        }
      }
    }
  }
`;

export default Contact;
