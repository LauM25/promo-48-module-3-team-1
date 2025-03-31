import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";

//inputs

function App() {
  /*const [projectName, setProjectName] = useState("Elegant Workspace");
  const [projectSlogan, setProjectSlogan] = useState("Diseños exclusivos");
  const [projectRepository, setProjectRepository] = useState("");
  const [projectDemo, setProjectDemo] = useState("");
  const [projectTechnologies, setProjectTechnologies] = useState(
    "React JS - HTML - CSS"
  );
  const [projectDescription, setProjectDescription] = useState(
    "Tiene musho peligro caballo blanco caballo negroorl te voy a borrar el cerito está la cosa muy malar qué dise usteer llevame al sircoo."
  );
  const [userName, setUserName] = useState("Emmelie Bjôrklund");
  const [userJob, setUserJob] = useState("Full stack Developer");
  */

  const [projectInfo, setProjectInfo] = useState({
    projectName: "Elegant Workspace",
    projectSlogan: "Diseños exclusivos",
    projectDescription:
      "Tiene musho peligro caballo blanco caballo negroorl te voy a borrar el cerito está la cosa muy malar qué dise usteer llevame al sircoo.",
    projectRepository: "",
    projectDemo: "",
    projectTechnologies: "React JS - HTML - CSS",
    userName: "Emmelie Bjôrklund",
    userJob: "Full stack Developer",
  });

  const handleChangeProjectName = (value) => {
    setProjectInfo({
      ...projectInfo,
      projectName: value,
    });
  };

  const handleChangeProjectSlogan = (value) => {
    setProjectInfo({
      ...projectInfo,
      projectSlogan: value,
    });
  };

  const handleChangeProjectRepository = (value) => {
    setProjectInfo({
      ...projectInfo,
      projectRepository: value,
    });
  };

  const handleChangeProjectDemo = (value) => {
    setProjectInfo({
      ...projectInfo,
      projectDemo: value,
    });
  };

  const handleChangeProjectTechnologies = (value) => {
    setProjectInfo({
      ...projectInfo,
      projectTechnologies: value,
    });
  };

  const handleChangeProjectDescription = (value) => {
    setProjectInfo({
      ...projectInfo,
      projectDescription: value,
    });
  };

  const handleChangeUserName = (value) => {
    setProjectInfo({
      ...projectInfo,
      userName: value,
    });
  };
  const handleChangeUserJob = (value) => {
    setProjectInfo({
      ...projectInfo,
      userJob: value,
    });
  };

  return (
    <>
      <div className="container">
        <Header />

        <main className="main">
          <section className="hero">
            <h2 className="title">Proyectos molones</h2>
            <p className="hero__text">
              Escaparate en línea para recoger ideas a través de la tecnología
            </p>
            <a className="button--link" href="./">
              Ver proyectos
            </a>
          </section>

          <Preview project={projectInfo} />
          <Form
            onInputProjectName={handleChangeProjectName}
            onInputProjectSlogan={handleChangeProjectSlogan}
            onInputProjectRepository={handleChangeProjectRepository}
            onInputProjectDemo={handleChangeProjectDemo}
            onInputProjectTechnologies={handleChangeProjectTechnologies}
            onInputProjectDescription={handleChangeProjectDescription}
            onInputUserName={handleChangeUserName}
            onInputUserJob={handleChangeUserJob}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
