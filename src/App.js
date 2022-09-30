import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu.js'

function App() {
  return (
    <div className="App">
      <div>
        <SideMenu menuName="Home"/>
        <SideMenu menuName="Cadastro de Usuáries"/>
        <SideMenu menuName="Cadastro de Projetos"/>
        <SideMenu menuName="Buscar projetos"/>
        <SideMenu menuName="Personalidades"/>
        <SideMenu menuName="Quem somos"/>
      </div>
    </div>
  );
}

export default App;
