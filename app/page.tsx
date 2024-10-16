import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Downloads from "./components/Downloads";
import Hero from "./components/Hero";
import Milestone from "./components/Milestone";
import ProjectScope from "./components/ProjectScope";
import { FloatingNav } from "./components/ui/floating-navbar";
import { navItems } from "./data";

export default function Home() {
    return (
        <main>
            <div>
                <FloatingNav navItems={navItems} />
                <Hero />
                <ProjectScope />
                <Milestone />
                <Downloads />
                <AboutUs />
                <ContactUs />
            </div>
        </main>
    );
}
