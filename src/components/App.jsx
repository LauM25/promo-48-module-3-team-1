import "../scss/App.scss";
import logoAdalab from "../images/adalab.png";
import companyLogo from "../images/laptop-code-solid.svg";
import { useState } from "react";

//inputs

function App() {
  const [projectName, setProjectName] = useState("");
  const [projectSlogan, setProjectSlogan] = useState("");
  const [projectRepository, setProjectRepository] = useState("");
  const [projectDemo, setProjectDemo] = useState("");
  const [projectTechnologies, setProjectTechnologies] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [userName, setUserName] = useState("");
  const [userJob, setUserJob] = useState("");

  const handleChangeProjectName = (event) => {
    setProjectName(event.target.value);
  };
  const handleChangeProjectSlogan = (event) => {
    setProjectSlogan(event.target.value);
  };
  const handleChangeProjectRepository = (event) => {
    setProjectRepository(event.target.value);
  };
  const handleChangeProjectDemo = (event) => {
    setProjectDemo(event.target.value);
  };
  const handleChangeProjectTechnologies = (event) => {
    setProjectTechnologies(event.target.value);
  };
  const handleChangeProjectDescription = (event) => {
    setProjectDescription(event.target.value);
  };
  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleChangeUserJob = (event) => {
    setUserJob(event.target.value);
  };
  return (
    <>
      <div className="container">
        <header className="header">
          <a
            className="header__brand"
            href="./"
            title="Haz click para volver a la página inicial"
          >
            <img
              className="header__companyLogo"
              src={companyLogo}
              alt="Logo proyectos molones"
            />
            <h1 className="header__title">Proyectos molones</h1>
          </a>
          <img className="logoSponsor" src={logoAdalab} alt="Logo Adalab" />
        </header>

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

          <section className="preview">
            <div className="projectImage"></div>
            <article className="card">
              <h2 className="card__projectTitle">
                <span className="card__projectTitle--text">
                  Personal project card
                </span>
              </h2>

              <div className="card__author">
                <div className="card__authorPhoto"></div>
                <p className="card__job">{userJob || "Full stack Developer"}</p>
                <h3 className="card__name">
                  {userName || "Emmelie Bjôrklund"}
                </h3>
              </div>

              <div className="card__project">
                <h3 className="card__name">
                  {projectName || "Elegant Workspace"}
                </h3>
                <p className="card__slogan">
                  {projectSlogan || "Diseños exclusivos"}
                </p>
                <h3 className="card__descriptionTitle">Product Description</h3>
                <p className="card__description">
                  {projectDescription ||
                    "Tiene musho peligro caballo blanco caballo negroorl te voy a borrar el cerito está la cosa muy malar qué dise usteer llevame al sircoo."}
                </p>

                <div className="card__technicalInfo">
                  <p className="card__technologies">
                    {projectTechnologies || "React JS - HTML - CSS"}
                  </p>

                  <a
                    className="icon icon__www"
                    href={projectDemo}
                    title="Haz click para ver el proyecto online"
                  >
                    Web link
                  </a>
                  <a
                    className="icon icon__github"
                    href={projectRepository}
                    title="Haz click para ver el código del proyecto"
                  >
                    GitHub link
                  </a>
                </div>
              </div>
            </article>
          </section>
          <form className="addForm">
            <h2 className="title">Información</h2>
            <fieldset className="addForm__group">
              <legend className="addForm__title">
                Cuéntanos sobre el proyecto
              </legend>
              <input
                className="addForm__input"
                type="text"
                onChange={handleChangeProjectName}
                name="name"
                id="name"
                placeholder="Nombre del proyecto"
              />
              <input
                className="addForm__input"
                type="text"
                onChange={handleChangeProjectSlogan}
                name="slogan"
                id="slogan"
                placeholder="Slogan"
              />
              <div className="addForm__2col">
                <input
                  className="addForm__input"
                  type="url"
                  onChange={handleChangeProjectRepository}
                  name="repo"
                  id="repo"
                  placeholder="Repositorio"
                />
                <input
                  className="addForm__input"
                  type="url"
                  onChange={handleChangeProjectDemo}
                  name="demo"
                  id="demo"
                  placeholder="Demo"
                />
              </div>
              <input
                className="addForm__input"
                type="text"
                onChange={handleChangeProjectTechnologies}
                name="technologies"
                id="technologies"
                placeholder="Tecnologías"
              />
              <textarea
                className="addForm__input"
                type="text"
                onChange={handleChangeProjectDescription}
                name="desc"
                id="desc"
                placeholder="Descripción"
                rows="5"
              ></textarea>
            </fieldset>

            <fieldset className="addForm__group">
              <legend className="addForm__title">
                Cuéntanos sobre la autora
              </legend>
              <input
                className="addForm__input"
                type="text"
                onChange={handleChangeUserName}
                name="autor"
                id="autor"
                placeholder="Nombre"
              />
              <input
                className="addForm__input"
                type="text"
                onChange={handleChangeUserJob}
                name="job"
                id="job"
                placeholder="Trabajo"
              />
            </fieldset>

            <fieldset className="addForm__group--upload">
              <label htmlFor="image" className="button">
                Subir foto del proyecto
              </label>
              <input
                className="addForm__hidden"
                type="file"
                name="image"
                id="image"
              />
              <label htmlFor="photo" className="button">
                Subir foto de la autora
              </label>
              <input
                className="addForm__hidden"
                type="file"
                name="photo"
                id="photo"
              />
              <button className="button--large">Guardar proyecto</button>
            </fieldset>
          </form>
        </main>

        <footer className="footer">
          <img className="logoSponsor" src={logoAdalab} alt="Logo Adalab" />
        </footer>
      </div>
    </>
  );
}

export default App;
