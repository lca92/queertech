
import { Link } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  return (
    <nav className="sideMenu">
      <ul>
        <Link to="/" style={{textDecoration:'none'}}>
          <li className="home">Home</li>
        </Link>
        <Link to="/account" style={{textDecoration:'none'}}>
          <li className="account">Cadastro de Profissional</li>
        </Link>
        <Link to="/new-project" style={{textDecoration:'none'}}>
          <li className="newProject">Cadastro de Projeto</li>
        </Link>
        <Link to="/search" style={{textDecoration:'none'}}>
          <li className="search">Buscar</li>
        </Link>
        <Link to="/tech-person" style={{textDecoration:'none'}}>
          <li className="techPerson">Personalidades</li>
        </Link>
        <Link to="/about" style={{textDecoration:'none'}}>
          <li className="about">Quem Somos</li>
        </Link>
      </ul>
    </nav>
  );
}

export default SideMenu;

