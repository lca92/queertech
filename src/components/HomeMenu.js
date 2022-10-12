import { Link } from "react-router-dom";
import "./HomeMenu.css";

const HomeMenu = () => {
  return (
    <div>
      <nav className="homeMenu">
        <ul>
          <div className="homePrincipal">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>for (queer in tech)</li>
            </Link>
          </div>

          <div className="accountPrincipal">
            <Link to="/account" style={{ textDecoration: "none" }}>
              <li>Cadastro de Profissional</li>
            </Link>
          </div>

          <div className="newProjectPrincipal">
            <Link to="/new-project" style={{ textDecoration: "none" }}>
              <li>Cadastro de Projeto</li>
            </Link>
          </div>

          <div className="searchPrincipal">
            <Link to="/search" style={{ textDecoration: "none" }}>
              <li>Buscar</li>
            </Link>
          </div>

          <div className="techPersonPrincipal">
            <Link to="/tech-person" style={{ textDecoration: "none" }}>
              <li>Personalidades</li>
            </Link>
          </div>

          <div className="aboutPrincipal">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li>Quem Somos</li>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default HomeMenu;
