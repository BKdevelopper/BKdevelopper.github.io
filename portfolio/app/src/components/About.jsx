import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            En savoir plus
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              Je suis <span className="text-primary">Bilal Kezadri,</span> un 
              développeur web
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            Mon objectif principal est de devenir un développeur web full-stack compétent en travaillant sur des projets stimulants et en collaborant avec des équipes talentueuses. 
            Je suis toujours prêt à apprendre de nouvelles technologies et à explorer de nouvelles façons de résoudre les défis de développement web.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            Je suis heureux de partager avec vous mes premiers projets de développement web sur ce site portfolio. 
            Je vous invite à les consulter pour en savoir plus sur mes compétences et mon style de travail. 
            Si vous avez des questions ou souhaitez discuter de votre prochain projet, n'hésitez pas à me contacter.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Nom:</span>Bilal Kezadri
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:bilalkezadri@gmail.com">bilalkezadri@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>25
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">Lieu:</span>Caen,
                  France
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Télécharger le CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        {/* <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>2</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Mois d'Expérience
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>250</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>15</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projets effectué
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>38</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
