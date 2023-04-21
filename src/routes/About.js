
import React from "react";
import { Navbar } from "../components/Navbar";

import { Footer } from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import { AboutContent } from "../components/AboutContent";

export  function About () {
    return (
     <div>
        <Navbar />
        <HeroImage2 heading="ABOUT." text="I'm a friendly 
        Front-End Developer." />
        <AboutContent />
        <Footer />
     </div>
    )
}