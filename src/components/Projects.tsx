import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Database, Shield, FileText, GitBranch } from "lucide-react";

const SectionLabel = ({ children }: { children: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4rem" }}>
    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--color-accent)" }}>
      {children}
    </span>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--color-border) 0%, transparent 100%)" }} />
  </div>
);

const projects = [
  {
    id: "dental",
    title: "DentalSmart",
    subtitle: "Gestión de Clínicas",
    icon: Database,
    accentColor: "#4a9eff",
    tags: ["Vue 3", "AdonisJS", "PostgreSQL", "JWT", "RBAC"],
    challenge:
      "Clínicas dentales con historiales clínicos sensibles que necesitaban un sistema integral con control de acceso granular y alta disponibilidad.",
    solution:
      "Sistema full-stack con modelo relacional en PostgreSQL para historiales clínicos. Autenticación robusta basada en roles (RBAC), módulos de agenda, expedientes y reportes clínicos.",
    metrics: [
      { label: "Reducción de errores", value: "80%" },
      { label: "Módulos implementados", value: "6" },
    ],
  },
  {
    id: "facturacion",
    title: "Ecosistema de Facturación",
    subtitle: "Finanzas & Compliance",
    icon: FileText,
    accentColor: "#7dd4fc",
    tags: ["Node.js", "Laravel", "JWT", "CFDI", "DIAN", "Middlewares"],
    challenge:
      "Empresas con procesos manuales de emisión de comprobantes fiscales, expuestas a errores humanos y riesgos de incumplimiento regulatorio (SAT/DIAN).",
    solution:
      "Integración automatizada con proveedores de facturación electrónica. Middlewares personalizados para validación y firma digital, sistema de reintentos y auditoría de transacciones fiscales.",
    metrics: [
      { label: "Reducción de errores fiscales", value: "95%" },
      { label: "Comprobantes automatizados", value: "100%" },
    ],
  },
  {
    id: "microservicios",
    title: "Arquitectura de Microservicios",
    subtitle: "Infraestructura Escalable",
    icon: GitBranch,
    accentColor: "#a78bfa",
    tags: ["NestJS", "TypeScript", "Docker", "GitLab CI/CD", "Sentry"],
    challenge:
      "Monolito con alto acoplamiento que dificultaba el despliegue independiente de módulos y generaba deuda técnica creciente en el equipo.",
    solution:
      "Migración hacia arquitectura de microservicios con NestJS, comunicación HTTP/REST entre servicios, pipelines de CI/CD en GitLab y monitoreo centralizado con Sentry.",
    metrics: [
      { label: "Reducción de deuda técnica", value: "60%" },
      { label: "Tiempo de deploy", value: "-70%" },
    ],
  },
  {
    id: "erp",
    title: "Módulos ERP",
    subtitle: "Optimización de Sistemas",
    icon: Shield,
    accentColor: "#34d399",
    tags: ["MySQL", "PHP", "Laravel", "REST API", "ORM"],
    challenge:
      "Módulos de inventario y reportes con consultas lentas que afectaban la productividad del equipo operativo durante horas pico.",
    solution:
      "Reescritura de queries críticas con indexación apropiada, implementación de paginación eficiente y caché de resultados. Nuevos módulos de reportería con filtros avanzados.",
    metrics: [
      { label: "Mejora en velocidad de respuesta", value: "3x" },
      { label: "Tiempo de reporte", value: "-65%" },
    ],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" as const }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--color-surface-2)" : "var(--color-surface)",
        border: `1px solid ${hovered ? project.accentColor + "40" : "var(--color-border)"}`,
        padding: "2rem",
        cursor: "default",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: hovered
            ? `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`
            : "transparent",
          transition: "all 0.3s",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              background: project.accentColor + "18",
              border: `1px solid ${project.accentColor}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon size={16} color={project.accentColor} />
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text)" }}>
              {project.title}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
              {project.subtitle}
            </div>
          </div>
        </div>
        <ArrowUpRight
          size={18}
          color={hovered ? project.accentColor : "var(--color-subtle)"}
          style={{ transition: "color 0.2s", flexShrink: 0 }}
        />
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
        {project.tags.map(tag => (
          <span
            key={tag}
            style={{
              padding: "0.2rem 0.6rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              color: project.accentColor,
              background: project.accentColor + "12",
              border: `1px solid ${project.accentColor}25`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Challenge / Solution */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--color-subtle)", marginBottom: "0.4rem" }}>
          Reto
        </p>
        <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.65, marginBottom: "1rem" }}>
          {project.challenge}
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: project.accentColor + "aa", marginBottom: "0.4rem" }}>
          Solución
        </p>
        <p style={{ fontSize: "0.82rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
          {project.solution}
        </p>
      </div>

      {/* Metrics */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          paddingTop: "1.25rem",
          borderTop: `1px solid ${project.accentColor}18`,
        }}
      >
        {project.metrics.map(metric => (
          <div key={metric.label}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 800, color: project.accentColor, lineHeight: 1 }}>
              {metric.value}
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--color-muted)", letterSpacing: "0.08em", marginTop: "0.2rem" }}>
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "8rem 2rem" }}>
      <SectionLabel>03 / Proyectos</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1px", background: "var(--color-border)" }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}