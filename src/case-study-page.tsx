import { useState } from "react";
import type { CSSProperties } from "react";
import type { CaseStudyProject } from "./case-studies/types";

type WindowWithGtag = Window & {
  gtag?: (command: "event", eventName: string, parameters: Record<string, string>) => void;
};

function trackLineClick(servicePage: string, linkLocation: string) {
  if (typeof window === "undefined") return;
  (window as WindowWithGtag).gtag?.("event", "line_contact_click", {
    service_page: servicePage,
    link_location: linkLocation,
  });
}

function lines(value: string) {
  return value.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < value.split("\n").length - 1 && <br />}
    </span>
  ));
}

const thaiDateFormatter = new Intl.DateTimeFormat("th-TH-u-ca-buddhist", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Bangkok",
});

function formatThaiDate(value: string) {
  return thaiDateFormatter.format(new Date(value));
}

export default function CaseStudyPage({ project }: { project: CaseStudyProject }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const analyticsPage = `case_study_${project.slug}`;

  return (
    <main className="case-study-page">
      <header className="site-header case-study-header">
        <a className="brand" href="/">
          <img src="/logo-mm-cctv-navy.webp" alt="M&M CCTV" />
          <span>
            <strong>M&amp;M CCTV</strong>
            <small>SMART SECURITY FOR YOUR LIFE</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={isMenuOpen}
          aria-controls="case-study-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav
          id="case-study-menu"
          className={isMenuOpen ? "is-open" : ""}
          aria-label="เมนูกรณีศึกษา"
        >
          <a href="#project-brief" onClick={() => setIsMenuOpen(false)}>โจทย์หน้างาน</a>
          <a href="#project-process" onClick={() => setIsMenuOpen(false)}>ลำดับการทำงาน</a>
          <a href="#project-result" onClick={() => setIsMenuOpen(false)}>ผลลัพธ์</a>
        </nav>
        <a
          className="header-cta"
          href="https://line.me/ti/p/~mmcctv"
          onClick={() => trackLineClick(analyticsPage, "header")}
        >
          ปรึกษาทีมช่าง <span>↗</span>
        </a>
      </header>

      <section className="case-study-hero">
        <div className="case-study-hero-copy">
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <a href="/">หน้าแรก</a>
            <span aria-hidden="true">/</span>
            <a href={project.servicePath}>{project.serviceName}</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <span className="case-study-kicker">{project.kicker}</span>
          <h1>{project.hero.title}<br /><em>{project.hero.accentTitle}</em></h1>
          <p>{project.hero.description}</p>
          <a className="btn case-study-hero-cta" href="#project-process">
            ดูลำดับการทำงาน <span>↓</span>
          </a>
        </div>
        <picture className="case-study-hero-media">
          <source media="(max-width: 720px)" srcSet={project.hero.mobileImage} />
          <img
            src={project.hero.desktopImage}
            alt={project.hero.alt}
            width={project.hero.width}
            height={project.hero.height}
            fetchPriority="high"
          />
        </picture>
      </section>

      <section className="case-study-facts" aria-label="ข้อมูลโครงการ">
        {project.projectDetails.map((detail) => (
          <article key={detail.label}>
            <span>{detail.label}</span>
            <strong>
              {detail.dateTime
                ? <time dateTime={detail.dateTime}>{detail.value}</time>
                : detail.value}
            </strong>
          </article>
        ))}
      </section>

      <section className="case-study-brief" id="project-brief">
        <div>
          <span className="case-study-index">01 / PROJECT BRIEF</span>
          <h2>{lines(project.projectBrief.title)}</h2>
        </div>
        <div className="case-study-brief-copy">
          <p>{project.projectBrief.description}</p>
          <ul>
            {project.projectBrief.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </section>

      <section className="case-study-process" id="project-process">
        <div className="case-study-section-head">
          <span className="case-study-index">02 / REAL PROCESS</span>
          <h2>{lines(project.process.title)}</h2>
          <p>{project.process.description}</p>
        </div>

        <div className="case-study-story">
          {project.process.stages.map((stage) => (
            <article className="case-study-story-stage" key={stage.no}>
              <div className="case-study-story-copy">
                <span>{stage.no} / {stage.label}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
              <div className={`case-study-story-images case-study-story-images-${stage.images.length}`}>
                {stage.images.map((image, imageIndex) => (
                  <figure
                    key={image.src}
                    className={imageIndex === 0 ? "is-primary" : undefined}
                  >
                    <img
                      className={image.className}
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      style={image.objectPosition
                        ? ({ objectPosition: image.objectPosition } as CSSProperties)
                        : undefined}
                    />
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-study-result" id="project-result">
        <div className="case-study-result-copy">
          <span className="case-study-index">03 / RESULT</span>
          <h2>{lines(project.results.title)}</h2>
          <p>{project.results.description}</p>
        </div>
        <div className="case-study-result-list">
          {project.results.items.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="case-study-disclosure">
        <span>{project.disclosure.eyebrow}</span>
        <h2>{project.disclosure.title}</h2>
        <p>{project.disclosure.description}</p>
        <a href={project.servicePath}>ดูรายละเอียดบริการ{project.serviceName} <span>↗</span></a>
        <p className="case-study-published">
          เผยแพร่ <time dateTime={project.publishedDate}>{formatThaiDate(project.publishedDate)}</time>
          <span aria-hidden="true"> · </span>
          อัปเดต <time dateTime={project.modifiedDate}>{formatThaiDate(project.modifiedDate)}</time>
        </p>
      </section>

      <section className="case-study-contact">
        <span>{project.contact.eyebrow}</span>
        <h2>{lines(project.contact.title)}</h2>
        <div>
          <a
            className="btn barrier-line-btn"
            href="https://line.me/ti/p/~mmcctv"
            onClick={() => trackLineClick(analyticsPage, "case_study_footer")}
          >
            ทัก LINE ID: mmcctv <span>↗</span>
          </a>
          <a href={project.servicePath}>กลับไปหน้าบริการ {project.serviceName}</a>
        </div>
      </section>

      <footer className="detail-footer case-study-footer">
        <a className="footer-brand" href="/">
          <img src="/logo-mm-cctv-navy.webp" alt="" />
          <span><strong>M&amp;M CCTV</strong><small>SMART SECURITY FOR YOUR LIFE</small></span>
        </a>
        <a href="/">กลับหน้าหลัก</a>
        <small>© 2026 M&amp;M CCTV · ห้างหุ้นส่วนสามัญ เอ็มแอนด์เอ็ม ซีซีทีวี</small>
      </footer>
    </main>
  );
}
