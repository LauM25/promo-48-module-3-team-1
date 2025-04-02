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
    photo: "",
    image: "",
    name: "Elegant Workspace",
    slogan: "Diseños exclusivos",
    desc:
      "Tiene musho peligro caballo blanco caballo negroorl te voy a borrar el cerito está la cosa muy malar qué dise usteer llevame al sircoo.",
    repo: "",
    demo: "",
    technologies: "React JS - HTML - CSS",
    autor: "Emmelie Bjôrklund",
    job: "Full stack Developer",
  });
  const handleChangeImageAuthor = (value) => {
    setProjectInfo({
      ...projectInfo,
      photo: value,
    });
  };
  const handleChangeImageProject = (value) => {
    setProjectInfo({
      ...projectInfo,
      image: value,
    });
  };

  const handleChangeProjectName = (value) => {
    setProjectInfo({
      ...projectInfo,
      name: value,
    });
  };

  const handleChangeProjectSlogan = (value) => {
    setProjectInfo({
      ...projectInfo,
      slogan: value,
    });
  };

  const handleChangeProjectRepository = (value) => {
    setProjectInfo({
      ...projectInfo,
      repo: value,
    });
  };

  const handleChangeProjectDemo = (value) => {
    setProjectInfo({
      ...projectInfo,
      demo: value,
    });
  };

  const handleChangeProjectTechnologies = (value) => {
    setProjectInfo({
      ...projectInfo,
      technologies: value,
    });
  };

  const handleChangeProjectDescription = (value) => {
    setProjectInfo({
      ...projectInfo,
      desc: value,
    });
  };

  const handleChangeUserName = (value) => {
    setProjectInfo({
      ...projectInfo,
      autor: value,
    });
  };
  const handleChangeUserJob = (value) => {
    setProjectInfo({
      ...projectInfo,
      job: value,
    });
  };
  const handleSubmitProject = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        body: JSON.stringify(projectInfo),
      }
    })
      .then(res => res.json)
      .then(data => {
        console.log(data);
      })
  }

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
            onSaveProject={handleSubmitProject}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
