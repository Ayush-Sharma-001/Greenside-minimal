import Image from "next/image";

import Navbar from "./components/navbar/page";
import Hero from "./components/hero/page";
import About from "./components/about/page";
import Services from "./components/Skill_section/page";
import CaseStudies from "./components/CaseStudies/page";
import How from "./components/How/page";
import Footer from "./components/Footer/page";


export default function Home() {
  return (
<>
<Navbar/>
<Hero/>
<About/>
<Services/>
<CaseStudies/>
<How/>
<Footer/>


</>
  );
}
