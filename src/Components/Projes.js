import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ProjectContaxt from "../Data/ProContaxt";
// import  Projects  from "../Data/Projects";
import { VscCode } from "react-icons/vsc";
import { VscLink } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";

export default function Projes(props) {
  const a = useContext(ProjectContaxt);

  useEffect(() => {
    a.getrepo();

    // eslint-disable-next-line
  }, [a.page]);

  return (
    <Wrapper className="wrapper" id="projects">
      <Maincontainer className="dfc ac ">
        <div className="title">
          <h3>Projects </h3>
          <p>
            I have created some cool website using my skills.Here some website
            with their preview links
          </p>
        </div>
        <Items className="df jss ac  wrap gap20">
          {a.repo.map((i, ind) => {
            return (
              <Item key={ind} className="df jsa as wrap gap10">
                {/* <div className="img">
                <img src="https://avatars.githubusercontent.com/u/104254064?v=4" alt="porject Images" style={{opacity:props.mode==="dark"?"50%":"100%"}}/>
                <img src={i.homepage} alt="porject Images" style={{opacity:props.mode==="dark"?"50%":"100%"}}/>
                

              </div> */}
                <div className="info dfc jss ac gap15">
                  <h5>{i.name.toUpperCase()}</h5>
                  <div className="dis">
                    {/* <p><b>Tech Use:- </b>{i.technologyuse}</p> */}
                    <span className="dfc   gap5 ">
                      
                      <b>Discription:- </b>
                      <p>{i.description}  </p>
                    </span>
                    {/* <span className="df  gap5 ">  <p><b>Views:- </b>{i.watchers_count}</p></span>
                <span className="df  gap5 "> <p><b>Star:- </b>{i.stargazers_count}</p></span>
               <span className="df  gap5 ">  <p><b>Date:- </b>{i.created_at}</p></span> */}
                  </div>

                  <div className="btns df ac jc">
                    <button
                      onClick={() => {
                        window.open(i.homepage, "_blank");
                      }}
                      className=" df ac jsb"
                    >
                      <VscLink size={20} />
                      Visit
                    </button>
                    <button
                      onClick={() => {
                        window.open(i.html_url, "_blank");
                      }}
                      className=" df ac jsb "
                    >
                      <VscCode size={20} />
                      Code
                    </button>
                  </div>
                </div>
              </Item>
            );
          })}
        </Items>
        {a.page === 5 ? (
          <button className="morebtn dfc ac jc jsb" onClick={a.viewall}>
            View All <VscChevronDown />{" "}
          </button>
        ) : (
          ""
        )}
      </Maincontainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* min-height: 70vh;  */
  width: 100vw;

  background-color: ${({ theme }) => theme.color.bg1};

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.text};
    transition: color 0.25s linear;
    font-style: italic;
  }

  .title {
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
  padding: 15px;
`;
const Item = styled.div`
  flex: 1;
  flex-basis: 300px;
  /* width: 90%; */
  /* max-width: 800px; */
  height: 250px;
  /* height:auto; */
  border-radius: 15px;
  /* background-color: #2e3033; */
  background-color: ${({ theme }) => theme.color.bg3};
  padding: 1%;
  position: relative;
  transition: 0.2s;
  animation: identifier 0.2s ease-out 1;
  margin: 5px;

  @keyframes identifier {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  &:hover {
    transform: scale(1.03);
  }

  .dis {
    width: 90%;
    max-width: 500px;
    overflow: hidden;
    

    
  }

  .img {
    flex: 1;
    flex-basis: 400px;
    height: 100%;

    img {
      width: 100%;
      max-height: 500px;
      border-radius: 10px;
    }
  }

  .info {
    width: 50%;
    flex: 1;
    flex-basis: 400px;
    height: 100%;
    padding: 7px;

    h5 {
      /* text-align: center; */

      width: 100%;
      max-width: 500px;
      font-size: 20px;
      color: ${({ theme }) => theme.color.white};
      /* font-weight: 200; */
    }

   

    .btns {
      width: 90%;
      text-align: center;
      position: absolute;
      bottom: 1%;

      button {
        background-color: ${({ theme }) => theme.color.btbg};
        cursor: pointer;
        gap: 5px;

        min-width: 50px;
        padding: 7px;
        margin: 5px;
        border: none;
        border-radius: 5px;

        color: white;
        font-weight: bold;

        &:hover {
          background-color: #4969ad;
        }
      }
    }
  }
`;
