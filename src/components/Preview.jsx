function Preview({ project }) {
  //   console.log(project);
  return (
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
          <p className="card__job">
            {project.userJob || "Full stack Developer"}
          </p>
          <h3 className="card__name">
            {project.userName || "Emmelie Bjôrklund"}
          </h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">
            {project.projectName || "Elegant Workspace"}
          </h3>
          <p className="card__slogan">
            {project.projectSlogan || "Diseños exclusivos"}
          </p>
          <h3 className="card__descriptionTitle">Product Description</h3>
          <p className="card__description">
            {project.projectDescription ||
              "Tiene musho peligro caballo blanco caballo negroorl te voy a borrar el cerito está la cosa muy malar qué dise usteer llevame al sircoo."}
          </p>

          <div className="card__technicalInfo">
            <p className="card__technologies">
              {project.projectTechnologies || "React JS - HTML - CSS"}
            </p>

            <a
              className="icon icon__www"
              href={project.projectDemo}
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={project.projectRepository}
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Preview;
