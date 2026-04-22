import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Link, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const ease = "easeOut" as const;

  const links = [
    { icon: Code2, label: "GitHub", value: "github.com/alanmarc", href: "https://github.com/alanmarc", color: "#e2eaf4" },
    { icon: Link, label: "LinkedIn", value: "linkedin.com/in/alan-marcos-alb", href: "https://linkedin.com/in/alan-marcos-alb", color: "#4a9eff" },
    { icon: Mail, label: "Email", value: "alanmarcs96@gmail.com", href: "mailto:alanmarcs96@gmail.com", color: "#7dd4fc" },
    { icon: Phone, label: "WhatsApp", value: "(52) 2221211629", href: "https://wa.me/522221211629", color: "#34d399" },
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "8rem 2rem 6rem" }}>
      <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="contact-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--color-accent)", display: "block", marginBottom: "1.5rem" }}>
            05 / Contacto
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--color-text)", marginBottom: "1.5rem" }}>
            Construyamos algo{" "}
            <span style={{ color: "var(--color-accent)" }}>juntos.</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--color-muted)", lineHeight: 1.75, maxWidth: "420px", marginBottom: "2.5rem" }}>
            Estoy abierto a oportunidades de trabajo remoto, colaboraciones en productos SaaS o proyectos donde la arquitectura y la calidad de código sean prioridad.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MapPin size={14} color="var(--color-muted)" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-muted)", letterSpacing: "0.08em" }}>
              Puebla, México · Disponible para trabajo remoto
            </span>
          </div>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--color-border)" }}>
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem", background: "var(--color-surface)", textDecoration: "none", transition: "all 0.2s", borderLeft: "2px solid transparent" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--color-surface-2)"; e.currentTarget.style.borderLeftColor = link.color; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--color-surface)"; e.currentTarget.style.borderLeftColor = "transparent"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "36px", height: "36px", background: link.color + "12", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <link.icon size={16} color={link.color} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-muted)", marginBottom: "0.2rem" }}>{link.label}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--color-text)" }}>{link.value}</div>
                </div>
              </div>
              <ExternalLink size={14} color="var(--color-subtle)" />
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6, ease }}
        style={{ marginTop: "6rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-subtle)", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} Alan Marcos · Full Stack Engineer
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-subtle)", letterSpacing: "0.08em" }}>
          React · TypeScript · Tailwind · Framer Motion
        </span>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </div>
  );
}