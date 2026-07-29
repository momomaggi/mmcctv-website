import { useState } from "react";

const accessMethods = [
  {
    no: "01",
    label: "FACE",
    title: "สแกนใบหน้า",
    text: "เข้า–ออกได้รวดเร็วโดยไม่ต้องสัมผัส เหมาะกับผู้ใช้งานประจำ",
  },
  {
    no: "02",
    label: "CARD",
    title: "บัตรและรหัสผ่าน",
    text: "จัดการบัตรเป็นรายบุคคลและยกเลิกสิทธิ์ได้เมื่อมีการเปลี่ยนแปลง",
  },
  {
    no: "03",
    label: "FINGER",
    title: "ลายนิ้วมือ",
    text: "ยืนยันตัวบุคคลได้ชัดเจน เหมาะกับจุดที่ต้องควบคุมการใช้งาน",
  },
  {
    no: "04",
    label: "PALM",
    title: "สแกนฝ่ามือ",
    text: "ยืนยันตัวตนแบบไม่สัมผัส เพิ่มความสะดวกและลดการสัมผัสร่วมกันในรุ่นที่รองรับ",
  },
  {
    no: "05",
    label: "MOBILE",
    title: "มือถือและ QR Code",
    text: "ใช้ Dynamic QR Code บนสมาร์ทโฟนเพื่อยืนยันสิทธิ์เข้า–ออกในเครื่องและซอฟต์แวร์ที่รองรับ",
  },
];

const attendanceFeatures = [
  {
    title: "บันทึกเวลาเข้า–ออก",
    text: "เก็บเวลาการยืนยันตัวตนของพนักงานแต่ละคน เพื่อนำไปตรวจสอบการมาทำงาน",
  },
  {
    title: "รองรับกะและตารางงาน",
    text: "ตั้งเงื่อนไขเวลาและกะการทำงานตามความสามารถของรุ่นและซอฟต์แวร์ที่เลือกใช้",
  },
  {
    title: "ดูและส่งออกรายงาน",
    text: "ตรวจสอบข้อมูลมาสาย ขาดงาน หรือเวลาเข้า–ออก และส่งออกไปใช้งานต่อได้ในรุ่นที่รองรับ",
  },
  {
    title: "ลงเวลาผ่านมือถือสำหรับงานนอกสถานที่",
    text: "รองรับการลงเวลาผ่านระบบมือถือ พร้อมฟังก์ชันตำแหน่งหรือเงื่อนไขพื้นที่ตามแพ็กเกจและสิทธิ์การใช้งานที่เลือก",
  },
];

const projectSteps = [
  ["01", "สำรวจ", "ตรวจประตู จุดจ่ายไฟ เครือข่าย และจำนวนผู้ใช้"],
  ["02", "ออกแบบ", "เลือกระบบและวิธีบริหารสิทธิ์ให้เหมาะกับหน้างาน"],
  ["03", "ติดตั้ง", "เดินระบบ ติดตั้งอุปกรณ์ และทดสอบการใช้งาน"],
  ["04", "ส่งมอบ", "เพิ่มผู้ใช้ สอนจัดการ และดูแลหลังการขาย"],
];

function AccessMethodIcon({ type }: { type: string }) {
  if (type === "CARD") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="16" width="44" height="32" rx="5" />
        <path d="M10 25h44" />
        <circle cx="22" cy="36" r="4" />
        <path d="M31 34h14M31 40h10" />
      </svg>
    );
  }

  if (type === "FINGER") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 35c0-9 5-17 14-17s14 8 14 17c0 10-3 18-8 24" />
        <path d="M24 36c0-6 3-11 8-11s8 5 8 11c0 9-3 15-7 21" />
        <path d="M30 37c0-2 1-5 3-5s3 3 3 5c0 7-2 12-5 17" />
        <path d="M14 33c0-12 7-23 18-23 7 0 13 4 17 10" />
        <path d="M16 43c2 8 6 13 11 17" />
      </svg>
    );
  }

  if (type === "MOBILE") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="16" y="8" width="28" height="48" rx="5" />
        <path d="M25 14h10M27 49h6" />
        <path d="M23 23h6v6h-6zM32 23h6M35 26v6h-6M23 32v6h6M33 36h5" />
      </svg>
    );
  }

  if (type === "PALM") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M22 30V13a4 4 0 0 1 8 0v14M30 27V9a4 4 0 0 1 8 0v18" />
        <path d="M38 27V13a4 4 0 0 1 8 0v19M46 32v-9a4 4 0 0 1 8 0v17c0 13-8 20-20 20-9 0-15-5-19-12L9 37a5 5 0 0 1 8-6l5 6" />
        <path d="M25 43c5-4 12-4 18 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 23v-8a5 5 0 0 1 5-5h8M41 10h8a5 5 0 0 1 5 5v8M54 41v8a5 5 0 0 1-5 5h-8M23 54h-8a5 5 0 0 1-5-5v-8" />
      <circle cx="32" cy="28" r="9" />
      <path d="M18 50c2-9 7-14 14-14s12 5 14 14" />
    </svg>
  );
}

function InstallStepIcon({ step }: { step: string }) {
  if (step === "02") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="11" y="13" width="42" height="38" rx="3" />
        <path d="M18 22h17M18 29h28M18 36h12M38 36l8 8M46 36l-8 8" />
      </svg>
    );
  }

  if (step === "03") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M39 11a12 12 0 0 0-9 17L14 44a5 5 0 0 0 7 7l16-16a12 12 0 0 0 16-14l-8 8-8-2-2-8 8-8a12 12 0 0 0-4 0Z" />
        <path d="M17 48l3-3" />
      </svg>
    );
  }

  if (step === "04") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13 29 32 12l19 17v23H13Z" />
        <path d="M23 52V35h18v17M25 25h14" />
        <circle cx="46" cy="16" r="8" />
        <path d="m42 16 3 3 5-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="27" cy="27" r="15" />
      <path d="m38 38 14 14M27 19v16M19 27h16" />
      <path d="M11 15v-4h4M39 11h4v4M11 39v4h4" />
    </svg>
  );
}

export default function AccessControlPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="access-page">
      <header className="site-header access-header">
        <a className="brand" href="/" aria-label="กลับหน้าหลัก M&M CCTV">
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
          aria-controls="access-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="access-menu" className={isMenuOpen ? "is-open" : ""} aria-label="เมนูหน้า Access Control">
          <a href="#access-methods" onClick={closeMenu}>วิธีเข้า–ออก</a>
          <a href="#access-system" onClick={closeMenu}>ระบบทำงานอย่างไร</a>
          <a href="#attendance" onClick={closeMenu}>บันทึกเวลาพนักงาน</a>
          <a href="#access-process" onClick={closeMenu}>ขั้นตอนติดตั้ง</a>
          <a href="#access-contact" onClick={closeMenu}>ขอคำแนะนำ</a>
        </nav>
        <a className="header-cta" href="https://line.me/ti/p/~mmcctv">
          ปรึกษาทีมช่าง <span>↗</span>
        </a>
      </header>

      <section className="access-hero">
        <img
          className="access-hero-bg"
          src="/services/access-control/access-control-hero-v1.webp"
          alt="พนักงานกำลังใช้เครื่องสแกนใบหน้าบริเวณประตูสำนักงาน"
        />
        <div className="access-hero-shade" />
        <div className="access-hero-content">
          <a className="access-back" href="/">← กลับหน้าหลัก</a>
          <span className="access-eyebrow">ACCESS CONTROL SOLUTIONS</span>
          <h1>
            ให้สิทธิ์เฉพาะคน
            <br />
            <em>ในเวลาที่กำหนด</em>
          </h1>
          <p>
            ระบบควบคุมเข้า–ออกที่ช่วยให้รู้ว่าใครมีสิทธิ์ผ่านประตูไหน
            พร้อมต่อยอดสู่การบันทึกเวลาเข้า–ออกของพนักงานได้ตามอุปกรณ์และซอฟต์แวร์ที่เลือกใช้
          </p>
          <div className="access-actions">
            <a className="btn white" href="https://line.me/ti/p/~mmcctv">
              ส่งรูปประตูให้ประเมิน <span>↗</span>
            </a>
            <a className="access-text-link" href="#access-system">
              ดูองค์ประกอบระบบ <span>↓</span>
            </a>
          </div>
        </div>
        <div className="access-status-card">
          <span className="access-status-dot" />
          <div>
            <small>SYSTEM STATUS</small>
            <strong>พร้อมควบคุมการเข้า–ออก</strong>
          </div>
          <b>ACTIVE</b>
        </div>
      </section>

      <section className="access-methods" id="access-methods">
        <div className="access-section-intro">
          <span className="access-index">01 / IDENTIFY</span>
          <div>
            <h2>เลือกวิธียืนยันตัวตน<br />ให้เหมาะกับผู้ใช้งาน</h2>
            <p>
              ไม่จำเป็นต้องใช้วิธีเดียวกันทุกพื้นที่ เราช่วยเลือกตามจำนวนคน
              ความถี่ในการเข้า–ออก และระดับการควบคุมที่ต้องการ
            </p>
          </div>
        </div>
        <div className="access-method-grid">
          {accessMethods.map((method) => (
            <article key={method.no}>
              <div className="access-method-top">
                <span>{method.no}</span>
                <small>{method.label}</small>
              </div>
              <div className="access-method-symbol" aria-hidden="true">
                <AccessMethodIcon type={method.label} />
              </div>
              <h3>{method.title}</h3>
              <p>{method.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="access-system" id="access-system">
        <div className="access-system-image">
          <picture>
            <source
              media="(max-width: 620px)"
              srcSet="/services/access-control/access-control-system-mobile-v1.webp"
            />
            <img
              src="/services/access-control/access-control-system-v3.webp"
              alt="เครื่องสแกนใบหน้าและประตูกระจกในสำนักงาน"
              loading="lazy"
            />
          </picture>
          <div className="access-image-caption">
            <span>01</span>
            <p>เครื่องอ่านและยืนยันตัวตน</p>
            <span>02</span>
            <p>ตัวเครื่องหรือ Controller ตามรูปแบบระบบ</p>
            <span>03</span>
            <p>ปุ่มออกและอุปกรณ์สำรองไฟ</p>
          </div>
        </div>
        <div className="access-system-copy">
          <span className="access-index light">02 / CONTROL</span>
          <h2>อุปกรณ์ทุกชิ้น<br />ต้องทำงานเป็นระบบเดียวกัน</h2>
          <p>
            เครื่องสแกนเพียงอย่างเดียวยังไม่ใช่ระบบ Access Control ที่สมบูรณ์
            เครื่องยืนยันตัวตนต้องทำงานร่วมกับกลอนไฟฟ้า เซนเซอร์ประตู ปุ่มกดออก
            แหล่งจ่ายไฟ และอุปกรณ์ที่เหมาะกับชนิดประตู โดยบางงานควบคุมจากตัวเครื่องโดยตรง
            และบางโครงการใช้ Controller หรือซอฟต์แวร์ส่วนกลางสำหรับหลายประตูและหลายสาขา
          </p>
          <ul>
            <li><span>✓</span> รองรับตั้งแต่ประตูเดียวถึงองค์กร โรงงาน และหลายสาขา</li>
            <li><span>✓</span> เลือกความจุตามจำนวนผู้ใช้ ประตู และปริมาณประวัติ</li>
            <li><span>✓</span> มีรุ่น IP65–IP68 สำหรับพื้นที่กึ่งภายนอกตามสภาพหน้างาน</li>
            <li><span>✓</span> รองรับบัตร RFID และบางรุ่นรองรับ MIFARE หรือ Multi-tech Card</li>
          </ul>
        </div>
      </section>

      <section className="attendance-section" id="attendance">
        <div className="attendance-copy">
          <span className="access-index">03 / ATTENDANCE</span>
          <h2>ควบคุมประตู<br />พร้อมบันทึกเวลาพนักงาน</h2>
          <p>
            สำหรับสำนักงานและโรงงานที่ต้องการมากกว่าการเปิดประตู
            สามารถออกแบบเครื่องสแกนให้ใช้ยืนยันตัวตนและบันทึกเวลาเข้า–ออกได้
            หรือเพิ่มการลงเวลาผ่านมือถือสำหรับพนักงานนอกสถานที่และหลายสาขา
            โดยเลือกรุ่นและซอฟต์แวร์ให้เหมาะกับจำนวนพนักงาน กะงาน และรูปแบบรายงานที่ต้องการ
          </p>
          <div className="attendance-note">
            <strong>ควรรู้ก่อนเลือกระบบ</strong>
            <span>
              ระบบ Access Control เน้นสิทธิ์ผ่านประตู ส่วน Time Attendance เน้นข้อมูลเวลาทำงาน
              ความสามารถ GPS, Geofence, การอนุมัติ รายงาน Cloud, Mobile App
              และการเชื่อมต่อโปรแกรมเงินเดือนขึ้นอยู่กับแพลตฟอร์ม เวอร์ชัน และไลเซนส์ที่เลือกใช้
            </span>
          </div>
        </div>
        <div className="attendance-panel">
          <div className="attendance-panel-head">
            <span>EMPLOYEE TIME LOG</span>
            <b>LIVE RECORD</b>
          </div>
          <div className="attendance-time">
            <strong>08:27</strong>
            <span>บันทึกเวลาเข้าสำเร็จ</span>
          </div>
          <div className="attendance-feature-list">
            {attendanceFeatures.map((feature, index) => (
              <article key={feature.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="access-process" id="access-process">
        <div className="access-section-intro">
          <span className="access-index">04 / INSTALL</span>
          <div>
            <h2>จากประตูหนึ่งบาน<br />สู่ระบบที่ใช้งานได้จริง</h2>
            <div className="access-process-summary">
              <span>PROCESS</span>
              <p>
                เริ่มจากสำรวจหน้างานก่อนเลือกอุปกรณ์ เพื่อให้ระบบเหมาะกับชนิดประตู
                จำนวนผู้ใช้ และวิธีบริหารงานของแต่ละสถานที่
              </p>
            </div>
          </div>
        </div>
        <div className="access-timeline">
          {projectSteps.map(([no, title, text]) => (
            <article key={no}>
              <span>{no}</span>
              <div>
                <div className="access-step-icon">
                  <InstallStepIcon step={no} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="access-contact" id="access-contact">
        <span className="access-eyebrow">เริ่มวางระบบจากข้อมูลหน้างาน</span>
        <h2>ส่งรูปประตู จำนวนจุด<br />และจำนวนผู้ใช้งานให้เราดู</h2>
        <p>ทีมช่างช่วยแนะนำรูปแบบระบบเบื้องต้นก่อนนัดสำรวจ โดยยังไม่ผูกกับราคาหรือชุดอุปกรณ์ตายตัว</p>
        <div className="access-contact-actions">
          <a className="btn access-line-btn" href="https://line.me/ti/p/~mmcctv">
            <span className="access-line-mark">LINE</span>
            <span>ทัก LINE ID: mmcctv</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a href="tel:0991236879">โทร 099-123-6879</a>
        </div>
      </section>

      <footer className="detail-footer access-footer">
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
