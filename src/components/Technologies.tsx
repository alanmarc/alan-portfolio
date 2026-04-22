import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionLabel = ({ children }: { children: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "4rem" }}>
    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--color-accent)" }}>
      {children}
    </span>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--color-border) 0%, transparent 100%)" }} />
  </div>
);

const techCategories = [
  {
    category: "Backend",
    color: "#4a9eff",
    items: [
      { name: "Node.js", level: 95 },
      { name: "NestJS", level: 90 },
      { name: "AdonisJS", level: 88 },
      { name: "PHP / Laravel", level: 80 },
      { name: "REST APIs", level: 95 },
      { name: "Microservicios", level: 85 },
      { name: "TypeScript", level: 92 },
      { name: "ORM (Lucid, TypeORM, Eloquent)", level: 85 },
    ],
  },
  {
    category: "Frontend",
    color: "#7dd4fc",
    items: [
      { name: "Vue 3", level: 95 },
      { name: "Nuxt", level: 90 },
      { name: "Quasar", level: 82 },
      { name: "JavaScript", level: 95 },
      { name: "Pinia", level: 88 },
      { name: "Responsive Design", level: 90 },
      { name: "UI/UX", level: 78 },
    ],
  },
  {
    category: "DevOps / Tools",
    color: "#a78bfa",
    items: [
      { name: "Docker", level: 80 },
      { name: "GitLab CI/CD", level: 85 },
      { name: "Sentry", level: 82 },
      { name: "Git", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Unit & Integration Testing", level: 78 },
    ],
  },
];

function TechBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-text)", letterSpacing: "0.05em" }}>{name}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-muted)" }}>{level}%</span>
      </div>
      <div style={{ height: "2px", background: "var(--color-border)", borderRadius: "1px", overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: "easeOut" as const }}
          style={{ height: "100%", background: color, borderRadius: "1px" }}
        />
      </div>
    </div>
  );
}

export default function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto", padding: "8rem 2rem" }}>
        <SectionLabel>02 / Stack Tecnológico</SectionLabel>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
          {techCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15, ease: "easeOut" as const }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                <div style={{ width: "8px", height: "8px", background: cat.color, borderRadius: "1px", transform: "rotate(45deg)" }} />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "var(--color-text)",
                    textTransform: "uppercase" as const,
                  }}
                >
                  {cat.category}
                </span>
              </div>
              {cat.items.map((item, ii) => (
                <TechBar
                  key={item.name}
                  name={item.name}
                  level={item.level}
                  color={cat.color}
                  delay={ci * 0.1 + ii * 0.05 + 0.2}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid var(--color-border)" }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--color-muted)", marginBottom: "1.25rem" }}>
            También trabajo con
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["JWT", "Middlewares", "CFDI", "DIAN", "GraphQL", "Prisma", "Redis", "Nginx", "PM2", "Webhooks", "OAuth2", "Swagger", "Jest", "Vitest"].map(tag => (
              <span
                key={tag}
                style={{
                  padding: "0.3rem 0.8rem",
                  border: "1px solid var(--color-border)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  color: "var(--color-muted)",
                  background: "var(--color-surface-2)",
                  transition: "all 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.color = "var(--color-accent)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-muted)";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}