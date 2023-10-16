import { Link } from "react-router-dom";
import DownloadResume from "../about/DownloadResume";

const HeaderPreview = () => {
  return (
    <article id="inicio" className="header">
      <h1 className="header-font white-text h1-tag">
        Hola, soy <br></br>
        <em className="pink-text">Brandom Noriega,</em>
        <br></br>desarrollador web
      </h1>
      <p className="gray-text p-tag">{`<Front End /> <Back End />`}</p>

      {/*<Link className="pink-text" style={{width: 280}} to="/portfolio">
        Checa mi portafolio
  </Link>*/}

      <div>
        <DownloadResume />
      </div>
    </article>
  );
};

export default HeaderPreview;
