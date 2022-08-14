
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
// import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";


function App() {
  const [show,menuShow]=useState(false)
  const [open,openImage]=useState(false)
  return (

    <div className="app">
    <Topbar show={show} menuShow={menuShow}/>
    <Menu show={show} menuShow={menuShow}/>
    <div className="sections">
      <Intro open={open} openImage={openImage}/>

      <Works/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
