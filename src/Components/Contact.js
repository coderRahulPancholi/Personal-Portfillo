import React, { useState } from "react";
import styled from "styled-components";
import W from "../Assests/Whatsapp.svg";
// import M from "../Assests/Mail.svg";
// import P from "../Assests/Phone.svg";
import Ms from "../Assests/mailsmall.svg";
import Ws from "../Assests/whatsappsmall.svg";
// import Gh from "../Assests/Gitbig.svg";

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
          <div className="contlogo dfc ac jsc fx1" onClick={()=>{window.open("tel:+91-9358393743","_blank")}}>
            {/* <img src={P}  alt="" /> */}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwElEQVR4nO1ZW4hcRRC98f0A3wZFfGuIs9N114zGgBgVRRRB8jCKIPkQWcSwc6vuRJLFj1Hjh4+o+JGfoAb8UBERVExAiSsiced23dkl7ofEGDEI8S1xlexq3JW6O9nszPTc18yd8SMF/TPcrjmn+nR1dbVlHbOjdvNw+YT+avFqm/Fu8N37lY8DoGkteLS63yteX+ANZ1r/N+uvlnLAWAZNn4HGKWCaCR+4FzRuzbOzIjdePqknoNe8veZ4pZ0HFJMXDTh0/KI0PV9gvLBr4MGnO4HpqzaBN67KIWB6FsZKp2cGXPSrGN/sLHBqJLLf1s4tHQef94sQaDdT8BQMxXRYaffxjoEHdm4QrXYDPMwfGrdJVmsLvK1pKWia6Dp4nluN160Za0G6yFfcRcD4a6/AwxESGp9MDP7S4fIpirHaa/AQSImmlefek4iAYnwhhkanlKadoGky+1Wgn3K76JzYGUcx/hPh8H0pGeR726cHu7MSuDUWAWDa3toR7le+s7xuwoy1ICgjsifwb57dxVHSWSKaC9HjWuM8v1SQP4gCYTPeoTy8onaaF0HjFmD6GBgPxM5KEQReCXUyVlrYcq7G19oB0F8dPF95eLvStCdkFaYWV9ada3SwbBedqpgOhkR/OjrtRsmApm2NN0YEsRoRhEfNEz3nrkgJjDpnhfzxkhgrcFgxPdbKR1+V7EgfGneYI6jxuRgAlpnmFnjgNND4Rfhc/EQARkR/cwwCfxrvEcD4aYxM8EgL8ltC5n0DvrMqDLhYgQdOBKYf4mxmYyDiZQL8sHGe2r3xbJGG4ds/lKYNV+0ZPNmKYeA7q+KAD6TMeF/dZPmTWJM1TS4dGTyjjgDjTYk2W400ML0oGz/e+dPku34fFdg9L8HkOmBCSKJt0Pw+qanmfyvlscxXjD/Xvtsuv+e4eIl5FVsqYVMdgT7PvTgBgfHGEheYhlp8PzQXdcnxjF82y4FWBqsRG3wQnM11BORwSOJA2iaG6nWfcR/47m3A+F6YLCHGKR5aYktaCi0hmiNQadK1xnuTgGhraNdt3lgav0/kxKPVqVJxB0aenRVNBGaLqiSOcG/jgTJbDCaTA6QY0kwzEMBNSR2ZygLF9GqW4JWm36Wx1kTAZro1BYGDucr6C+oCMVZaKPeG7Ajgu1aro1yubimcvtHoS65/4DkPAeMzSiNJoRg0eg3nBSQccgM0Eqhp+OVUTplWtnRaLy9si4CmidD2Yx+vvzLqPmx2jL/BSOnyKAK1k3g8PQF8KTJKIolU2mQaiVO4BW8HqQjgIXuULookYI86lymmv9KRwHeMGaIpSPhRigA9FQl+3h9szLKnqRjXJfT5tVx5Ez5g0M60JBTTsFzSjcGZ7Uh8l2DjTuZ9vM5KapLflaZvU6/E7O2qeISINMKUxg9SyPLhxODnolVxFymNP7ZBYm4DppxXtto1Sa3detyAo7KZVpqesDplkr4U0+ddAj8hD4hWp00yCzA+rZj+zgq8YvIi+5/tWp/vXCPNpc6CxwNBy2amfJzVLZOXd6XxrfQbNAC+W86ERDk+i+fX4I1A4zY5cMK7C8GTlVychqK6dD0zuaWJzOSBMOhE+M5y8NxrpXXTO1THzMrM/gOAZaCSlE0aoAAAAABJRU5ErkJggg==" alt="Call me"/>
            <p>Call Me</p>
            
          </div>
          <div className="contlogo dfc ac jsc fx1" onClick={()=>{window.open("https://api.whatsapp.com/send?phone=919358393743","_blank")}}>
            <img src={W} alt="" />
            
            <p>Chat With Me</p>
           
          </div>
          <div className="contlogo dfc ac jsc fx1" onClick={()=>{window.open("https://mail.google.com/mail/u/0/?fs=1&to=rahulpancholi3937@gmail.com&tf=cm","_blank")}}>
            {/* <img src={M} alt="" /> */}
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtUlEQVR4nO1Y2WsTQRzefyBnI2qaTWZQ6J+SpK221SIqlBbxxScRRCj1PihVq03b3ffGpLZNtSUVvBCffBFEEG+lire1SZMs+lZ+MrNHjUnYTbKbzcN88D3tHN83v2OW4TgGBgYGBgaGJsM24Q+PBGkeCVIBixLYSSRrWEBivs2weCxIGbuF41JmiTZdA6HRlXQTiIVyDI2uLOoacHWn1rcefWq7WPwf/YPPwdWTWtc14AhPAaFv4D6gWNZ24Wh8DXwHH1JNhLoG/Mdfg7Nzmg529aQgcP6jbeL5C5/AvWueanF2JME/+ELfAM21yz/Bu29JnhiJw+bDjwELhcaJFyQgaeyMXqMaPHvTELz4nX4zZICGTihQ4Y5wXFlkiRqzWnzoyip4++7IKROZgk2HHgGazGvfDRtQ2XpmGVxdc3I0OqfBP/TKMvGtJ9+Cc8d1OX13zkDg1LuSMVUboKcyloGW/rtaIZGiwhNrpglHEzl60uTEyfrevtsQuvqr7NiaDGh5eewZOKMJuom79ybww1/qFh8c+QaePYtyhKMJ2HLkCWCxcr3VbkAhP/IVPL3Khu0JWmzEXK293dGelA9k9w3ghz/rzqnbAA35pBJyJaVa+u8BGssYT5lYFnwHHhSlJBrPGZprigHtBE+82Si6rhkInH6vOydwdhncalPoSIJ/6GVVUTPVgHZn7L9Vse2VtOWI2pbTELr0o+q0M90AZRlxwX/EyRejYjIcr2gS22ZATY9zH8DdnSq6MwjVXxPyjYypZw/OSgPlClQr9IHqCh3bZaC4RSY2Wq1J63KNMqDeGYRmrsk10oAV5JgBkUUALE0h1ARvQbgCkSDljNTAgt1CcSUKhVn9CIj5NvKIZLtYsYSr22O/A5zh1zlRmkOilLdbOCIahMKsYfEMDAwMDAwMXOPwF4zMSWyG+wnZAAAAAElFTkSuQmCC"alt="Mail Me"/>
            <p>Mail me</p>
          </div>
          <div className="contlogo dfc ac jsc fx1" onClick={()=>{window.open("https://goo.gl/maps/WLV1C4iL6W74hatu6","_blank")}}>
          <img src="data:image/png;base64,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" alt="Map"/>
            
            <p>Locate Me</p>
          </div>
        </div>
        <div className="formdiv dfc jsc ac gap15">
          <div className="form dfc ac gap20">
            <p>Get In Touch With Me</p>
            <div className="inputbox"> 
            <input
              type="text"
             required
              value={name}
              onChange={(e) => setName(e.target.value.toUpperCase())}
              className="input"
            /> <span>Name</span>
            </div>
            <div className="inputbox"> 
            <input
              type="text"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="input"
            /><span>Mobile Number</span>
            </div>
            <div className="inputbox"> 
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            /><span>Email</span></div>
            <div className="inputbox">
            <textarea
              type="text"
             required
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              className="input"
            /><span>Your Message</span>
            </div>
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
      /* background-color: ${({theme}) => theme.color.bg2}; */
    }
    .numwsp {
      /* min-height: 50; */
      padding: 50px  0;
      width: 100%;
      max-width: 500px;
    }
    

    .formdiv {
      width: 100%;
      max-width: 500px;
      border-radius: 15px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 15px 0px;
      padding: 20px;
    }

    .form {
      width: 100%;
.inputbox{
width: 100%;
position: relative;


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

      span{
        position: absolute;
        left:0;
        padding: 15px;
        /* min-height: 100px; */
        border-radius: 5px;
        pointer-events: none;
        letter-spacing: 1px;
        transition: 0.5s;
        font-weight: 100;
        font-size: 15px;
      }
    }
.input:focus ~ span ,
.input:valid ~ span 

{
transform: translateY(-10px);
background-color: ${({theme}) => theme.color.btbg};

padding: 0px 15px;
left: 10px;
font-size: 12px;


}
.input:focus ,
.input:valid 
{
  /* border: 0.2px solid ${({theme}) => theme.color.btbg}; */

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


  @media screen and (max-width:650px){
    .numwsp{
      flex-direction: column;
      gap: 25px;
    }
    
  }
`;

export default Contact;
