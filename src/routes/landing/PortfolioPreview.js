import ProjectsPreview from "./ProjectsPreview";

const PortfolioPreview = () => {
  return (
    <article id="portfolio" className="portfolio">
      <section className="portfolio-text">
        <h2 className="title-font pink-text h2-tag">Portafolio</h2>
        <p className="white-text p-tag">
          He abordado numerosos proyectos de diversos cursos y desafíos, 
          todos destinados a dominar los fundamentos que consolidan mis 
          conocimientos. No dudes en explorarlos en mi {" "}
          <span>
            <a
              href="https://github.com/BrandomNVcode"
              className="pink-text"
              target="_blank"
              rel="noreferrer"
            >
               Github
            </a>
          </span>
        </p>
      </section>
      <ProjectsPreview />
    </article>
  );
};

export default PortfolioPreview;
