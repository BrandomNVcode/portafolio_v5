import { NavLink } from "react-router-dom";
import ScrollToTop from "../../helpers/ScrollToTop";

const activeNavLink = ({ isActive }) =>
  "gray-text nav-link" + (isActive ? " active" : "");

const NavigationMenu = (props) => {
  return (
    <section className="menu-links">
      <NavLink
        to="#inicio"
        className={({ isActive }) =>
          "gray-text nav-link" + (isActive ? " main-active" : "")
        }
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}
      >
        Inicio
      </NavLink>
      <NavLink
        to="#about"
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}
        className={activeNavLink}
      >
        Sobre mí
      </NavLink>
      <NavLink
        to="#portfolio"
        className={activeNavLink}
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}
      >
        Portafolio
      </NavLink>
      <NavLink
        to="#estudios"
        className={activeNavLink}
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}
      >
        Estudios
      </NavLink>
    </section>
  );
};

export default NavigationMenu;
