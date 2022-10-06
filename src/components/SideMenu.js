import { Link } from "react-router-dom";

function SideMenu() {
  <div>
    <nav className="sideMenu">
      <ul>
        <Link to="">
          <li className="home">Home</li>
        </Link>
        <Link to="">
          <li className="account">Cadastro de Profissional</li>
        </Link>
        <Link to="">
          <li className="newProject">Cadastro de Projeto</li>
        </Link>
        <Link to="">
          <li className="searchProject">Buscar Projetos</li>
        </Link>
        <Link to="">
          <li className="techPerson">Personalidades</li>
        </Link>
        <Link to="">
          <li className="about">Quem Somos</li>
        </Link>
      </ul>
    </nav>
  </div>;
}

export default SideMenu;
