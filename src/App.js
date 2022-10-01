import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import SideMenu from './components/SideMenu.js';
import About from './components/About.js';
import Account from './components/Account.js';
import NewProject from './components/NewProject.js';
import SearchProject from './components/SearchProject.js';
import TechPerson from './components/TechPerson.js';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/new-project' element={<NewProject/>}/>
        <Route path='/search-project' element={<SearchProject/>}/>
        <Route path='/tech-person' element={<TechPerson/>}/>
      </Routes>
      {/* <div>
        <SideMenu menuName="Home"/>
        <SideMenu menuName="Cadastro de Usuáries"/>
        <SideMenu menuName="Cadastro de Projetos"/>
        <SideMenu menuName="Buscar projetos"/>
        <SideMenu menuName="Personalidades"/>
        <SideMenu menuName="Quem somos"/>
      </div> */}
    </div>
  );
}

export default App;
