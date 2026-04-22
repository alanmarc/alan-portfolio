import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, Users, Search, RefreshCw, MessageSquare, Target } from "lucide-react";

const SectionLabel = ({ children }: { children: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4rem" }}>
    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--color-accent)" }}>
      {children}
    </span>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--color-border) 0%, transparent 100%)" }} />
  </div>
);

const methodologies = [
  {
    icon: GitBranch,
    title: "Git Flow & Code Review",
    description:
      "Implemento procesos estructurados de branching y revisión de código. Cada PR pasa por análisis de arquitectura, performance y legibilidad antes del merge.",
  },
  {
    icon: RefreshCw,
    title: "CI/CD & Entrega Continua",
    description:
      "Pipelines automatizados que garantizan calidad: tests, linting, build y deployment sin intervención manual. Reducción de tiempo de entrega y errores humanos.",
  },
  {
    icon: Search,
    title: "Observabilidad & Debugging",
    description:
      "Monitoreo proactivo con Sentry. Identifico cuellos de botella de performance antes de que afecten al usuario final, con trazabilidad de errores en producción.",
  },
  {
    icon: Users,
    title: "Liderazgo Técnico",
    description:
      "Tutoría y mentoría del equipo de desarrollo. Transformo requerimientos de negocio en especificaciones técnicas claras, actuando como puente entre stakeholders y devs.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación Técnica",
    description:
      "Documentación clara de arquitecturas, APIs y decisiones técnicas (ADRs). Facilito dailies y planning técnico con enfoque en desbloqueadores y prioridad de impacto.",
  },
  {
    icon: Target,
    title: "Enfoque en Producto",
    description:
      "No sólo escribo código: entiendo el negocio. Priorizo funcionalidades por impacto real, valido supuestos técnicos y busco soluciones simples antes que sobre-ingeniería.",
  },
];

const principles = [
  { label: "SOLID", desc: "Principios de diseño OOP" },
  { label: "DRY", desc: "Don't Repeat Yourself" },
  { label: "KISS", desc: "Keep It Simple" },
  { label: "Clean Architecture", desc: "Separación de capas" },
  { label: "Domain-Driven Design", desc: "Modelado centrado en negocio" },
  { label: "Trunk-Based Dev", desc: "Integración continua real" },
];

export default function Methodology() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto", padding: "8rem 2rem" }}>
        <SectionLabel>04 / Metodología & Principios</SectionLabel>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="method-grid">
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                marginBottom: "1.5rem",
              }}
            >
              No sólo escribo código.{" "}
              <span style={{ color: "var(--color-accent)" }}>Construyo sistemas.</span>
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Mi enfoque va más allá de hacer funcionar el código. Pienso en escalabilidad,
              mantenibilidad y el equipo que lo va a mantener. Cada decisión técnica tiene
              un "por qué" documentado y considerado.
            </p>

            {/* Principles */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {principles.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  style={{
                    padding: "0.6rem 1rem",
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg)",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, color: "var(--color-accent)", letterSpacing: "0.08em" }}>
                    {p.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-muted)", marginTop: "0.15rem" }}>
                    {p.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: methodology cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--color-border)" }}>
            {methodologies.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" as const }}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--color-surface-2)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--color-surface)")}
              >
                <div style={{ flexShrink: 0, marginTop: "2px" }}>
                  <m.icon size={15} color="var(--color-accent)" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.3rem" }}>
                    {m.title}
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                    {m.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .method-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}