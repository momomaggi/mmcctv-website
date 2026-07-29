import { useState } from "react";

const entryModes = [
  ["01", "/services/car-park-barrier/method-plate-v1.webp", "อ่านป้ายทะเบียน", "ให้รถที่ลงทะเบียนผ่านเข้า–ออกได้ตามสิทธิ์และช่วงเวลาที่กำหนด"],
  ["02", "/services/car-park-barrier/method-uhf-v1.webp", "Easy Pass / UHF Tag", "อ่านแท็ก UHF ระยะไกลสำหรับรถประจำ โดยไม่ต้องลดกระจกหรือแตะบัตร"],
  ["03", "/services/car-park-barrier/method-card-v1.webp", "บัตรและรีโมต", "เหมาะกับหมู่บ้าน อาคาร และพื้นที่ที่ต้องการวิธีใช้งานเรียบง่าย"],
  ["04", "/services/car-park-barrier/method-visitor-v1.webp", "ผู้มาติดต่อ", "ออกแบบจุดแลกบัตร กดเปิด หรือบันทึกข้อมูลตามขั้นตอนของแต่ละหน้างาน"],
];

export default function BarrierPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <a href="#barrier-featured-kit" onClick={() => setIsMenuOpen(false)}>ชุดที่เราแนะนำ</a>
          <a href="#barrier-system" onClick={() => setIsMenuOpen(false)}>องค์ประกอบระบบ</a>
          <a href="#barrier-contact" onClick={() => setIsMenuOpen(false)}>ประเมินหน้างาน</a>
        </nav>
        <a className="header-cta" href="https://line.me/ti/p/~mmcctv">ปรึกษาทีมช่าง <span>↗</span></a>
      </header>

      <section className="barrier-hero">
        <img src="/services/car-park-barrier/barrier-hero-v3.png" alt="ไม้กั้นรถยนต์และกล้องอ่านป้ายทะเบียนบริเวณทางเข้าโครงการ" />
        <div className="barrier-hero-copy">
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <a href="/">หน้าแรก</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">ระบบไม้กั้นรถยนต์</span>
          </nav>
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
          {entryModes.map(([no, image, title, text]) => (
            <article key={no}>
              <img src={image} alt="" loading="lazy" />
              <div className="barrier-method-copy">
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="barrier-featured-kit" id="barrier-featured-kit">
        <div className="barrier-kit-heading">
          <span>02 / HIKVISION KIT</span>
          <p>ชุดไม้กั้นที่เราเลือกใช้บ่อย</p>
          <h2>อ่านป้าย ตรวจสอบสิทธิ์<br />และเปิดไม้ในระบบเดียว</h2>
          <p className="barrier-kit-intro">จับคู่ไม้กั้น Hikvision DS-TM4B0-DL/B/C กับชุดอ่านป้ายทะเบียน DS-TMC200-E1/3106 สำหรับหน้างานที่ต้องการให้รถประจำผ่านได้สะดวก พร้อมมีข้อมูลให้ตรวจสอบย้อนหลัง</p>
        </div>

        <figure className="barrier-kit-visual">
          <img
            src="/services/car-park-barrier/hikvision-kit-solution-v1.png"
            alt="ชุดกล้องอ่านป้ายทะเบียน จอ LED และไม้กั้นรถยนต์ Hikvision ทำงานร่วมกัน"
            loading="lazy"
          />
          <figcaption>
            <span>INTEGRATED VEHICLE ACCESS</span>
            <p>กล้องอ่านป้ายและจอแจ้งผลทำงานร่วมกับตู้ไม้กั้น เพื่อให้รถที่ได้รับอนุญาตผ่านได้โดยไม่ต้องลดกระจก</p>
          </figcaption>
        </figure>

        <div className="barrier-kit-products" aria-label="รุ่นอุปกรณ์ในชุดแนะนำ">
          <article>
            <div>
              <span>ANPR + LED DISPLAY</span>
              <strong>DS-TMC200-E1/3106</strong>
              <p>กล้องอ่านป้ายทะเบียน 2MP จอ LED ไฟส่องเสริม และเสียงประกาศ รวมอยู่ในชุดเดียว</p>
            </div>
            <img src="/services/car-park-barrier/product-tmc200-v1.png" alt="ชุดกล้องอ่านป้ายทะเบียน DS-TMC200-E1/3106" loading="lazy" />
          </article>
          <span className="barrier-kit-plus" aria-hidden="true">+</span>
          <article>
            <div>
              <span>BARRIER GATE</span>
              <strong>DS-TM4B0-DL/B/C</strong>
              <p>ตู้ไม้กั้นดีไซน์ทันสมัย ทำงานร่วมกับกล้อง ระบบตรวจจับรถ และระบบควบคุมทางเข้า–ออก</p>
            </div>
            <img src="/services/car-park-barrier/product-tm4b0-v1.png" alt="ตู้ไม้กั้นรถยนต์ DS-TM4B0-DL/B/C" loading="lazy" />
          </article>
        </div>

        <div className="barrier-kit-flow" aria-label="ลำดับการทำงานของระบบ">
          {[
            ["01", "อ่านทะเบียน", "จับภาพรถและอ่านป้ายทะเบียนไทยอัตโนมัติ", "/services/car-park-barrier/method-plate-v1.webp"],
            ["02", "ตรวจสอบสิทธิ์", "เปรียบเทียบกับรถที่อนุญาตหรือรถที่ต้องเฝ้าระวัง", "/services/car-park-barrier/flow-access-check-v2.png"],
            ["03", "แจ้งผล", "แสดงทะเบียนหรือข้อความบนจอ LED พร้อมเสียงประกาศ", "/services/car-park-barrier/flow-led-result-v1.png"],
            ["04", "เปิดไม้และบันทึก", "สั่งเปิดไม้กั้น พร้อมเก็บภาพและเวลาเข้า–ออก", "/services/car-park-barrier/flow-barrier-open-v2.png"],
          ].map(([no, title, text, image]) => (
            <article key={no}>
              <img className={`barrier-kit-flow-image barrier-kit-flow-image-${no}`} src={image} alt="" loading="lazy" />
              <div>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="barrier-kit-note">ประสิทธิภาพการอ่านป้ายขึ้นอยู่กับตำแหน่งติดตั้ง ระยะกล้อง ความเร็วรถ สภาพป้าย และแสงหน้างาน ทีมช่างจะสำรวจก่อนกำหนดอุปกรณ์และตำแหน่งติดตั้งจริง</p>
      </section>

      <section className="barrier-system" id="barrier-system">
        <span>03 / FLOW</span>
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
        <a className="btn barrier-line-btn" href="https://line.me/ti/p/~mmcctv">
          <span className="barrier-line-mark">LINE</span>
          <span>ทัก LINE ID: mmcctv</span>
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="detail-footer barrier-footer">
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
