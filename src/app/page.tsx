"use client";

import { useState, useRef } from "react";
import data from "@/data/resume";
import ResumeExportTemplate from "@/components/BilingualResumePDF";

const TOGGLE_LABELS: Record<"zh" | "en", string> = {
  zh: "English →",
  en: "中文 →",
};

const PDF_LABELS: Record<"zh" | "en", string> = {
  zh: "导出PDF简历",
  en: "export as PDF file",
};

const SECTION_TITLES: Record<"zh" | "en", Record<string, string>> = {
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

type Lang = "zh" | "en";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [exporting, setExporting] = useState(false);
  const templateRef = useRef<HTMLDivElement>(null);

  const d = data[lang];
  const t = SECTION_TITLES[lang];

  const handleExportPDF = async () => {
    setExporting(true);

    try {
      // 等待 React 渲染 + 图片加载完成
      await new Promise((r) => setTimeout(r, 300));

      // 等待模板中的图片加载完成
      const img = document.querySelector<HTMLImageElement>("#pdf-template img");
      if (img && !img.complete) {
        await new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve(); // 即使加载失败也继续
        });
      }

      const el = document.getElementById("pdf-template");
      if (!el) {
        console.error("PDF template element not found");
        return;
      }

      const html2pdf = (await import("html2pdf.js")).default;
      const opt = {
        margin: 0,
        filename: `Nick_Jiang_Resume_${new Date().toISOString().slice(0, 10)}.pdf`,
        image: { type: "jpeg" as const, quality: 0.95 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: true,
          // onclone: 在 html2canvas 克隆的 DOM 中修复渐变和定位
          onclone: (clonedDoc: Document) => {
            const template = clonedDoc.getElementById("pdf-template");
            if (template) {
              // 确保模板在克隆文档中可见且正确定位
              template.style.position = "relative";
              template.style.display = "block";
              template.style.visibility = "visible";
              // 将渐变替换为纯色（html2canvas 不支持渐变）
              const sidebars = template.querySelectorAll<HTMLElement>('[style*="linear-gradient"]');
              sidebars.forEach((el) => {
                el.style.backgroundImage = "none";
                el.style.backgroundColor = "#162544";
              });
            }
          },
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      await html2pdf().set(opt).from(el).save();
    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* ═══════ Sidebar ═══════ */}
      <aside className="sidebar-bg text-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-[380px] lg:flex lg:flex-col overflow-y-auto shrink-0">
        <div className="px-8 py-10 lg:px-10 lg:py-14 flex flex-col lg:h-full">
          {/* PDF Export + Language Toggle */}
          <div className="flex justify-end items-center gap-2 mb-8 no-print">
            <button
              onClick={handleExportPDF}
              disabled={exporting}
              className="text-xs tracking-wider uppercase border border-white/25 rounded-full px-4 py-1.5
                         hover:bg-white/10 hover:border-white/40 transition-colors cursor-pointer
                         disabled:opacity-50 disabled:cursor-wait"
            >
              {exporting ? "⏳ " : ""}{PDF_LABELS[lang]}
            </button>
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="text-xs tracking-wider uppercase border border-white/25 rounded-full px-4 py-1.5
                         hover:bg-white/10 hover:border-white/40 transition-colors cursor-pointer"
            >
              {TOGGLE_LABELS[lang]}
            </button>
          </div>

          {/* Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
              <img
                src="photo.jpg"
                alt={lang === "zh" ? "蒋卢" : "Nick Jiang"}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-1">
              {d.name}
            </h1>
            <p className="text-lg text-white/70 font-medium tracking-wide mt-2">
              {d.title}
            </p>
          </div>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
              {t.contact}
            </h2>
            <div className="space-y-1.5 text-sm text-white/80">
              <p>{d.phone}</p>
              <p className="break-all">{d.email}</p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
              {t.education}
            </h2>
            <p className="text-sm text-white/50">{d.education.period}</p>
            <p className="text-sm text-white/90 font-medium mt-0.5">
              {d.education.degree}
            </p>
            <p className="text-sm text-white/70">{d.education.major}</p>
            <p className="text-sm text-white/70">{d.education.school}</p>
          </section>

          {/* About Me */}
          <section className="lg:mt-auto">
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-3">
              {t.about}
            </h2>
            <ul className="space-y-1.5 text-sm text-white/70">
              {d.about.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </aside>

      {/* ═══════ Main Content ═══════ */}
      <main className="flex-1 lg:ml-[380px] bg-white">
        <div className="px-6 py-10 lg:px-14 lg:py-14 max-w-3xl">
          <h2 className="text-sm uppercase tracking-[0.2em] text-text-muted font-medium mb-10">
            {t.experience}
          </h2>

          <div className="relative">
            <div className="timeline-line hidden lg:block" />
            <div className="space-y-10 lg:space-y-12">
              {d.experiences.map((exp, idx) => (
                <div key={idx} className="relative lg:pl-8 experience-card">
                  <div
                    className={`timeline-dot hidden lg:block ${
                      idx === 0 ? "!w-3.5 !h-3.5 !left-[-6px] !top-[4px]" : ""
                    }`}
                  />
                  <span className="inline-block text-xs font-medium text-accent bg-accent-light rounded-full px-3 py-1 mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary mt-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="text-sm text-text-secondary leading-relaxed flex gap-2"
                      >
                        <span className="text-accent shrink-0 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-border text-xs text-text-muted no-print">
            <p>© {new Date().getFullYear()} Nick Jiang. All rights reserved.</p>
          </footer>
        </div>
      </main>

      {/* ═══ PDF Export Overlay (only rendered during export) ═══ */}
      {exporting && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99999,
          background: "#808080", overflow: "auto",
        }}>
          <ResumeExportTemplate ref={templateRef} data={d} lang={lang} />
        </div>
      )}
    </div>
  );
}
