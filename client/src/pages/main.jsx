import CallToAction from "../components/main/CallToAction"
import ClientLogos from "../components/main/ClientLogos"
import Footer from "../components/main/Footer"
import HeroSection from "../components/main/HeroSection"
import Navbar from "../components/main/Navbar"
import ProcessSection from "../components/main/ProcessSection"
import ServiceSection from "../components/main/ServicesSection"
import TeamCTA from "../components/main/TeamCTA"
import TechnologiesSection from "../components/main/TechnologiesSection"

export default function main(){
    return(
        <div>
            <CallToAction/>
            <ClientLogos/>
            <Footer/>
            <HeroSection/>
            <Navbar/>
            <ProcessSection/>
            <ServiceSection/>
            <TeamCTA/>
            <TechnologiesSection/>
        </div>
    )
}