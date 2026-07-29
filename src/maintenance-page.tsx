import { useState } from "react";

const maintenanceScope = [
  ["01", "/services/maintenance/scope-camera-v1.png", "กล้องและภาพ", "ตรวจความคมชัด มุมภาพ อินฟราเรด เลนส์ และคราบสกปรกที่กระทบการมองเห็น"],
  ["02", "/services/maintenance/scope-recorder-v1.png", "เครื่องบันทึก", "ตรวจสถานะ HDD การบันทึกย้อนหลัง เวลาในระบบ และแจ้งเตือนความผิดปกติ"],
  ["03", "/services/maintenance/scope-network-v1.png", "เครือข่ายและไฟเลี้ยง", "ตรวจ PoE Switch สายสัญญาณ จุดเชื่อมต่อ อะแดปเตอร์ และระบบสำรองไฟ"],
  ["04", "/services/maintenance/scope-access-v1.png", "การเข้าถึงระบบ", "ทดสอบบัญชีผู้ใช้ แอปพลิเคชัน การดูออนไลน์ และสิทธิ์การเข้าถึงที่จำเป็น"],
];

const serviceSteps = [
  ["01", "สำรวจระบบเดิม", "บันทึกรุ่น จำนวนจุด อายุอุปกรณ์ และปัญหาที่พบจากผู้ใช้งาน"],
  ["02", "ตรวจเช็กเป็นรายการ", "ทดสอบการทำงานจริงทีละส่วน ไม่ประเมินจากภาพที่หน้าจอเพียงอย่างเดียว"],
  ["03", "แก้ไขและเสนอทางเลือก", "แยกงานที่แก้ได้ทันที อะไหล่ที่ควรเปลี่ยน และรายการที่ยังใช้งานต่อได้"],
  ["04", "ส่งรายงานผล", "สรุปสถานะ จุดเสี่ยง ภาพประกอบ และคำแนะนำสำหรับรอบถัดไป"],
];

function MaintenanceStepIcon({ step }: { step: string }) {
  const commonProps = {
    viewBox: "0 0 48 48",
    "aria-hidden": true,
  };

  if (step === "01") {
    return (
      <svg {...commonProps}>
        <path d="M8 14h22v17H8zM13 19h12M13 24h8" />
        <circle cx="34" cy="31" r="7" />
        <path d="m39 36 4 4" />
      </svg>
    );
  }
  if (step === "02") {
    return (
      <svg {...commonProps}>
        <path d="M10 8h28v32H10zM16 16h16M16 23h16M16 30h8" />
        <path className="ma-icon-accent" d="m29 31 3 3 7-8" />
      </svg>
    );
  }
  if (step === "03") {
    return (
      <svg {...commonProps}>
        <path d="M9 14h30v22H9zM15 20h18M15 27h10" />
        <path className="ma-icon-accent" d="M31 28v8M27 32h8" />
      </svg>
    );
  }
  return (
    <svg {...commonProps}>
      <path d="M11 8h21l6 6v26H11zM32 8v7h6M17 21h15M17 27h15M17 33h8" />
      <path className="ma-icon-accent" d="m29 33 3 3 7-8" />
    </svg>
  );
}

export default function MaintenancePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="maintenance-page">
      <header className="site-header maintenance-header">
        <a className="brand" href="/" aria-label="กลับหน้าหลัก M&M CCTV">
          <img src="/logo-mm-cctv-navy.webp" alt="M&M CCTV" />
          <span><strong>M&amp;M CCTV</strong><small>SMART SECURITY FOR YOUR LIFE</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={isMenuOpen}
          aria-controls="maintenance-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav id="maintenance-menu" className={isMenuOpen ? "is-open" : ""} aria-label="เมนูหน้าบริการดูแลระบบ">
          <a href="#maintenance-signs" onClick={closeMenu}>เมื่อไรควรตรวจ</a>
          <a href="#maintenance-scope" onClick={closeMenu}>รายการตรวจเช็ก</a>
          <a href="#maintenance-process" onClick={closeMenu}>ขั้นตอนบริการ</a>
          <a href="#maintenance-contact" onClick={closeMenu}>ขอประเมินระบบ</a>
        </nav>
        <a className="header-cta" href="https://line.me/ti/p/~mmcctv">ปรึกษาทีมช่าง <span>↗</span></a>
      </header>

      <section className="maintenance-hero">
        <img src="/services/maintenance/maintenance-hero-v2.png" alt="ช่างตรวจเช็กกล้องวงจรปิดและตู้ระบบเครือข่าย" />
        <div className="maintenance-hero-copy">
          <a href="/">← กลับหน้าหลัก</a>
          <span>MAINTENANCE &amp; SYSTEM CARE</span>
          <h1>ให้ระบบพร้อมใช้<br /><em>ก่อนปัญหาจะเกิด</em></h1>
          <p>ตรวจเช็ก บำรุงรักษา และแก้ปัญหาระบบเดิมอย่างเป็นขั้นตอน พร้อมรายงานสิ่งที่พบ เพื่อให้คุณวางแผนซ่อมหรือเปลี่ยนอุปกรณ์ได้ตรงจุด</p>
          <a className="btn maintenance-hero-btn" href="#maintenance-contact">ขอประเมินระบบเดิม <span>↓</span></a>
        </div>
      </section>

      <section className="maintenance-signs" id="maintenance-signs">
        <div>
          <span className="maintenance-kicker">01 / CHECK FIRST</span>
          <h2>อย่ารอให้ภาพหาย<br />แล้วค่อยเรียกช่าง</h2>
          <p className="maintenance-sign-intro">ความผิดปกติเล็ก ๆ มักเป็นสัญญาณก่อนระบบหยุดทำงาน การตรวจตั้งแต่เริ่มพบอาการช่วยลดเวลาที่ระบบใช้งานไม่ได้ และทำให้วางแผนค่าใช้จ่ายได้ง่ายกว่า</p>
        </div>
        <div className="maintenance-sign-list">
          <article><strong>ภาพไม่ชัดหรือมืดกว่าปกติ</strong><p>เลนส์สกปรก อินฟราเรดเสื่อม มุมกล้องเคลื่อน หรือแสงหน้างานเปลี่ยน</p></article>
          <article><strong>เปิดย้อนหลังแล้วไม่มีข้อมูล</strong><p>HDD มีปัญหา ตารางบันทึกผิด หรือเครื่องบันทึกแจ้งเตือนแต่ไม่มีผู้ตรวจสอบ</p></article>
          <article><strong>ดูออนไลน์ไม่เสถียร</strong><p>ต้องแยกให้ชัดว่าเกิดจากอินเทอร์เน็ต เครือข่ายภายใน หรืออุปกรณ์ปลายทาง</p></article>
        </div>
      </section>

      <section className="maintenance-scope" id="maintenance-scope">
        <div className="maintenance-section-head">
          <span className="maintenance-kicker">02 / MA SCOPE</span>
          <h2>ตรวจทั้งระบบ<br />ไม่ใช่แค่เช็ดกล้อง</h2>
          <p>รายการตรวจเช็กจะปรับตามประเภทและอายุของระบบเดิม เพื่อให้เห็นทั้งอาการที่เกิดขึ้นแล้วและจุดเสี่ยงที่ควรวางแผนล่วงหน้า</p>
        </div>
        <div className="maintenance-scope-grid">
          {maintenanceScope.map(([no, image, title, text]) => (
            <article key={no}>
              <img src={image} alt="" loading="lazy" />
              <div>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="maintenance-process" id="maintenance-process">
        <div className="maintenance-process-head">
          <span className="maintenance-kicker">03 / SERVICE FLOW</span>
          <h2>รู้ว่าอะไรเสีย<br />และอะไรยังใช้ต่อได้</h2>
          <p>เป้าหมายของงาน MA คือข้อมูลที่ช่วยตัดสินใจ ไม่ใช่เปลี่ยนอุปกรณ์ทุกชิ้นโดยไม่จำเป็น</p>
        </div>
        <div className="maintenance-process-grid">
          {serviceSteps.map(([no, title, text]) => (
            <article key={no}>
              <span>{no}</span>
              <div className="maintenance-process-icon">
                <MaintenanceStepIcon step={no} />
              </div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="maintenance-report">
        <span className="maintenance-kicker">REPORT INCLUDED</span>
        <h2>หลังตรวจเสร็จ<br />คุณควรรู้สถานะระบบของตัวเอง</h2>
        <div>
          <p>สรุปจุดที่ตรวจ อาการที่พบ และสิ่งที่ดำเนินการแล้ว</p>
          <p>แยกรายการเร่งด่วน รายการเฝ้าระวัง และงานที่วางแผนภายหลังได้</p>
          <p>แนบภาพประกอบหน้างานเพื่อใช้ติดตามผลในรอบถัดไป</p>
        </div>
      </section>

      <section className="maintenance-contact" id="maintenance-contact">
        <span>เริ่มจากข้อมูลระบบที่มีอยู่</span>
        <h2>ส่งรูปเครื่องบันทึก จำนวนกล้อง<br />และอาการที่พบให้เราดู</h2>
        <p>ทีมช่างจะช่วยประเมินเบื้องต้นว่าควรเข้าตรวจเฉพาะจุด หรือนัดตรวจเช็กทั้งระบบ</p>
        <a className="btn maintenance-line-btn" href="https://line.me/ti/p/~mmcctv">
          <span className="maintenance-line-mark" aria-hidden="true">LINE</span>
          <span>ทัก LINE ID: mmcctv</span>
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="detail-footer maintenance-footer">
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
