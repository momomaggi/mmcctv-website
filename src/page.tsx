import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";
const promotions = [
  {
    desktop: "/promotions/promo-01.webp",
    mobile: "/promotions/promo-01-mobile.webp",
    alt: "โปรโมชั่นติดตั้งกล้องวงจรปิดชุดที่ 1",
  },
  {
    desktop: "/promotions/promo-02.webp",
    mobile: "/promotions/promo-02-mobile.webp",
    alt: "โปรโมชั่นติดตั้งกล้องวงจรปิดชุดที่ 2",
  },
  {
    desktop: "/promotions/promo-03.webp",
    mobile: "/promotions/promo-03-mobile.webp",
    alt: "โปรโมชั่นระบบรักษาความปลอดภัยชุดที่ 3",
  },
  {
    desktop: "/promotions/promo-04.webp",
    mobile: "/promotions/promo-04-mobile.webp",
    alt: "โปรโมชั่นระบบรักษาความปลอดภัยชุดที่ 4",
  },
  {
    desktop: "/promotions/promo-05.webp",
    mobile: "/promotions/promo-05-mobile.webp",
    alt: "โปรโมชั่นระบบรักษาความปลอดภัยชุดที่ 5",
  },
];
const services = [
  { no: "01", image: "/service-previews/01-cctv-vigi-c320.webp", title: "กล้องวงจรปิด", text: "ออกแบบและติดตั้งระบบ IP Camera และ HDTVI สำหรับบ้าน ร้านค้า ออฟฟิศ และโรงงาน" },
  { no: "02", image: "/service-previews/02-access-senseface2a.webp", title: "ระบบควบคุมเข้า–ออก", text: "เครื่องสแกนใบหน้า ลายนิ้วมือ และระบบล็อกประตูที่จัดการได้อย่างเป็นระบบ" },
  { no: "03", image: "/service-previews/03-barrier-hikvision-anpr.webp", title: "ระบบไม้กั้นรถยนต์", text: "ไม้กั้นพร้อมกล้องอ่านป้ายทะเบียน AI เพิ่มความสะดวกและความปลอดภัยให้ทุกพื้นที่" },
  { no: "04", image: "/service-previews/04-ma-maintenance-hospital-factory-v2.webp", title: "บริการดูแลระบบ MA", text: "ตรวจเช็ก บำรุงรักษา และแก้ไขปัญหาระบบเดิม พร้อมรายงานผลโดยทีมช่าง" },
];
const steps = [
  ["01", "คุยความต้องการ", "บอกลักษณะพื้นที่ จำนวนจุด และงบประมาณคร่าว ๆ"],
  ["02", "สำรวจหน้างาน", "ทีมช่างเข้าตรวจพื้นที่ วางตำแหน่งและระบบเดินสาย"],
  ["03", "เสนอราคา", "แจกแจงอุปกรณ์และค่าติดตั้งชัดเจนก่อนเริ่มงาน"],
  ["04", "ติดตั้งและสอนใช้งาน", "ส่งมอบงานเรียบร้อย พร้อมตั้งค่าดูผ่านมือถือ"],
];
export default function Home() {
  const [promoIndex, setPromoIndex] = useState(0);
  const [promoPaused, setPromoPaused] = useState(false);
  const promoTouchStart = useRef<number | null>(null);

  const showPreviousPromo = () => {
    setPromoIndex(
      (current) =>
        (current - 1 + promotions.length) % promotions.length
    );
  };

  const showNextPromo = () => {
    setPromoIndex(
      (current) => (current + 1) % promotions.length
    );
  };

  const handlePromoTouchStart = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    promoTouchStart.current = event.touches[0].clientX;
  };

  const handlePromoTouchEnd = (
    event: TouchEvent<HTMLDivElement>
  ) => {
    if (promoTouchStart.current === null) return;

    const distance =
      promoTouchStart.current -
      event.changedTouches[0].clientX;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        showNextPromo();
      } else {
        showPreviousPromo();
      }
    }

    promoTouchStart.current = null;
  };

  useEffect(() => {
    if (promoPaused) return;

    const timer = window.setInterval(() => {
      setPromoIndex(
        (current) => (current + 1) % promotions.length
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, [promoPaused]);
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="M&M CCTV หน้าแรก">
          <img src="/logo-mm-cctv.webp" alt="M&M CCTV" />
          <span><strong>M&amp;M CCTV</strong><small>SMART SECURITY FOR YOUR LIFE</small></span>
        </a>
        <nav aria-label="เมนูหลัก">
          <a href="#services">บริการ</a><a href="#promotions">โปรโมชั่น</a><a href="#works">ผลงาน</a><a href="#about">เกี่ยวกับเรา</a><a href="#contact">ติดต่อเรา</a>
        </nav>
        <a className="header-cta" href="https://line.me/ti/p/~mmcctv">ปรึกษาทีมช่าง <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i /> ดูแลครบตั้งแต่สำรวจหน้างานจนถึงบริการหลังการขาย</div>
          <h1>ติดตั้งอย่างมืออาชีพ<br/><em>ดูแลหลังการขายอย่างจริงใจ</em></h1>
          <p>ระบบกล้องวงจรปิดสำหรับบ้าน ร้านค้า ออฟฟิศ หน่วยงานราชการ และโรงงาน ออกแบบให้เหมาะสมกับพื้นที่จริงโดยทีมช่างผู้เชี่ยวชาญของเรา</p>
          <div className="hero-actions">
            <a className="btn primary" href="https://line.me/ti/p/~mmcctv">ปรึกษาทีมช่าง <span>↗</span></a>
            <a className="btn secondary" href="#works">ชมผลงาน <span>↓</span></a>
          </div>
          <div className="location"><span>●</span> ฉะเชิงเทรา ปราจีนบุรี นครนายก ชลบุรี สมุทรปราการ และพื้นที่ใกล้เคียง</div>
        </div>
        <div className="hero-visual">
          <div className="purple-block" />
          <img src="/hero-installation-modern-v3.webp" alt="ทีมช่าง M&M CCTV กำลังติดตั้งกล้องวงจรปิดภายในบ้าน" />
          <div className="experience"><strong>10+</strong><span>ปี<br/>ประสบการณ์งานระบบ</span></div>
        </div>
      </section>

      <section className="trust-bar" aria-label="จุดเด่นของเรา">
        <div><strong>ช่างดูแลเอง</strong><span>ตั้งแต่สำรวจถึงส่งมอบงาน</span></div>
        <div><strong>เลือกอุปกรณ์ตรงงาน</strong><span>ไม่ยัดสเปกเกินความจำเป็น</span></div>
        <div><strong>รับประกันสินค้า</strong><span>สูงสุด 3 ปี ตามเงื่อนไข</span></div>
        <div><strong>บริการหลังการขาย</strong><span>ติดต่อทีมงานได้ ไม่ทิ้งงาน</span></div>
      </section>

      <section className="section services" id="services">
        <div className="section-head"><div><span className="kicker">บริการของเรา</span><h2>ระบบรักษาความปลอดภัย<br/>ที่ออกแบบให้เหมาะกับคุณ</h2></div><p>เราไม่ได้เริ่มจากการขายอุปกรณ์ แต่เริ่มจากการทำความเข้าใจพื้นที่ เพื่อให้ได้ระบบที่ใช้งานจริงและดูแลง่ายในระยะยาว</p></div>
        <div className="service-grid">{services.map((s)=><article key={s.no}><img className="service-image" src={s.image} alt={s.title} loading="lazy"/><span className="number">{s.no}</span><h3>{s.title}</h3><p>{s.text}</p><a href="#contact">ดูรายละเอียด <b>↗</b></a></article>)}</div>
      </section>

<section className="promo" id="promotions">
  <div className="promo-copy">
    <span className="kicker light">โปรโมชั่นแนะนำ</span>
    <h2>
      เริ่มต้นระบบความปลอดภัย
      <br />
      ในงบที่วางแผนได้
    </h2>
    <p>
      ชุดติดตั้งพร้อมอุปกรณ์มาตรฐาน มีหลายแบรนด์และหลายระดับราคา
      ทีมงานช่วยเปรียบเทียบให้ตรงกับพื้นที่ของคุณ
    </p>
    <a
      className="btn white"
      href="https://line.me/ti/p/~mmcctv"
    >
      ขอรายการโปรโมชั่น <span>↗</span>
    </a>
  </div>

<div
  className="promo-media"
  onMouseEnter={() => setPromoPaused(true)}
  onMouseLeave={() => setPromoPaused(false)}
  onTouchStart={handlePromoTouchStart}
  onTouchEnd={handlePromoTouchEnd}
>
  <picture className="promo-slide" key={promoIndex}>
    <source
      media="(max-width: 620px)"
      srcSet={promotions[promoIndex].mobile}
    />
    <img
      src={promotions[promoIndex].desktop}
      alt={promotions[promoIndex].alt}
    />
  </picture>

  <button
    type="button"
    className="promo-arrow promo-prev"
    onClick={showPreviousPromo}
    aria-label="ดูโปรโมชั่นก่อนหน้า"
  >
    ‹
  </button>

  <button
    type="button"
    className="promo-arrow promo-next"
    onClick={showNextPromo}
    aria-label="ดูโปรโมชั่นถัดไป"
  >
    ›
  </button>

  <div className="promo-dots" aria-label="เลือกโปรโมชั่น">
    {promotions.map((promotion, index) => (
      <button
        type="button"
        key={promotion.desktop}
        className={`promo-dot ${
          index === promoIndex ? "active" : ""
        }`}
        onClick={() => setPromoIndex(index)}
        aria-label={`ดูโปรโมชั่นลำดับที่ ${index + 1}`}
        aria-current={index === promoIndex ? "true" : undefined}
      />
    ))}
  </div>
</div>
</section>

      <section className="section works" id="works">
        <div className="section-head"><div><span className="kicker">ผลงานติดตั้ง</span><h2>ความเรียบร้อย<br/>คือส่วนหนึ่งของความปลอดภัย</h2></div><p>เราใส่ใจทั้งตำแหน่งกล้อง แนวเดินสาย ตู้เก็บอุปกรณ์ และการตั้งค่าระบบ เพื่อให้งานใช้งานง่ายและดูดีไปพร้อมกัน</p></div>
        <div className="work-grid">
  <div className="work-main">
    <picture>
      <source
        media="(max-width: 620px)"
        srcSet="/portfolio/portfolio-home-mobile.webp"
      />
      <img
        src="/portfolio/portfolio-home.webp"
        alt="ผลงานติดตั้งกล้องวงจรปิดสำหรับบ้านและร้านค้า"
        loading="lazy"
      />
    </picture>

    <span>บ้านพักอาศัยและร้านค้า</span>
    <h3>ติดตั้งกล้อง IP พร้อมเดินท่อเก็บสาย</h3>
  </div>

  <div className="work-side">
    <div>
      <picture>
        <source
          media="(max-width: 620px)"
          srcSet="/portfolio/portfolio-access-mobile.webp"
        />
        <img
          src="/portfolio/portfolio-access.webp"
          alt="ผลงานติดตั้งเครื่องสแกนใบหน้าและระบบควบคุมประตู"
          loading="lazy"
        />
      </picture>

      <span>สำนักงานและหน่วยงานราชการ</span>
      <h3>เครื่องสแกนนิ้ว-ใบหน้า พร้อมกลอนแม่เหล็กไฟฟ้า</h3>
    </div>

    <div>
      <picture>
        <source
          media="(max-width: 620px)"
          srcSet="/portfolio/portfolio-barrier-mobile.webp"
        />
        <img
          src="/portfolio/portfolio-barrier.webp"
          alt="ผลงานติดตั้งไม้กั้นรถยนต์"
          loading="lazy"
        />
      </picture>

      <span>โรงงาน คอนโด และโครงการหมู่บ้าน</span>
      <h3>ระบบไม้กั้นรถยนต์พร้อมกล้อง AI อ่านป้ายทะเบียน</h3>
    </div>
  </div>
</div>
      </section>

      <section className="about" id="about">
       <div className="about-visual">
  <img
    src="/about-visual.webp"
    alt="ทีมช่าง M&M CCTV ติดตั้งและตรวจสอบระบบรักษาความปลอดภัย"
    loading="lazy"
  />
</div>
      <div><span className="kicker">รู้จัก M&amp;M CCTV</span><h2>ขายความมั่นใจ<br/>ไม่ใช่แค่ขายกล้อง</h2><p>M&amp;M CCTV ให้บริการระบบรักษาความปลอดภัยครบวงจร โดยห้างหุ้นส่วนสามัญ เอ็มแอนด์เอ็ม ซีซีทีวี เราเชื่อว่างานติดตั้งที่ดีต้องเริ่มจากคำแนะนำที่ตรงไปตรงมา จบงานเรียบร้อย และยังติดต่อกันได้เมื่อลูกค้าต้องการความช่วยเหลือ</p><div className="about-facts"><div><strong>ครบวงจร</strong><span>สำรวจ · ออกแบบ · ติดตั้ง · ดูแล</span></div><div><strong>ทีมงานในพื้นที่</strong><span>เข้าบริการได้รวดเร็วกว่า</span></div></div></div>
      </section>

      <section className="section process"><span className="kicker">ขั้นตอนการทำงาน</span><h2>ง่าย ชัดเจน และรู้ราคาก่อนติดตั้ง</h2><div className="steps">{steps.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

      <section className="contact" id="contact">
        <div><span className="kicker light">เริ่มต้นคุยกับเรา</span><h2>มีพื้นที่อยู่แล้ว<br/>ให้เราช่วยวางระบบ</h2><p>ส่งรูปหน้างานหรือแชร์โลเคชั่นผ่าน LINE ทีมงานช่วยประเมินเบื้องต้นและแนะนำชุดที่เหมาะสมให้ฟรี</p></div>
        <div className="contact-card"><small>LINE OFFICIAL / LINE ID</small><strong>mmcctv</strong><a className="btn white" href="https://line.me/ti/p/~mmcctv">ทัก LINE ตอนนี้ <span>↗</span></a><p>เวลาทำการ จันทร์–ศุกร์ 08.30–16.30 น.</p></div>
      </section>

      <footer><a className="footer-brand" href="#top"><img src="/logo-mm-cctv.webp" alt=""/><span><strong>M&amp;M CCTV</strong><small>SMART SECURITY FOR YOUR LIFE</small></span></a><p>รับติดตั้งและดูแลระบบรักษาความปลอดภัยครบวงจร</p><div><a href="#services">บริการ</a><a href="#works">ผลงาน</a><a href="#contact">ติดต่อเรา</a></div><small>© 2026 M&amp;M CCTV · บริษัท แม็กมอส อินโนเวชั่น จำกัด</small></footer>
      <a className="floating-line" href="https://line.me/ti/p/~mmcctv" aria-label="ติดต่อผ่านไลน์">LINE</a>
    </main>
  );
}
