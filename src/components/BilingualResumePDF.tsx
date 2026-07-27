"use client";

import { forwardRef } from "react";
import type { ResumeData } from "@/data/resume";

type Props = {
  data: ResumeData;
  lang: "zh" | "en";
};

const LABELS: Record<"zh" | "en", Record<string, string>> = {
  zh: {
    contact: "联系方式",
    education: "教育背景",
    about: "关于我",
    experience: "工作经历",
  },
  en: {
    contact: "Contact",
    education: "Education",
    about: "About Me",
    experience: "Work Experience",
  },
};

/** 与网站一致的侧边栏渐变背景 */
const SIDEBAR_BG =
  "linear-gradient(160deg, #0f1a2e 0%, #162544 50%, #1a3056 100%)";
const ACCENT = "#2d6fb4";
const ACCENT_LIGHT = "#e8f0f8";

const ResumeExportTemplate = forwardRef<HTMLDivElement, Props>(
  function ResumeExportTemplate({ data: d, lang }, ref) {
    const t = LABELS[lang];
    const photoUrl =
      typeof window !== "undefined"
        ? new URL("photo.jpg", window.location.href).href
        : "/photo.jpg";

    return (
      <div
        ref={ref}
        id="pdf-template"
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          width: "794px",
          background: "#fff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", minHeight: "1123px" }}>
          {/* ═══════ Sidebar ═══════ */}
          <div
            style={{
              width: "260px",
              background: SIDEBAR_BG,
              color: "#fff",
              padding: "40px 28px",
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
            }}
          >
            {/* Photo */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <img
                src={photoUrl}
                alt={d.name}
                crossOrigin="anonymous"
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(255,255,255,0.2)",
                }}
              />
            </div>

            {/* Name & Title */}
            <div style={{ marginBottom: "28px" }}>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.5px",
                  margin: "0 0 4px",
                }}
              >
                {d.name}
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {d.title}
              </p>
            </div>

            {/* Contact */}
            <SectionTitle label={t.contact} />
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.6,
                marginBottom: "22px",
              }}
            >
              <p style={{ margin: 0 }}>{d.phone}</p>
              <p style={{ margin: 0, wordBreak: "break-all" }}>{d.email}</p>
            </div>

            {/* Education */}
            <SectionTitle label={t.education} />
            <div style={{ fontSize: "12px", marginBottom: "22px" }}>
              <p style={{ color: "rgba(255,255,255,0.5)", margin: 0 }}>
                {d.education.period}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                  margin: "2px 0 0",
                }}
              >
                {d.education.degree}
              </p>
              <p
                style={{ color: "rgba(255,255,255,0.7)", margin: "1px 0 0" }}
              >
                {d.education.major}
              </p>
              <p
                style={{ color: "rgba(255,255,255,0.7)", margin: "1px 0 0" }}
              >
                {d.education.school}
              </p>
            </div>

            {/* About */}
            <div style={{ marginTop: "auto" }}>
              <SectionTitle label={t.about} />
              <ul
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  padding: 0,
                  margin: 0,
                  listStyle: "none",
                }}
              >
                {d.about.map((item, i) => (
                  <li key={i} style={{ marginBottom: "4px" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ═══════ Main Content ═══════ */}
          <div style={{ flex: 1, padding: "40px 32px" }}>
            <h2
              style={{
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#8899aa",
                fontWeight: 500,
                margin: "0 0 32px",
              }}
            >
              {t.experience}
            </h2>

            {/* Timeline */}
            <div style={{ position: "relative", paddingLeft: "24px" }}>
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background: `linear-gradient(to bottom, ${ACCENT} 0%, #e2e8f0 100%)`,
                }}
              />

              {d.experiences.map((exp, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    marginBottom: idx < d.experiences.length - 1 ? "28px" : 0,
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-29px",
                      top: idx === 0 ? "4px" : "4px",
                      width: idx === 0 ? "14px" : "10px",
                      height: idx === 0 ? "14px" : "10px",
                      borderRadius: "50%",
                      background: ACCENT,
                      border: "2px solid #fff",
                      boxShadow: `0 0 0 2px ${ACCENT}`,
                    }}
                  />

                  {/* Period badge */}
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: ACCENT,
                      background: ACCENT_LIGHT,
                      borderRadius: "999px",
                      padding: "2px 10px",
                      marginBottom: "6px",
                    }}
                  >
                    {exp.period}
                  </span>

                  {/* Title + Company */}
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#1a1a2e",
                      margin: "4px 0 0",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      color: ACCENT,
                      fontWeight: 500,
                      margin: "2px 0 8px",
                    }}
                  >
                    {exp.company}
                  </p>

                  {/* Bullets */}
                  <ul
                    style={{
                      padding: 0,
                      margin: 0,
                      listStyle: "none",
                    }}
                  >
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{
                          fontSize: "12px",
                          color: "#4a5568",
                          lineHeight: 1.6,
                          display: "flex",
                          gap: "6px",
                          marginBottom: "4px",
                        }}
                      >
                        <span style={{ color: ACCENT, flexShrink: 0 }}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            padding: "12px 32px",
            textAlign: "center",
            fontSize: "11px",
            color: "#8899aa",
          }}
        >
          {lang === "zh"
            ? `${d.name} · 简历 · ${new Date().toISOString().slice(0, 10)}`
            : `${d.name} · Resume · ${new Date().toISOString().slice(0, 10)}`}
        </div>
      </div>
    );
  }
);

/* ── Sidebar section title ── */
function SectionTitle({ label }: { label: string }) {
  return (
    <h2
      style={{
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "rgba(255,255,255,0.4)",
        fontWeight: 500,
        margin: "0 0 8px",
      }}
    >
      {label}
    </h2>
  );
}

export default ResumeExportTemplate;
