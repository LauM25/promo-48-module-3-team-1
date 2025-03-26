function Preview(props) {

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
                    <p className="card__job">{props.usJob}</p>
                    <h3 className="card__name">
                        {props.usName}
                    </h3>
                </div>

                <div className="card__project">
                    <h3 className="card__name">
                        {props.prName}
                    </h3>
                    <p className="card__slogan">
                        {props.prSlogan}
                    </p>
                    <h3 className="card__descriptionTitle">Product Description</h3>
                    <p className="card__description">
                        {props.prDescription}
                    </p>

                    <div className="card__technicalInfo">
                        <p className="card__technologies">
                            {props.prTechnologies}
                        </p>

                        <a
                            className="icon icon__www"
                            href={props.prDemo}
                            title="Haz click para ver el proyecto online"
                        >
                            Web link
                        </a>
                        <a
                            className="icon icon__github"
                            href={props.prRepository}
                            title="Haz click para ver el código del proyecto"
                        >
                            GitHub link
                        </a>
                    </div>
                </div>
            </article>
        </section>
    )
}



export default Preview;