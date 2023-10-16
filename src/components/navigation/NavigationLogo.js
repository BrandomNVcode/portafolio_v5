import { NavLink } from "react-router-dom";
import miLogo from "../../assets/images/portfolio/mylogo.png";
import ScrollToTop from "../../helpers/ScrollToTop";

const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/"
      className="logo-section"
      onClick={() => {
        ScrollToTop();
        props.closeMenu();
      }}
    >
      <img src={miLogo} alt="logo" style={{marginTop: 50, marginBottom: 30}}></img>
    </NavLink>
  );
};

export default NavigationLogo;
