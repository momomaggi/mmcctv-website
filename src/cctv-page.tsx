import { useState } from "react";

const solutions = [
  {
    title: "บ้านพักอาศัย",
    text: "วางมุมกล้องให้ครอบคลุมทางเข้า รอบบ้าน และจุดสำคัญ พร้อมตั้งค่าดูภาพผ่านมือถือ",
    image: "/services/cctv/cctv-solution-modern-home.webp",
    icon: "⌂",
  },
  {
    title: "ร้านค้าและสำนักงาน",
    text: "ช่วยดูแลหน้าร้าน จุดชำระเงิน พื้นที่ทำงาน และทางเข้า–ออก พร้อมค้นหาภาพย้อนหลังได้สะดวก",
    image: "/services/cctv/cctv-solution-office-retail.webp",
    icon: "▦",
  },
  {
    title: "โรงงานและคลังสินค้า",
    text: "ออกแบบระบบให้เหมาะกับพื้นที่กว้าง จุดเสี่ยง แสงหน้างาน และระยะเดินสายจริง",
    image: "/services/cctv/cctv-solution-factory-warehouse.webp",
    icon: "⚙︎",
  },
];

const systemTypes = [
  {
    label: "IP CAMERA",
    title: "ระบบกล้องไอพี",
    text: "ภาพคมชัด บริหารจัดการง่าย และรองรับการขยายระบบ เหมาะกับงานใหม่และพื้นที่ที่ต้องการความยืดหยุ่น",
  },
  {
    label: "HDTVI",
    title: "ระบบกล้องเดินสาย",
    text: "คุ้มค่า ใช้งานเสถียร และเหมาะกับการปรับปรุงระบบเดิมที่มีสายสัญญาณอยู่แล้ว",
  },
  {
    label: "WI-FI CAMERA",
    title: "กล้องไวไฟ",
    text: "เหมาะกับพื้นที่ขนาดเล็กหรือจุดที่ต้องการติดตั้งไม่ซับซ้อน โดยยังต้องมีจุดจ่ายไฟและสัญญาณเครือข่ายที่เหมาะสม",
  },
];

export default function CctvPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="service-detail-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="กลับหน้าหลัก M&M CCTV">
          <img src="/logo-mm-cctv.webp" alt="M&M CCTV" />
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
          aria-controls="cctv-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="cctv-menu" className={isMenuOpen ? "is-open" : ""} aria-label="เมนูหน้ากล้องวงจรปิด">
          <a href="#solutions" onClick={closeMenu}>เหมาะกับใคร</a>
          <a href="#systems" onClick={closeMenu}>เลือกระบบ</a>
          <a href="#why-us" onClick={closeMenu}>ทำไมเลือกเรา</a>
          <a href="#cctv-contact" onClick={closeMenu}>ขอคำแนะนำ</a>
        </nav>
        <a className="header-cta" href="https://line.me/ti/p/~mmcctv">
          ปรึกษาทีมช่าง <span>↗</span>
        </a>
      </header>

      <section className="cctv-hero" id="top">
        <div className="cctv-hero-copy">
          <a className="detail-back" href="/">← กลับหน้าหลัก</a>
          <span className="kicker">บริการติดตั้งกล้องวงจรปิด</span>
          <h1>
            เห็นชัดทุกจุดสำคัญ
            <br />
            <em>ออกแบบจากพื้นที่จริง</em>
          </h1>
          <p>
            ระบบ IP Camera และ HDTVI สำหรับบ้าน ร้านค้า สำนักงาน และโรงงาน
            ทีมช่างช่วยสำรวจ วางตำแหน่ง เลือกอุปกรณ์ และตั้งค่าดูผ่านมือถือให้พร้อมใช้งาน
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="https://line.me/ti/p/~mmcctv">
              ส่งรูปหน้างานให้ประเมิน <span>↗</span>
            </a>
            <a className="btn secondary" href="#systems">
              ดูระบบที่เหมาะกับคุณ <span>↓</span>
            </a>
          </div>
          <div className="cctv-hero-points">
            <span>สำรวจและออกแบบ</span>
            <span>ติดตั้งโดยทีมช่าง</span>
            <span>ดูแลหลังการขาย</span>
          </div>
        </div>
        <div className="cctv-hero-image">
          <img src="/services/cctv/cctv-service-hero-modern-home.webp" alt="กล้องวงจรปิดติดตั้งภายนอกบ้านสมัยใหม่" />
          <div className="cctv-image-note">
            <strong>10+</strong>
            <span>ปีประสบการณ์<br />งานระบบรักษาความปลอดภัย</span>
          </div>
        </div>
      </section>

      <section className="cctv-solutions" id="solutions">
        <div className="detail-section-heading">
          <div>
            <span className="kicker">ออกแบบให้ตรงการใช้งาน</span>
            <h2>แต่ละพื้นที่ต้องการ<br />มุมมองที่ต่างกัน</h2>
          </div>
          <p>
            เราเริ่มจากจุดที่ต้องการดูจริง สภาพแสง ระยะภาพ และวิธีเดินสาย
            เพื่อให้ระบบใช้งานได้คุ้มค่าและดูแลง่ายในระยะยาว
          </p>
        </div>
        <div className="solution-grid">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              style={{ backgroundImage: `url(${solution.image})` }}
            >
              <span className="solution-icon" aria-hidden="true">{solution.icon}</span>
              <div className="solution-copy">
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </div>
              <span className="solution-number" aria-hidden="true">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="cctv-systems" id="systems">
        <div className="systems-visual">
          <picture>
            <source
              media="(max-width: 620px)"
              srcSet="/services/cctv/cctv-system-contexts-mobile.webp"
            />
            <img
              src="/services/cctv/cctv-system-contexts-desktop.webp"
              alt="ตัวอย่างการเลือกกล้องวงจรปิดสำหรับบ้าน ร้านค้า และคลังสินค้า"
              loading="lazy"
            />
          </picture>
          <div>
            <span>เลือกจากหน้างานจริง</span>
            <strong>ไม่ยัดสเปกเกินความจำเป็น</strong>
          </div>
        </div>
        <div className="systems-copy">
          <span className="kicker">เลือกระบบให้เหมาะกับพื้นที่</span>
          <h2>ไม่จำเป็นต้องใช้<br />กล้องแบบเดียวกันทุกงาน</h2>
          <div className="system-list">
            {systemTypes.map((system) => (
              <article key={system.label}>
                <small>{system.label}</small>
                <h3>{system.title}</h3>
                <p>{system.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cctv-why" id="why-us">
        <span className="kicker">สิ่งที่ได้รับจาก M&amp;M CCTV</span>
        <h2>ครบตั้งแต่คำแนะนำ<br />จนถึงหลังส่งมอบงาน</h2>
        <div className="why-grid">
          <article><strong>01</strong><h3>สำรวจหน้างาน</h3><p>ดูตำแหน่งติดตั้ง ระยะสาย แสง และจุดเสี่ยงก่อนเลือกระบบ</p></article>
          <article><strong>02</strong><h3>เสนอราคาเป็นรายการ</h3><p>แจกแจงอุปกรณ์และค่าติดตั้งให้ตรวจสอบก่อนเริ่มงาน</p></article>
          <article><strong>03</strong><h3>ติดตั้งพร้อมตั้งค่า</h3><p>เก็บงานเรียบร้อย ตั้งค่าบันทึกภาพ และสอนดูผ่านมือถือ</p></article>
          <article><strong>04</strong><h3>ติดต่อทีมเดิมได้</h3><p>เมื่อมีคำถามหรือต้องการดูแลระบบภายหลัง ยังติดต่อทีมงานได้</p></article>
        </div>
      </section>

      <section className="cctv-contact" id="cctv-contact">
        <div>
          <span className="kicker light">ประเมินเบื้องต้นฟรี</span>
          <h2>ส่งรูปพื้นที่หรือแชร์โลเคชั่น<br />ให้ทีมช่างช่วยวางระบบ</h2>
          <p>บอกประเภทสถานที่ จำนวนจุดที่ต้องการดู และงบประมาณคร่าว ๆ เพื่อรับคำแนะนำที่เหมาะกับหน้างาน</p>
        </div>
        <div className="cctv-contact-actions">
          <a className="btn white" href="https://line.me/ti/p/~mmcctv">
            ทัก LINE ID: mmcctv <span>↗</span>
          </a>
          <a className="detail-phone" href="tel:0991236879">โทร 099-123-6879</a>
        </div>
      </section>

      <footer className="detail-footer">
        <a className="footer-brand" href="/">
          <img src="/logo-mm-cctv.webp" alt="" />
          <span><strong>M&amp;M CCTV</strong><small>SMART SECURITY FOR YOUR LIFE</small></span>
        </a>
        <a href="/">กลับหน้าหลัก</a>
        <small>© 2026 M&amp;M CCTV · ห้างหุ้นส่วนสามัญ เอ็มแอนด์เอ็ม ซีซีทีวี</small>
      </footer>
    </main>
  );
}
