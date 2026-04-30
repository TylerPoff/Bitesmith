import AboutHero from "../components/AboutHero"
import AboutTechStack from "../components/AboutTechStack"
import AboutAuthor from "../components/AboutAuthor"
import "../styles/About.css"

export default function About() {
    return (
        <div className="about-page">
            <h1 className="about-title">
                About
            </h1>
            <AboutHero />
            <AboutAuthor />
            <AboutTechStack />
        </div>
    )
}