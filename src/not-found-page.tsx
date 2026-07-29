import React from "react";

const serviceLinks = [
  { href: "/services/cctv", label: "กล้องวงจรปิด" },
  { href: "/services/access-control", label: "ระบบควบคุมเข้า–ออก" },
  { href: "/services/car-park-barrier", label: "ระบบไม้กั้นรถยนต์" },
  { href: "/services/maintenance", label: "บริการดูแลระบบ" },
];

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <header className="site-header not-found-header">
        <a className="brand" href="/" aria-label="กลับหน้าแรก M&M CCTV">
          <img src="/logo-mm-cctv-navy.webp" alt="M&M CCTV" />
          <span>
            <strong>M&amp;M CCTV</strong>
            <small>SMART SECURITY FOR YOUR LIFE</small>
          </span>
        </a>
        <a className="header-cta" href="/">
          กลับหน้าแรก <span>↗</span>
        </a>
      </header>

      <section className="not-found-content">
        <div className="not-found-code" aria-hidden="true">404</div>
        <span className="not-found-kicker">PAGE NOT FOUND</span>
        <h1>ไม่พบหน้าที่คุณกำลังค้นหา</h1>
        <p>
          ลิงก์อาจไม่ถูกต้อง หรือหน้าดังกล่าวอาจถูกย้ายไปแล้ว
          คุณสามารถกลับหน้าแรกหรือเลือกดูบริการหลักของเราได้จากด้านล่าง
        </p>
        <a className="btn primary not-found-home" href="/">
          กลับหน้าแรก <span>↗</span>
        </a>

        <nav className="not-found-services" aria-label="บริการหลัก">
          {serviceLinks.map((service, index) => (
            <a href={service.href} key={service.href}>
              <span>0{index + 1}</span>
              <strong>{service.label}</strong>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}
