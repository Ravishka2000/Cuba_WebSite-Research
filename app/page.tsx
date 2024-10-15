import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import { navItems } from "./data";

export default function Home() {
  return (
    <main>
      <div>
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Hero/>
      </div>
    </main>
  );
}
