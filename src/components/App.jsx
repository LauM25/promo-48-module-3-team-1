import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";




//inputs

function App() {
  const [projectName, setProjectName] = useState("Elegant Workspace");
  const [projectSlogan, setProjectSlogan] = useState("Diseños exclusivos");
  const [projectRepository, setProjectRepository] = useState("");
  const [projectDemo, setProjectDemo] = useState("");
  const [projectTechnologies, setProjectTechnologies] = useState("React JS - HTML - CSS");
  const [projectDescription, setProjectDescription] = useState("Tiene musho peligro caballo blanco caballo negroorl te voy a borrar el cerito está la cosa muy malar qué dise usteer llevame al sircoo.");
  const [userName, setUserName] = useState("Emmelie Bjôrklund");
  const [userJob, setUserJob] = useState("Full stack Developer");

  const handleChangeProjectName = (value) => {
    setProjectName(value);
 console.log(value);
  };
  const handleChangeProjectSlogan = (value) => {
    setProjectSlogan(value);
  };
  const handleChangeProjectRepository = (value) => {
    setProjectRepository(value);
  };
  const handleChangeProjectDemo = (value) => {
    setProjectDemo(value);
  };
  const handleChangeProjectTechnologies = (value) => {
    setProjectTechnologies(value);
  };
  const handleChangeProjectDescription = (value) => {
    setProjectDescription(value);
  };
  const handleChangeUserName = (value) => {
    setUserName(value);
  };
  const handleChangeUserJob = (value) => {
    setUserJob(value);
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

   <Preview
   prName={projectName}
   prSlogan={projectSlogan}
   prRepository={projectRepository}
   prDemo={projectDemo}
   prTechnologies={projectTechnologies}
   prDescription={projectDescription}
   usName={userName}
   usJob={userJob}/>
          <Form 
          onInputProjectName={handleChangeProjectName}
          onInputProjectSlogan={handleChangeProjectSlogan}
          onInputProjectRepository={handleChangeProjectRepository}
          onInputProjectDemo={handleChangeProjectDemo}
          onInputProjectTechnologies={handleChangeProjectTechnologies}
          onInputProjectDescription={handleChangeProjectDescription}
          onInputUserName={handleChangeUserName}
          onInputUserJob={handleChangeUserJob}/>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
