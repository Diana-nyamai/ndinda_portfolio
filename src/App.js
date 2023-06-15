import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/About" exact element={<About/>}/>
        <Route path="/Projects" exact element={<Projects/>}/>
        <Route path="/Blogs" exact element={<Blogs/>}/>
        <Route path="/Contact" exact element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
