import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Education, Skills } from "./components/Skills";
import Contact from "./components/Contact";
import { profile } from "./data/profile";

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
