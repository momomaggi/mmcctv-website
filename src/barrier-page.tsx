import { useEffect, useState } from "react";

const entryModes = [
  ["01", "อ่านป้ายทะเบียน", "ให้รถที่ลงทะเบียนผ่านเข้า–ออกได้ตามสิทธิ์และช่วงเวลาที่กำหนด"],
  ["02", "บัตรและรีโมต", "เหมาะกับหมู่บ้าน อาคาร และพื้นที่ที่ต้องการวิธีใช้งานเรียบง่าย"],
  ["03", "ผู้มาติดต่อ", "ออกแบบจุดแลกบัตร กดเปิด หรือบันทึกข้อมูลตามขั้นตอนของแต่ละหน้างาน"],
];

export default function BarrierPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "ติดตั้งไม้กั้นรถยนต์และระบบอ่านป้ายทะเบียน | M&M CCTV";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="barrier-page">
      <header className="site-header barrier-header">
        <a className="brand" href="/" aria-label="กลับหน้าหลัก M&M CCTV">
          <img src="/logo-mm-cctv-navy.webp" alt="M&M CCTV" />
          <span><strong>M&amp;M CCTV</strong><small>SMART SECURITY FOR YOUR LIFE</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={isMenuOpen}
          aria-controls="barrier-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav id="barrier-menu" className={isMenuOpen ? "is-open" : ""} aria-label="เมนูหน้าระบบไม้กั้นรถยนต์">
          <a href="#barrier-methods" onClick={() => setIsMenuOpen(false)}>วิธีผ่านเข้า–ออก</a>
          <a href="#barrier-system" onClick={() => setIsMenuOpen(false)}>องค์ประกอบระบบ</a>
          <a href="#barrier-contact" onClick={() => setIsMenuOpen(false)}>ประเมินหน้างาน</a>
        </nav>
        <a className="header-cta" href="https://line.me/ti/p/~mmcctv">ปรึกษาทีมช่าง <span>↗</span></a>
      </header>

      <section className="barrier-hero">
        <img src="/services/car-park-barrier/barrier-hero-v2.webp" alt="ไม้กั้นรถยนต์และกล้องอ่านป้ายทะเบียนบริเวณทางเข้าโครงการ" />
        <div className="barrier-hero-copy">
          <a href="/">← กลับหน้าหลัก</a>
          <span>VEHICLE ACCESS SOLUTIONS</span>
          <h1>ให้รถผ่านได้<br /><em>โดยไม่ทำให้ทางเข้าติดขัด</em></h1>
          <p>ออกแบบไม้กั้นรถยนต์ กล้องอ่านป้ายทะเบียน และวิธีบริหารรถเข้า–ออกให้เหมาะกับจำนวนรถ ความเร็วของช่องทาง และขั้นตอนรักษาความปลอดภัย</p>
          <a className="btn white" href="https://line.me/ti/p/~mmcctv">ส่งรูปทางเข้าให้ประเมิน <span>↗</span></a>
        </div>
      </section>

      <section className="barrier-methods" id="barrier-methods">
        <div className="barrier-section-head">
          <span>01 / ENTRY</span>
          <h2>เลือกวิธีเปิดไม้กั้น<br />ตามผู้ใช้งานจริง</h2>
          <p>รถประจำและรถผู้มาติดต่อไม่จำเป็นต้องใช้ขั้นตอนเดียวกัน ระบบที่ดีควรลดเวลารอโดยยังตรวจสอบได้</p>
        </div>
        <div className="barrier-method-grid">
          {entryModes.map(([no, title, text]) => (
            <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="barrier-system" id="barrier-system">
        <span>02 / FLOW</span>
        <h2>ไม่ได้มีแค่แขนไม้กั้น<br />แต่คือการจัดการทางรถทั้งระบบ</h2>
        <div>
          <p>ตำแหน่งกล้อง ระยะชะลอรถ เซนเซอร์กันไม้ตกใส่รถ และวิธีเปิดกรณีฉุกเฉิน ต้องถูกออกแบบร่วมกันตั้งแต่สำรวจหน้างาน</p>
          <ul>
            <li>กล้องอ่านป้ายทะเบียนและไฟส่องสว่างที่เหมาะสม</li>
            <li>Loop Detector หรืออุปกรณ์ตรวจจับรถตามรูปแบบงาน</li>
            <li>ระบบสำรองและการเปิดไม้เมื่อไฟดับหรือเกิดเหตุฉุกเฉิน</li>
          </ul>
        </div>
      </section>

      <section className="barrier-contact" id="barrier-contact">
        <span>เริ่มจากข้อมูลช่องทางรถ</span>
        <h2>ส่งรูปทางเข้า จำนวนช่อง<br />และจำนวนรถให้เราดู</h2>
        <a className="btn white" href="https://line.me/ti/p/~mmcctv">ทัก LINE ID: mmcctv <span>↗</span></a>
      </section>
    </main>
  );
}
