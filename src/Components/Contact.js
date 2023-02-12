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


  const whatsappsend=()=>{
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
   
    if(name.length>1 && email.length>5 && number.length === 10 && Message.length >10){
        window.open(url,"_blank")
        setName("")
        setNumber("")
        setEmail("")
        setMessage("")
    }
    else{
        setValidation(true)
        // alert("enter data")
    }
    setTimeout(()=>{
        setValidation(false)
    },5000)

  }
  const mailsend=()=>{
    let mailurl = 
    "https://mail.google.com/mail/?view=cm&fs=1&to=rahulpancholi3937@gmail.com&su=NewQuery"+
    "&body="+
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
   
    if(name.length>1 && email.length>5 && number.length === 10 && Message.length >10){
        window.open(mailurl,"_blank")
        setName("")
        setNumber("")
        setEmail("")
        setMessage("")

    }
    else{
        setValidation(true)
        // alert("enter data")
    }
    setTimeout(()=>{
        setValidation(false)
    },5000)

  }

  

  return (
    <Wrapper>
      <div className="title">
        <h3>Contact Me </h3>
        <p>Feel Free to Contact me </p>
      </div>
      <div className="maincont">
        <div className="contactdiv numwsp">
        <div className="contlogo">
            <img src={P} alt="" />
            <p>Call Me</p>
        </div>
        <div className="contlogo">
            <img src={W} alt="" />
            <p>Chat With Me</p>
        </div>
        <div className="contlogo">
            <img src={M} alt="" />
            <p>Mail me</p>
        </div>
          
        
        </div>
        <div className="formdiv">
          <div className="form">
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
          <div className="error" style={{display:validation?"flex":"none",color:"red",fontSize:"15px",textAlign:"center"}}>Please Enter A vaild data to send Response </div>
          <div className="buttons">

              <button onClick={mailsend} className="mail"><img src={Ms} alt="" />Mail Me </button>
              <button onClick={whatsappsend} className="whatsapp"><img src={Ws} alt="" /> WhatsApp </button>
             
            

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
      cursor: pointer;
      text-align: center;
      
    }
    .numwsp {
      width: 100%;
      max-width: 500px;
      display: flex;
      flex-wrap: wrap;
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
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      padding: 20px;
      
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
        /* background-color:#161716 ; */
        background-color: #252625;
        color: white;
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
        background-color: #252625;
        color: white;
      }


    }
    .buttons{
        width: 100%;
        display: flex;
        justify-content: center;
      align-items: center;
      gap: 15px;


      button{
        cursor: pointer;
        padding: 10px;
        
        border:none;
        border-radius: 10px;
        display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #252625;
        color: white;
        font-weight: bold;
        
       
        &:hover{
            background-color: #2d2e2d;
        }
      }
      /* .mail{
        background-color: #e8413a;
      }
      .whatsapp{
        background-color:#1ec149;

      } */




    }
  }
`;

export default Contact;
