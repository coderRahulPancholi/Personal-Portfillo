
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
      url: `https://api.github.com/users/coderRahulPancholi/repos`,
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
