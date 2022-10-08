import { Link } from "react-router-dom";
import "./HomeMenu.css";

const HomeMenu = () => {
  return (
    <div>
      <nav className="homeMenu">
        <ul>
          <div className="home">
            <Link to="/" style={{textDecoration:'none'}}>
              <li>Home </li>
            </Link>
          </div>

          <div className="account">
            <Link to="/account" style={{textDecoration:'none'}}>
              <li>Cadastro de Profissional</li>
            </Link>
          </div>

          <div className="newProject">
            <Link to="/new-project" style={{textDecoration:'none'}}>
              <li>Cadastro de Projeto</li>
            </Link>
          </div>

          <div className="searchProject">
            <Link to="/search-project" style={{textDecoration:'none'}}>
              <li>Buscar Projetos</li>
            </Link>
          </div>

          <div className="techPerson">
            <Link to="/tech-person" style={{textDecoration:'none'}}>
              <li>Personalidades</li>
            </Link>
          </div>

          <div className="about">
            <Link to="/about" style={{textDecoration:'none'}}>
              <li>Quem Somos</li>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default HomeMenu;
