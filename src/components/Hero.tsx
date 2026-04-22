import { motion } from "framer-motion";
import { ArrowDownRight, MapPin, Code2, Link } from "lucide-react";

interface HeroProps {
  onCTA: () => void;
}

export default function Hero({ onCTA }: HeroProps) {
  const ease = "easeOut" as const;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "120px",
        paddingBottom: "80px",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        style={{ marginBottom: "1.5rem" }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-accent)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ display: "inline-block", width: "32px", height: "1px", background: "var(--color-accent)" }} />
          Full Stack Engineer · Puebla, México
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 6.5rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--color-text)", marginBottom: "2rem" }}
      >
        Alan
        <br />
        <span style={{ color: "var(--color-muted)" }}>Marcos</span>
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease }}
        style={{ height: "1px", background: "linear-gradient(90deg, var(--color-accent) 0%, var(--color-border) 60%, transparent 100%)", marginBottom: "2rem", maxWidth: "600px", transformOrigin: "left" }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease }}
        style={{ maxWidth: "560px", fontSize: "1.1rem", fontWeight: 300, color: "var(--color-muted)", lineHeight: 1.75, marginBottom: "3rem" }}
      >
        Ingeniero en TI especialista en{" "}
        <span style={{ color: "var(--color-text)", fontWeight: 400 }}>arquitecturas SaaS escalables</span>.
        Diseño sistemas con NestJS, AdonisJS y Vue 3, liderando equipos técnicos con foco en{" "}
        <span style={{ color: "var(--color-text)", fontWeight: 400 }}>calidad de código, CI/CD y entrega continua</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease }}
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
      >
        <button
          onClick={onCTA}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.75rem", background: "var(--color-accent)", color: "#080c14", border: "none", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.02em", cursor: "pointer", transition: "background 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#6ab4ff")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--color-accent)")}
        >
          Contacto <ArrowDownRight size={16} />
        </button>
        <a
          href="https://github.com/alanmarc"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.75rem", background: "transparent", color: "var(--color-text)", border: "1px solid var(--color-border)", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "0.9rem", textDecoration: "none", letterSpacing: "0.02em", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-accent)"; e.currentTarget.style.color = "var(--color-accent)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-text)"; }}
        >
          <Code2 size={16} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/alan-marcos-alb"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.75rem", background: "transparent", color: "var(--color-text)", border: "1px solid var(--color-border)", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "0.9rem", textDecoration: "none", letterSpacing: "0.02em", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-accent)"; e.currentTarget.style.color = "var(--color-accent)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-text)"; }}
        >
          <Link size={16} /> LinkedIn
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65, ease }}
        style={{ marginTop: "5rem", display: "flex", gap: "3rem", flexWrap: "wrap", borderTop: "1px solid var(--color-border)", paddingTop: "2rem" }}
      >
        {[
          { value: "5+", label: "Años de experiencia" },
          { value: "2", label: "Empresas lideradas" },
          { value: "∞", label: "Commits mergeados" },
          { value: "0", label: "Deuda técnica ignorada" },
        ].map(stat => (
          <div key={stat.label}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, color: "var(--color-text)", lineHeight: 1 }}>{stat.value}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginTop: "0.25rem" }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7, ease }}
        style={{ position: "absolute", right: "2rem", top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--color-subtle)", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", writingMode: "vertical-rl" }}
        className="hidden lg:flex"
      >
        <MapPin size={12} />
        PUEBLA · MX
      </motion.div>
    </div>
  );
}