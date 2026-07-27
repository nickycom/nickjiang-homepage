"use client";

import { forwardRef } from "react";
import type { ResumeData } from "@/data/resume";

type Props = {
  zh: ResumeData;
  en: ResumeData;
};

const SECTION_ZH: Record<string, string> = {
  education: "教育背景",
  about: "关于我",
  experience: "工作经历",
};

const SECTION_EN: Record<string, string> = {
  education: "Education",
  about: "About Me",
  experience: "Work Experience",
};

const BilingualResumePDF = forwardRef<HTMLDivElement, Props>(
  function BilingualResumePDF({ zh, en }, ref) {
    const photoUrl =
      typeof window !== "undefined"
        ? new URL("photo.jpg", window.location.href).href
        : "/photo.jpg";

    return (
      <div
        ref={ref}
        id="pdf-template"
        className="absolute opacity-0 pointer-events-none"
        style={{ width: "1122px", minHeight: "1587px", top: 0, left: 0 }}
      >
        {/* Document for PDF capture — A3 landscape ~ A4 x2 */}
        <div
          className="bg-white text-gray-900 p-12"
          style={{
            width: "1122px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {/* ═══════ Header ═══════ */}
          <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-gray-300">
            <img
              src={photoUrl}
              alt="Nick Jiang"
              className="w-16 h-16 rounded-full object-cover shrink-0"
              crossOrigin="anonymous"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold tracking-tight">
                {zh.name} / {en.name}
              </h1>
              <p className="text-lg text-gray-500 mt-0.5">
                {zh.title} / {en.title}
              </p>
            </div>
            <div className="text-right text-sm text-gray-600 shrink-0">
              <p>{zh.phone}</p>
              <p>{zh.email}</p>
            </div>
          </div>

          {/* ═══════ Two Columns ═══════ */}
          <div className="flex gap-8">
            {/* ── Left: Chinese ── */}
            <div className="flex-1 min-w-0">
              <ColumnHeader label="简体中文" />

              {/* Education */}
              <Section title={SECTION_ZH.education}>
                <p className="text-sm text-gray-500">{zh.education.period}</p>
                <p className="text-sm font-medium">{zh.education.degree}</p>
                <p className="text-sm text-gray-600">{zh.education.major}</p>
                <p className="text-sm text-gray-600">{zh.education.school}</p>
              </Section>

              {/* About */}
              <Section title={SECTION_ZH.about}>
                <ul className="space-y-0.5">
                  {zh.about.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-1.5">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Experiences */}
              <Section title={SECTION_ZH.experience}>
                {zh.experiences.map((exp, i) => (
                  <div
                    key={i}
                    className={i > 0 ? "mt-3 pt-3 border-t border-gray-100" : ""}
                  >
                    <span className="text-xs text-gray-400">{exp.period}</span>
                    <p className="text-sm font-semibold mt-0.5">
                      {exp.title}
                      <span className="font-normal text-gray-500">
                        {" "}
                        · {exp.company}
                      </span>
                    </p>
                    <ul className="mt-1 space-y-0.5">
                      {exp.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-xs text-gray-600 flex gap-1"
                        >
                          <span className="shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Section>
            </div>

            {/* ── Divider ── */}
            <div className="w-px bg-gray-200 shrink-0" />

            {/* ── Right: English ── */}
            <div className="flex-1 min-w-0">
              <ColumnHeader label="English" />

              {/* Education */}
              <Section title={SECTION_EN.education}>
                <p className="text-sm text-gray-500">{en.education.period}</p>
                <p className="text-sm font-medium">{en.education.degree}</p>
                <p className="text-sm text-gray-600">{en.education.major}</p>
                <p className="text-sm text-gray-600">{en.education.school}</p>
              </Section>

              {/* About */}
              <Section title={SECTION_EN.about}>
                <ul className="space-y-0.5">
                  {en.about.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-1.5">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Experiences */}
              <Section title={SECTION_EN.experience}>
                {en.experiences.map((exp, i) => (
                  <div
                    key={i}
                    className={i > 0 ? "mt-3 pt-3 border-t border-gray-100" : ""}
                  >
                    <span className="text-xs text-gray-400">{exp.period}</span>
                    <p className="text-sm font-semibold mt-0.5">
                      {exp.title}
                      <span className="font-normal text-gray-500">
                        {" "}
                        · {exp.company}
                      </span>
                    </p>
                    <ul className="mt-1 space-y-0.5">
                      {exp.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-xs text-gray-600 flex gap-1"
                        >
                          <span className="shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Section>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
            Generated from nickjiang-homepage · {new Date().toISOString().slice(0, 10)}
          </div>
        </div>
      </div>
    );
  }
);

/* ── Sub-components ── */

function ColumnHeader({ label }: { label: string }) {
  return (
    <div className="text-center mb-4 py-1 bg-gray-100 rounded text-xs tracking-widest uppercase text-gray-500 font-medium">
      {label}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-2">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default BilingualResumePDF;
