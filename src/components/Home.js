import React from "react";
import SideMenu from "./SideMenu";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <div>
        <SideMenu menuName="Home" />
        <SideMenu menuName="Cadastro de Usuáries" />
        <SideMenu menuName="Cadastro de Projetos" />
        <SideMenu menuName="Buscar projetos" />
        <SideMenu menuName="Personalidades" />
        <SideMenu menuName="Quem somos" />
      </div>
    </div>
  );
};

export default Home;
