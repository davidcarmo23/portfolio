import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";

import '../i18n'
import { useTranslation } from "react-i18next";


export const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <div id="home" className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* // Background effects */}
            <StarBackground />

            {/* // Navbar */}
            <NavBar t={t} />
            {/* // Main Content */}
            <main>
                <HeroSection t={t} />
                <AboutSection t={t} />
                <SkillsSection t={t} />
                <ProjectsSection t={t} />
                <ContactSection t={t} />
            </main>


            {/* // Footer */}
            <Footer />
        </div>
    );
};