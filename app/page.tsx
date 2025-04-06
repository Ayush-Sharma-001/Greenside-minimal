
import './globals.css'; // Or your correct path

import Navbar from "./components/navbar/page";
import Hero from "./components/hero/page";
import About from "./components/about/page";
import Services from "./components/Skill_section/page";


import Footer from "./components/Footer/page";
import Project_sec from './components/Project_sec/page';
import Process from './components/process/page';




export default function Home() {
  return (
<>
<Navbar/>
<Hero/>
<About/>
<Services/>
<Project_sec/>
<Process/>
<Footer/>


</>
  );
}
