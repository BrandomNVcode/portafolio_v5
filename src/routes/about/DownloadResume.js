import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/BrandomNoriegaVera_CV.pdf";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" style={{display: 'flex', color: '#fd1056'}} href={Resume} download="BrandomNoriega">
        <img
          src={DownloadIcon}
          alt="Resume download button"
          className="download-img"
        />
        Descargar CV
      </a>
    </section>
  );
};

export default DownloadResume;
