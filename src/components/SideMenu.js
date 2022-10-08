
import { Link } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  return (
    <nav className="sideMenu">
      <ul>
        <Link to="/">
          <li className="home">Home</li>
        </Link>
        <Link to="/account">
          <li className="account">Cadastro de Profissional</li>
        </Link>
        <Link to="/newProject">
          <li className="newProject">Cadastro de Projeto</li>
        </Link>
        <Link to="/searchProject">
          <li className="searchProject">Buscar Projetos</li>
        </Link>
        <Link to="/techPerson">
          <li className="techPerson">Personalidades</li>
        </Link>
        <Link to="/about">
          <li className="about">Quem Somos</li>
        </Link>
      </ul>
    </nav>
  );
}

export default SideMenu;

