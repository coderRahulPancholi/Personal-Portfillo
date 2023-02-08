import React, { useState } from "react";
import { Project_Data } from "../Data/Projects";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";

function About() {
  const [prev, setPrev] = useState([]);
  const [pvmode, setPvmode] = useState(false);

  const preview = (id) => {
    const pd = Project_Data.find((i, ind) => {
      return id === ind;
    });
    setPrev(pd);
    setPvmode(true);
  };

  return (
    <AWrapper>
      <div className="maincont">
        <div className="title">
          <h3>Projects </h3>
        </div>

        <div className="projects">
          <Swiper
            // slidesPerView={"2"}

            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            navigation={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {Project_Data.map((i, ind) => {
              return (
                <SwiperSlide
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <Project key={ind} onClick={() => preview(ind)}>
                    <button>{i.title}</button>
                  </Project>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div style={{ display: pvmode ? "flex" : "none" }} className="pf">
        <div>
          <img src={prev.img} alt="" />
          <div
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <h1>{prev.title}</h1>
            <button onClick={() => setPvmode(false)}>close</button>
          </div>
        </div>
      </div>
    </AWrapper>
  );
}

const AWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;

  /* height: calc(100vh - 100px); */

  .pf {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: azure;
    z-index: 999;
    justify-content: center;
    /* flex-direction: column; */

    div {
      width: 90%;
      max-width: 700px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    img {
      border: 1px solid black;
      border-radius: 1%;
      width: 90%;
      max-width: 700px;
      height: 35%;
      max-height: 500px;
    }
  }
  p {
    color: white;
  }

  .maincont {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px;
  }
  .title {
    width: 100%;
  }
  .projects {
    min-width: 100%;
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5% 0;
    border-radius: 10px;
  }
`;

const Project = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export default About;
