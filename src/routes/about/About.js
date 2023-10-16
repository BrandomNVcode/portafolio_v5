import { Footer } from "../../components/index.js";
import Certifications from "./Certifications.js";
import Languages from "./Languages.js";
//import Stack from "./Stack.js";
import Education from "./Education.js";
import WorkExperience from "./WorkExperience.js";
//import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop.js";
import { useEffect } from "react";
import StackV2 from "./StackV2.js";

const About = () => {

  useEffect(() => {
    document.title = "Sobre mí | Brandom Noriega";
  })

  return (
    <article className="about-main">
      <AboutMe />
      <StackV2 />
      {/*<DownloadResume />*/}
      <WorkExperience />
      <Education />
      <Languages />
      {/*<DownloadResume />*/}
      <Certifications />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default About;
