import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Methodology from "./components/Methodology";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const NAV_LINKS = [
  { id: "experiencia", label: "Experiencia" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "proyectos", label: "Proyectos" },
  { id: "metodologia", label: "Metodología" },
  // { id: "testimonios", label: "Testimonios" },
  { id: "contacto", label: "Contacto" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...NAV_LINKS.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="grain-overlay relative min-h-screen">
      {/* Ambient radial bg */}
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(74,158,255,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 2rem", height: "64px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "rgba(8,12,20,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <button
          onClick={() => scrollTo("hero")}
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.05em", color: "var(--color-text)", background: "none", border: "none", cursor: "pointer" }}
        >
          AM<span style={{ color: "var(--color-accent)" }}>.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ gap: "2rem", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.08em",
                color: activeSection === link.id ? "var(--color-text)" : "var(--color-muted)",
                background: "none", border: "none", cursor: "pointer",
                textTransform: "uppercase", transition: "color 0.2s",
                borderBottom: activeSection === link.id ? "1px solid var(--color-accent)" : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1.5px", background: "var(--color-text)", transition: "all 0.3s",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)" : menuOpen && i === 1 ? "scaleX(0)" : menuOpen && i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
            }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99, background: "rgba(8,12,20,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--color-border)", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {NAV_LINKS.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: "0.08em", color: "var(--color-muted)", background: "none", border: "none", cursor: "pointer", textAlign: "left", textTransform: "uppercase" }}>
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <ScrollProgress />

      <main style={{ position: "relative", zIndex: 1 }}>
        <section id="hero"><Hero onCTA={() => scrollTo("contacto")} /></section>
        <section id="experiencia"><Experience /></section>
        <section id="tecnologias"><Technologies /></section>
        <section id="proyectos"><Projects /></section>
        <section id="metodologia"><Methodology /></section>
        {/* <section id="testimonios"><Testimonials /></section> */}
        <section id="contacto"><Contact /></section>
      </main>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div style={{ position: "fixed", top: "64px", left: 0, right: 0, height: "2px", background: "transparent", zIndex: 101 }}>
      <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, var(--color-accent), #a78bfa)", transition: "width 0.1s linear" }} />
    </div>
  );
}