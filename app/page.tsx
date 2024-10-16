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
            </div>
        </main>
    );
}
