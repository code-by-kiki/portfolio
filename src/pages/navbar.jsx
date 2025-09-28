import React from "react";
import Home from "../components/home";
import About from "../components/About";
import Navbar from '../components/navbar';
import Contact from "../components/Contact";
import Datas from "./Resume";
import Project from "../components/Project";


function Section({ id, title, children }) {
return (
<section id={id} className="min-vh-100 d-flex align-items-center justify-content-center p-5" tabIndex={-1}>
<div className="container text-center">
<h2 className="display-4 fw-bold mb-3">{title}</h2>
<p className="lead">{children}</p>
</div>
</section>
);
}


function Nav() {
return (
<div>
<Navbar />
<main className="pt-5 mt-5">
<Section id="home" title="Home">
 <Home/>
</Section>
<Section id="about" title="About"> 
    <About/>
</Section>

<Section id="project" title="Project">
   <Project/>
</Section>

<Section id="resume" title="Resume">
       <Datas/>
</Section>

<Section id="contact" title="Contact">
    <Contact/>
</Section>
</main>
</div>
);
}

export default Nav;

