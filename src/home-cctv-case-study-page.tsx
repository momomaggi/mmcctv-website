import { useState } from "react";

const imageRoot = "/case-studies/home-cctv-prachinburi";

const projectDetails = [
  ["ประเภทโครงการ", "บ้านพักอาศัย"],
  ["พื้นที่", "จังหวัดปราจีนบุรี"],
  ["รูปแบบระบบ", "กล้องวงจรปิด Hikvision"],
  ["ลักษณะงาน", "เดินสายล่วงหน้าก่อนปิดฝ้าและเก็บงานผนัง"],
];

const storyStages = [
  {
    no: "01",
    label: "PRE-WIRE",
    title: "เริ่มวางระบบตั้งแต่ช่วงก่อสร้าง",
    text: "ทีมช่างเข้าหน้างานช่วงที่ผนังและฝ้ายังอยู่ระหว่างก่อสร้าง เพื่อกำหนดตำแหน่งกล้อง แนวสาย และจุดรวมอุปกรณ์ให้สัมพันธ์กับโครงสร้างจริง การเริ่มตั้งแต่ระยะนี้ช่วยลดการเจาะหรือเดินสายลอยหลังบ้านเสร็จ",
    images: [
      {
        src: `${imageRoot}/01-structure-stage.webp`,
        alt: "บ้านพักอาศัยในจังหวัดปราจีนบุรีระหว่างก่อสร้างก่อนฉาบผนัง",
        caption: "สำรวจโครงสร้างจริงก่อนปิดผิวผนังและฝ้า เพื่อกำหนดเส้นทางสายที่ดูแลต่อได้",
      },
      {
        src: `${imageRoot}/02-cable-routing.webp`,
        alt: "ช่าง M&M CCTV เดินสายกล้องวงจรปิดระหว่างบ้านกำลังก่อสร้าง",
        caption: "รวบรวมสายจากแต่ละจุดกลับสู่ตำแหน่งอุปกรณ์กลาง ก่อนเก็บงานผนัง",
      },
      {
        src: `${imageRoot}/03-front-zone-prewire.webp`,
        alt: "บริเวณหน้าบ้านระหว่างก่อสร้างและเตรียมเดินสายกล้องวงจรปิด",
        caption: "เตรียมแนวสายบริเวณหน้าบ้านตั้งแต่ช่วงก่อสร้าง ลดงานรื้อและท่อลอยภายหลัง",
      },
    ],
  },
  {
    no: "02",
    label: "INSTALL",
    title: "กลับมาติดตั้งเมื่อบ้านพร้อมเก็บงาน",
    text: "หลังงานสีและงานสถาปัตย์พร้อม จึงติดตั้งกล้อง Hikvision ตามตำแหน่งที่เตรียมไว้ พร้อมกล่องพักสายสำหรับป้องกันจุดเชื่อมต่อและช่วยให้ตรวจซ่อมในอนาคตได้สะดวก",
    images: [
      {
        src: `${imageRoot}/04-final-camera-pair.webp`,
        alt: "กล้อง Hikvision สองมุมติดตั้งใต้ชายคาบ้าน",
        caption: "แยกมุมกล้องตามแนวทางเดินและพื้นที่ข้างบ้าน เพื่อให้แต่ละตัวมีหน้าที่ชัดเจน",
      },
      {
        src: `${imageRoot}/05-side-driveway-camera.webp`,
        alt: "กล้อง Hikvision ติดตั้งใต้ชายคาครอบคลุมแนวทางเข้าบ้าน",
        caption: "กล้องอีกมุมหนึ่งครอบคลุมแนวทางเข้าและพื้นที่รอบบ้าน โดยติดตั้งใต้ชายคา",
      },
    ],
  },
  {
    no: "03",
    label: "COMMISSION",
    title: "ปรับมุมภาพ ตั้งค่า และทดสอบก่อนส่งมอบ",
    text: "เมื่อติดตั้งอุปกรณ์ครบ ทีมช่างปรับองศากล้องจากภาพที่เห็นจริง ตั้งค่าเครื่องบันทึกและเครือข่าย แล้วตรวจภาพรวมจากจอ เพื่อให้เจ้าของบ้านดูสด ดูย้อนหลัง และใช้งานผ่านมือถือได้ตามระบบที่เลือก",
    images: [
      {
        src: `${imageRoot}/06-final-camera-sky.webp`,
        alt: "กล้อง Hikvision หลังติดตั้งและปรับองศาเรียบร้อย",
        caption: "ปรับองศาให้เห็นพื้นที่สำคัญ โดยไม่ให้ชายคาหรือส่วนของอาคารบังภาพ",
      },
      {
        src: `${imageRoot}/07-system-commissioning.webp`,
        alt: "ช่าง M&M CCTV ตั้งค่าเครื่องบันทึกและทดสอบภาพกล้อง",
        caption: "ตั้งค่าเครื่องบันทึก เครือข่าย และตรวจภาพรวมจากจอก่อนส่งมอบระบบ",
      },
    ],
  },
];

export default function HomeCctvCaseStudyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <a className="header-cta" href="https://line.me/ti/p/~mmcctv">
          ปรึกษาทีมช่าง <span>↗</span>
        </a>
      </header>

      <section className="case-study-hero">
        <div className="case-study-hero-copy">
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <a href="/">หน้าแรก</a>
            <span aria-hidden="true">/</span>
            <a href="/services/cctv">กล้องวงจรปิด</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">บ้านพักอาศัย ปราจีนบุรี</span>
          </nav>
          <span className="case-study-kicker">CASE STUDY / PRACHINBURI</span>
          <h1>วางระบบตั้งแต่ช่วงก่อสร้าง<br /><em>ให้งานสายเรียบร้อยตั้งแต่ต้น</em></h1>
          <p>
            ผลงานติดตั้งกล้องวงจรปิดบ้านพักอาศัย จ.ปราจีนบุรี
            เริ่มเดินสายตั้งแต่ช่วงก่อสร้าง ก่อนกลับมาติดตั้งกล้อง Hikvision
            ตั้งค่า และทดสอบระบบเมื่อบ้านพร้อม
          </p>
          <a className="btn case-study-hero-cta" href="#project-brief">
            ดูลำดับการทำงาน <span>↓</span>
          </a>
        </div>
        <picture className="case-study-hero-media">
          <source media="(max-width: 720px)" srcSet={`${imageRoot}/hero-mobile.webp`} />
          <img
            src={`${imageRoot}/hero-desktop.webp`}
            alt="กล้อง Hikvision ติดตั้งใต้ชายคาบ้านพักอาศัยในจังหวัดปราจีนบุรี"
          />
        </picture>
      </section>

      <section className="case-study-facts" aria-label="ข้อมูลโครงการ">
        {projectDetails.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <section className="case-study-brief" id="project-brief">
        <div>
          <span className="case-study-index">01 / PROJECT BRIEF</span>
          <h2>งานที่เรียบร้อย<br />เริ่มก่อนผนังจะเสร็จ</h2>
        </div>
        <div className="case-study-brief-copy">
          <p>
            โจทย์ของบ้านหลังนี้คือวางกล้องให้ครอบคลุมทางเข้า แนวข้างบ้าน
            และพื้นที่สำคัญรอบอาคาร โดยไม่ต้องกลับมาเดินสายลอยหรือเจาะผนังที่เก็บสีแล้ว
            ทีมช่างจึงประสานงานตั้งแต่บ้านยังอยู่ในช่วงก่อสร้าง
            วางแนวสายให้ถึงตำแหน่งกล้องและจุดรวมระบบก่อนงานฉาบปิดผิว
          </p>
          <ul>
            <li>กำหนดมุมกล้องจากทางสัญจรและพื้นที่ที่ต้องการตรวจสอบจริง</li>
            <li>เดินสายล่วงหน้าให้สอดคล้องกับโครงสร้างและงานสถาปัตย์</li>
            <li>ใช้กล่องพักสายที่จุดติดตั้งเพื่อป้องกันและเข้าถึงจุดต่อได้</li>
            <li>ตั้งค่าเครื่องบันทึก เครือข่าย และตรวจภาพก่อนส่งมอบ</li>
          </ul>
        </div>
      </section>

      <section className="case-study-process" id="project-process">
        <div className="case-study-section-head">
          <span className="case-study-index">02 / REAL PROCESS</span>
          <h2>จากช่วงก่อสร้าง<br />สู่ระบบที่พร้อมใช้งาน</h2>
          <p>
            ภาพทุกชุดเป็นหน้างานจริงของโครงการเดียวกัน
            เรียงตามลำดับตั้งแต่เตรียมแนวสายจนถึงทดสอบระบบ
          </p>
        </div>

        <div className="case-study-story">
          {storyStages.map((stage) => (
            <article className="case-study-story-stage" key={stage.no}>
              <div className="case-study-story-copy">
                <span>{stage.no} / {stage.label}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
              <div className={`case-study-story-images case-study-story-images-${stage.images.length}`}>
                {stage.images.map((image, imageIndex) => (
                  <figure key={image.src} className={imageIndex === 0 ? "is-primary" : ""}>
                    <img
                      className={image.src.endsWith("/06-final-camera-sky.webp") ? "is-leveled" : ""}
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
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
          <h2>บ้านเสร็จพร้อมระบบ<br />โดยไม่ต้องย้อนรื้อผนัง</h2>
          <p>
            การเตรียมระบบตั้งแต่ระยะก่อสร้างช่วยให้งานกล้องกลมกลืนกับตัวบ้าน
            จุดต่อถูกเก็บไว้ในกล่องพักสาย และยังเปิดตรวจซ่อมได้
            เมื่อติดตั้งเสร็จจึงเหลือเพียงการปรับมุมภาพและตั้งค่าการใช้งานให้เหมาะกับเจ้าของบ้าน
          </p>
        </div>
        <div className="case-study-result-list">
          <article><strong>ลดงานเดินสายลอย</strong><span>เตรียมเส้นทางสายไว้ก่อนฉาบและปิดผิวผนัง</span></article>
          <article><strong>แยกมุมกล้องชัดเจน</strong><span>ครอบคลุมทางเข้า แนวข้างบ้าน และพื้นที่รอบอาคารตามการใช้งาน</span></article>
          <article><strong>ดูแลระบบต่อได้</strong><span>จุดต่ออยู่ในกล่องพักสาย พร้อมเข้าถึงเมื่อมีการตรวจเช็ก</span></article>
          <article><strong>ทดสอบก่อนส่งมอบ</strong><span>ตรวจเครื่องบันทึก เครือข่าย ภาพสด และภาพย้อนหลังครบถ้วน</span></article>
        </div>
      </section>

      <section className="case-study-disclosure">
        <span>PROJECT NOTE</span>
        <h2>บ้านใหม่ควรวางระบบก่อนงานผิว</h2>
        <p>
          หากกำลังก่อสร้างหรือต่อเติมบ้าน ช่วงก่อนฉาบผนังและปิดฝ้าคือจังหวะที่เหมาะสำหรับวางระบบ CCTV
          เพราะสามารถกำหนดตำแหน่งกล้อง จุดรวมอุปกรณ์ และเส้นทางสายให้สอดคล้องกับงานระบบอื่นได้ตั้งแต่ต้น
          ส่วนรุ่นและจำนวนกล้องควรเลือกจากระยะ มุมมอง แสง และพื้นที่จริงของแต่ละบ้าน
        </p>
        <a href="/services/cctv">ดูรายละเอียดบริการกล้องวงจรปิด <span>↗</span></a>
      </section>

      <section className="case-study-contact">
        <span>กำลังสร้างบ้านหรือวางระบบใหม่?</span>
        <h2>ส่งแบบบ้านหรือรูปหน้างาน<br />ให้ทีมช่างช่วยวางแนวสาย</h2>
        <div>
          <a className="btn barrier-line-btn" href="https://line.me/ti/p/~mmcctv">
            ทัก LINE ID: mmcctv <span>↗</span>
          </a>
          <a href="/services/cctv">กลับไปหน้าบริการ CCTV</a>
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
