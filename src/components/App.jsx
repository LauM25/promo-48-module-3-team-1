import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";

//inputs

function App() {
  /* const [avatar, setAvatar] = useState("");
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  }; */

  const [projectInfo, setProjectInfo] = useState({
    projectImgAuthor: "",
    projectImgProject: "",
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
  const handleChangeImageAuthor = (value) => {
    setProjectInfo({
      ...projectInfo,
      projectImgAuthor: value,
    });
  };
  const handleChangeImageProject = (value) => {
    setProjectInfo({
      ...projectInfo,
      projectImgProject: value,
    });
  };

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
            onInputAuthorImage={handleChangeImageAuthor}
            onInputProjectImage={handleChangeImageProject}
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
