import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Account from "./components/pages/Account.js";
import Project from "./components/pages/Project.js";
import Search from "./components/pages/Search.js";
import TechPerson from "./components/pages/TechPerson.js";



function App() {
  return (
    <div className="App">

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/new-project" element={<Project />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/tech-person" element={<TechPerson />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
