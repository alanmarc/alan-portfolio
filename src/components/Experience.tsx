import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, GitBranch, Monitor, Zap, Code2, Users } from "lucide-react";

const SectionLabel = ({ children }: { children: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "4rem",
    }}
  >
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.68rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--color-accent)",
      }}
    >
      {children}
    </span>
    <div
      style={{
        flex: 1,
        height: "1px",
        background:
          "linear-gradient(90deg, var(--color-border) 0%, transparent 100%)",
      }}
    />
  </div>
);

const experiences = [
  {
    company: "Facturatech",
    role: "Desarrollador Fullstack",
    period: "Jul 2024 — Actualidad",
    tag: "Actual",
    icon: Layers,
    achievements: [
      {
        icon: Users,
        title: "Liderazgo Técnico",
        description:
          "Dirijo la planificación técnica y asignación de tareas del equipo. Implementé un flujo de Code Review que estandarizó TypeScript en todo el stack y redujo la deuda técnica significativamente.",
      },
      {
        icon: Layers,
        title: "Arquitectura de Microservicios",
        description:
          "Diseñé e implementé una arquitectura con NestJS comunicada vía API REST/HTTP, permitiendo integración ágil con APIs externas y mejorando la mantenibilidad del backend.",
      },
      {
        icon: Monitor,
        title: "Arquitectura Frontend Escalable",
        description:
          "Definí un sistema de componentes reutilizables con Nuxt y Pinia, estandarizando el manejo de estado centralizado y logrando consistencia en UI y reducción de tiempos de desarrollo.",
      },
      {
        icon: Zap,
        title: "DevOps & Monitoreo",
        description:
          "Implementé pipelines CI/CD en GitLab y monitoreo proactivo con Sentry, identificando cuellos de botella de performance antes de que afectaran a los usuarios finales.",
      },
    ],
  },
  {
    company: "Sistemas Integrales",
    role: "Desarrollador Fullstack",
    period: "Feb 2022 — Jul 2024",
    tag: "2 años 5 meses",
    icon: Code2,
    achievements: [
      {
        icon: Code2,
        title: "Automatización Fiscal (CFDI/DIAN)",
        description:
          "Lideré la integración del sistema de facturación con proveedores autorizados, automatizando emisión de comprobantes y eliminando errores de cumplimiento fiscal.",
      },
      {
        icon: Zap,
        title: "Optimización de ERP",
        description:
          "Desarrollé módulos críticos en el ERP interno, optimizando consultas MySQL y mejorando la velocidad de respuesta en módulos de inventarios y reportes de alto tráfico.",
      },
      {
        icon: GitBranch,
        title: "Levantamiento Técnico",
        description:
          "Transformé requerimientos de negocio complejos en especificaciones técnicas claras, actuando como puente entre stakeholders y el equipo de desarrollo.",
      },
    ],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" as const }}
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr",
        gap: "3rem",
        marginBottom: "4rem",
        paddingBottom: "4rem",
        borderBottom: "1px solid var(--color-border)",
      }}
      className="exp-card"
    >
      {/* Left: role info */}
      <div style={{ paddingTop: "0.25rem" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "0.5rem",
          }}
        >
          {exp.tag}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "0.25rem",
          }}
        >
          {exp.company}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "var(--color-muted)",
            marginBottom: "0.5rem",
          }}
        >
          {exp.role}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "var(--color-subtle)",
            letterSpacing: "0.05em",
          }}
        >
          {exp.period}
        </div>
      </div>

      {/* Right: achievements */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1px",
          background: "var(--color-border)",
          border: "1px solid var(--color-border)",
        }}
      >
        {exp.achievements.map((ach, i) => (
          <div
            key={i}
            style={{
              background: "var(--color-surface)",
              padding: "1.5rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--color-surface-2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--color-surface)")
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <ach.icon size={14} color="var(--color-accent)" />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--color-text)",
                }}
              >
                {ach.title}
              </span>
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
              }}
            >
              {ach.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "8rem 2rem",
      }}
    >
      <SectionLabel>01 / Experiencia Laboral</SectionLabel>

      <div>
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>

      {/* Inline responsive fix */}
      <style>{`
        @media (max-width: 768px) {
          .exp-card {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}