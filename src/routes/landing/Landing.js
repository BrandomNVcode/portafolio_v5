import AboutPreview from "./AboutPreview";
import HeaderPreview from "./HeaderPreview";
import PortfolioPreview from "./PortfolioPreview";
//import ContactPreview from "./ContactPreview";
import { Footer } from "../../components";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";
import { Estudios } from "../education/Estudios";

const Mainpage = () => {

  useEffect(() => {
    document.title = "Brandom Noriega | Personal Portfolio";
  })
  
  return (
    <article className="main-page">
      <HeaderPreview />
      <AboutPreview />
      <PortfolioPreview />
      {/*<ContactPreview />*/}
      <Estudios />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default Mainpage;
