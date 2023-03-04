// import portfillo from "../Assests/youtube.png"
// import yt from "../Assests/youtubeapp.jpg"
// import text from "../Assests/texter.jpg"
// import todolist from "../Assests/todolist.jpg"
// import weatherapp from "../Assests/weatherapp.jpg"
// import pixelg from "../Assests/pixelgallery.jpg"
// export const Project_Data = [

//     {
//         title:"Portfillo",
//         img:portfillo,
//         technologyuse:"ReactJs,Html,Css",
//         discription:"This is a personal profile Website. Use for Self Introduction",
//         link:"",
//         code:""

//     },
//     {
//         title:"Youtube Clone",
//         img:yt,
//         technologyuse:"ReactJs,Html,Css",
//         discription:"This is a personal profile Website. Use for Self Introduction",
//         link:"https://youtubeclonebyrahul.netlify.app/",
//         code:""

//     },
//     {
//         title:"Text Utilites",
//         img:text,
//         technologyuse:"ReactJs,Html,Css",
//         discription:"This is a personal profile Website. Use for Self Introduction",
//         link:"https://rahulo7.github.io/Texter/",
//         code:""
//     },
//     {
//         title:"Pixel Gallery",
//         img:pixelg,
//         technologyuse:"ReactJs,Html,Css",
//         discription:"This is a personal profile Website. Use for Self Introduction",
//         link:"https://imagegallerybyrahul.netlify.app/",
//         code:""
//     },
//     {
//         title:"Weather app",
//         img:weatherapp,
//         technologyuse:"ReactJs,Html,Css",
//         discription:"This is a personal profile Website. Use for Self Introduction",
//         link:"https://weatherappbyrahul.netlify.app/",
//         code:""
//     },
//     {
//         title:"Todo List",
//         img:todolist,
//         technologyuse:"ReactJs,Html,Css",
//         discription:"This is a personal profile Website. Use for Self Introduction",
//         link:"https://todolistbyrs.netlify.app/",
//         code:""
//     },

// ]

// contaxt

import axios from "axios";
import React  from "react";
import { useState } from "react";

import ProjectContaxt from "./ProContaxt";

const ProjectState = (props) => {
  const [repo, setRepo] = useState([]);
  const [page, setPage] = useState(5);

  const getrepo = async () => {
    await axios({
      method: "GET",
      url: `https://api.github.com/users/coderRahulPancholi/repos?query=page=1&per_page=${page}`,
    }).then((res) => {
      setRepo(res.data);
      console.log(res);
    });
  };

  const viewall = () => {
    setPage(100);
  };

  return (
    <ProjectContaxt.Provider value={{ repo, getrepo, viewall, page }}>
      {props.children}
    </ProjectContaxt.Provider>
  );
};

export default ProjectState;
