import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const SectionLabel = ({ children }: { children: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4rem" }}>
    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--color-accent)" }}>
      {children}
    </span>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--color-border) 0%, transparent 100%)" }} />
  </div>
);

const testimonials = [
  {
    quote:
      "Alan tiene una capacidad poco común para conectar la visión de negocio con la ejecución técnica. Su arquitectura de microservicios nos permitió escalar sin caos. Además, elevó al equipo entero con sus code reviews y mentoría.",
    author: "Director de Tecnología",
    company: "Facturatech",
    initials: "DT",
    color: "#4a9eff",
  },
  {
    quote:
      "Transformó nuestro proceso de facturación electrónica de algo manual y propenso a errores a un sistema completamente automatizado. Redujo los errores de cumplimiento fiscal a prácticamente cero. Es el tipo de developer que hace preguntas antes de codear.",
    author: "Gerente de Operaciones",
    company: "Sistemas Integrales",
    initials: "GO",
    color: "#34d399",
  },
  {
    quote:
      "Lo que más valoro de Alan es que nunca llega con código: llega con contexto. Siempre entiende el problema real detrás del requerimiento. Implementó CI/CD desde cero y en semanas el equipo entregaba con más confianza.",
    author: "Product Manager",
    company: "Facturatech",
    initials: "PM",
    color: "#a78bfa",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const ease = "easeOut" as const;

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  const t = testimonials[active];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "8rem 2rem" }}>
      <SectionLabel>05 / Testimonios</SectionLabel>

      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="test-grid"
      >
        {/* Left: Index + nav */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 10vw, 8rem)",
              fontWeight: 800,
              lineHeight: 1,
              color: "var(--color-surface-2)",
              letterSpacing: "-0.05em",
              marginBottom: "2rem",
              userSelect: "none",
            }}
          >
            0{active + 1}
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  background: i === active ? "var(--color-accent)" : "var(--color-subtle)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {[
              { Icon: ChevronLeft, action: prev, label: "Anterior" },
              { Icon: ChevronRight, action: next, label: "Siguiente" },
            ].map(({ Icon, action, label }) => (
              <button
                key={label}
                onClick={action}
                aria-label={label}
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-muted)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.color = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-muted)";
                }}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right: Quote card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            padding: "3rem",
            position: "relative",
            borderTop: `2px solid ${t.color}`,
          }}
        >
          {/* Quote icon */}
          <div style={{ marginBottom: "1.5rem" }}>
            <Quote size={24} color={t.color} style={{ opacity: 0.7 }} />
          </div>

          <blockquote
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--color-text)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                background: t.color + "18",
                border: `1px solid ${t.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontFamily: "var(--font-display)",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: t.color,
              }}
            >
              {t.initials}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--color-text)",
                }}
              >
                {t.author}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "var(--color-muted)",
                  marginTop: "0.1rem",
                }}
              >
                {t.company}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .test-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
}