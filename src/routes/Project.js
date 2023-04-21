
import React from "react";
import { Navbar } from "../components/Navbar";

import { Footer } from "../components/Footer";
import  HeroImage2 from "../components/HeroImage2";
import { PricingCard } from "../components/PricingCard";
import { Work} from "../components/Work";


export  function Project () {
    return (
     <div>
        <Navbar />
        <HeroImage2 heading="PROJECTS." text="Some of my most recent works" />
        <Work />
        <PricingCard />
        <Footer />
     </div>
    )
}