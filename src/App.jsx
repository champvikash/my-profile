import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonial/Testimonial";
import Aboutus from "./components/aboutus/Aboutus";
import "./app.scss";
import { useState } from "react";
// import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
     <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
     <div className="section">
    <Intro/>
    <Portfolio/>
    <Works/>
    <Testimonial/>
    <Aboutus/>
    </div>
    </div>
);
}
export default App;
