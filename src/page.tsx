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
  [
    "01",
    "คุยความต้องการ",
    "บอกลักษณะพื้นที่ จำนวนจุด และงบประมาณคร่าว ๆ",
    "/process-icons/process-01-discuss.png",
  ],
  [
    "02",
    "สำรวจหน้างาน",
    "ทีมช่างเข้าตรวจพื้นที่ วางตำแหน่งและระบบเดินสาย",
    "/process-icons/process-02-survey.png",
  ],
  [
    "03",
    "เสนอราคา",
    "แจกแจงอุปกรณ์และค่าติดตั้งชัดเจนก่อนเริ่มงาน",
    "/process-icons/process-03-quote.png",
  ],
  [
    "04",
    "ติดตั้งและสอนใช้งาน",
    "ส่งมอบงานเรียบร้อย พร้อมตั้งค่าดูผ่านมือถือ",
    "/process-icons/process-04-install.png",
  ],
];
const reviews = [
  {
    name: "K S (Mol)",
    text: "ช่างให้คำแนะนำดีครับ สินค้ามีให้เลือกหลายรุ่น มีหลายราคาให้เลือก การติดตั้งเรียบร้อยดีครับ",
    link: "https://maps.app.goo.gl/LXdjwPkrMGSPtiry9",
  },
  {
    name: "supong chardpadid",
    text: "เป็นลูกค้ามา 3 ปี บริการหลังการขายประทับใจมากครับ แนะนำเลยครับ",
    link: "https://maps.app.goo.gl/WJXdgDq9n3SuDuTeA",
  },
  {
    name: "NariChanel",
    text: "พี่ขอบคุณมากนะคะ สำหรับติดตั้งความปลอดภัยให้ที่บ้าน ตอนนี้อุ่นใจมากเลย น้อง ๆ ทำงานดีมาก ทำงานละเอียดเรียบร้อยมาก ติดตั้งดี คุณภาพดี กล้องชัดมาก ขอแนะนำค่ะ",
    link: "https://maps.app.goo.gl/PFLks5VJMDEkujFx9",
  },
  {
    name: "Wilaitip Punyota",
    text: "ทำงานเรียบร้อยมาก ทั้งเดินสายไฟ เก็บสายไฟ รอยต่อดีมาก มืออาชีพเลยค่ะ มาตรงเวลา พูดจาสุภาพ อธิบายการทำงานของกล้องวงจรปิดได้ละเอียดและชัดเจนดีมาก โดยรวมประทับใจมากค่ะ",
    link: "https://maps.app.goo.gl/bhX7Qbgwcdns7zvV6",
  },
  {
    name: "narissara tumma",
    text: "บริการดีมากค่ะ สุภาพ ตอบคำถามได้ละเอียด การติดตั้งตรงเวลา และใส่ใจทุกขั้นตอน แนะนำค่ะ",
    link: "https://maps.app.goo.gl/gNtxUSAWULQMHrDj9",
  },
  {
    name: "tonao Tira",
    text: "บริการดีเยี่ยม งานคุณภาพ รวดเร็ว งานเรียบร้อย",
    link: "https://maps.app.goo.gl/PS8oYMv6Ade9c7696",
  },
];
export default function Home() {
  const [promoIndex, setPromoIndex] = useState(0);
  const [promoPaused, setPromoPaused] = useState(false);
  const promoTouchStart = useRef<number | null>(null);
  const reviewsTrackRef = useRef<HTMLDivElement | null>(null);
  
  const trackLineClick = (linkLocation: string) => {
  const analyticsWindow = window as typeof window & {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: Record<string, string>
    ) => void;
  };

  analyticsWindow.gtag?.("event", "line_contact_click", {
    link_location: linkLocation,
  });
};
  
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
const scrollReviews = (direction: "previous" | "next") => {
  const track = reviewsTrackRef.current;

  if (!track) return;

  const card = track.querySelector<HTMLElement>(".review-card");
  const distance =
    (card?.offsetWidth ?? track.clientWidth * 0.85) + 20;

  track.scrollBy({
    left: direction === "next" ? distance : -distance,
    behavior: "smooth",
  });
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
        <a
  className="header-cta"
  href="https://line.me/ti/p/~mmcctv"
  onClick={() => trackLineClick("header")}
>
  ปรึกษาทีมช่าง <span>↗</span>
</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i /> ดูแลครบตั้งแต่สำรวจหน้างานจนถึงบริการหลังการขาย</div>
          <h1>ติดตั้งอย่างมืออาชีพ<br/><em>ดูแลหลังการขายอย่างจริงใจ</em></h1>
          <p>ระบบกล้องวงจรปิดสำหรับบ้าน ร้านค้า ออฟฟิศ หน่วยงานราชการ และโรงงาน ออกแบบให้เหมาะสมกับพื้นที่จริงโดยทีมช่างผู้เชี่ยวชาญของเรา</p>
          <div className="hero-actions">
            <a
  className="btn primary"
  href="https://line.me/ti/p/~mmcctv"
  onClick={() => trackLineClick("hero")}
>
  ปรึกษาทีมช่าง <span>↗</span>
</a>
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
  onClick={() => trackLineClick("promotion")}
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
 <a
  className="facebook-works"
  href="https://www.facebook.com/mmcctv.sales"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="ดูผลงานติดตั้งล่าสุดของ M&M CCTV บน Facebook"
>
  <span className="facebook-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24">
      <path d="M13.8 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.6v3h2.8v8h3.4Z" />
    </svg>
  </span>

  <span className="facebook-copy">
    <small>อัปเดตผลงานใหม่ทุกสัปดาห์</small>
    <strong>ดูผลงานติดตั้งล่าสุดบน Facebook</strong>
    <span>
      ภาพหน้างานจริงจากทีมช่าง M&amp;M CCTV
    </span>
  </span>

  <span className="facebook-action">
    ชมผลงานเพิ่มเติม <b>→</b>
  </span>
</a>
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

      <section className="section process">
  <span className="kicker">ขั้นตอนการทำงาน</span>

  <h2>ง่าย ชัดเจน และรู้ราคาก่อนติดตั้ง</h2>

  <div className="steps">
    {steps.map(([number, title, description, icon]) => (
      <article key={number}>
        <span className="step-number">{number}</span>

        <div className="step-icon">
          <img
            src={icon}
            alt=""
            loading="lazy"
          />
        </div>

        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    ))}
  </div>
</section>
<section className="section reviews" id="reviews">
  <div className="reviews-head">
    <div>
      <span className="kicker">เสียงจากลูกค้าจริง</span>
      <h2>
        ความประทับใจที่ลูกค้า
        <br />
        บอกต่อบน Google
      </h2>
    </div>

    <div className="google-rating">
     <span className="google-mark" aria-hidden="true">
  <svg viewBox="0 0 18 18">
    <path
      fill="#4285F4"
      d="M17.64 9.205c0-.638-.057-1.252-.164-1.841H9v3.482h4.844c-.209 1.125-.843 2.078-1.797 2.716v2.258h2.908c1.702-1.567 2.685-3.874 2.685-6.615Z"
    />
    <path
      fill="#34A853"
      d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.258c-.806.54-1.836.859-3.048.859-2.344 0-4.328-1.585-5.037-3.711H.956v2.333C2.437 15.984 5.482 18 9 18Z"
    />
    <path
      fill="#FBBC05"
      d="M3.963 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.281-1.71V4.957H.956A9 9 0 0 0 0 9c0 1.453.348 2.827.956 4.043l3.007-2.333Z"
    />
    <path
      fill="#EA4335"
      d="M9 3.58c1.321 0 2.508.454 3.442 1.345l2.582-2.582C13.463.891 11.426 0 9 0 5.482 0 2.437 2.016.956 4.957L3.963 7.29C4.672 5.164 6.656 3.58 9 3.58Z"
    />
  </svg>
</span>

      <div>
        <strong>5 ดาว</strong>
        <span className="review-stars" aria-label="คะแนน 5 ดาว">
          ★★★★★
        </span>
        <small>รีวิวจริงจาก Google</small>
      </div>
    </div>
  </div>

<div className="reviews-slider">
  <button
    type="button"
    className="review-nav review-nav-previous"
    onClick={() => scrollReviews("previous")}
    aria-label="ดูรีวิวก่อนหน้า"
  >
    ‹
  </button>

  <div className="reviews-track" ref={reviewsTrackRef}>
    {reviews.map((review) => (
      <a
        className="review-card"
        href={review.link}
        target="_blank"
        rel="noopener noreferrer"
        key={review.name}
        aria-label={`อ่านรีวิวของ ${review.name} บน Google`}
      >
        <div className="review-top">
          <span className="review-avatar" aria-hidden="true">
            {review.name.charAt(0).toUpperCase()}
          </span>

          <div>
            <strong>{review.name}</strong>
            <span>Google Review</span>
          </div>

          <b aria-hidden="true">↗</b>
        </div>

        <div className="review-stars" aria-label="คะแนน 5 ดาว">
          ★★★★★
        </div>

        <p>“{review.text}”</p>

        <span className="review-source">
          อ่านรีวิวต้นฉบับบน Google
        </span>
      </a>
    ))}
  </div>

  <button
    type="button"
    className="review-nav review-nav-next"
    onClick={() => scrollReviews("next")}
    aria-label="ดูรีวิวถัดไป"
  >
    ›
  </button>
</div>

  <div className="review-actions">
    <a
      className="btn primary"
      href="https://g.page/r/CavXfdQlcXWiEAI/review"
      target="_blank"
      rel="noopener noreferrer"
    >
      เขียนรีวิวให้เรา <span>↗</span>
    </a>
  </div>
</section>
      <section className="contact" id="contact">
  <div className="contact-copy">
    <span className="kicker light">เริ่มต้นคุยกับเรา</span>

    <h2>
      มีพื้นที่อยู่แล้ว
      <br />
      ให้เราช่วยวางระบบ
    </h2>

    <p>
      ส่งรูปหน้างานหรือแชร์โลเคชั่นผ่าน LINE
      ทีมงานช่วยประเมินเบื้องต้นและแนะนำชุดที่เหมาะสมให้ฟรี
    </p>
    <ul className="contact-benefits">
  <li>
    <span aria-hidden="true">✓</span>
    ประเมินหน้างานเบื้องต้นฟรี
  </li>

  <li>
    <span aria-hidden="true">✓</span>
    แนะนำอุปกรณ์ให้เหมาะกับพื้นที่
  </li>

  <li>
    <span aria-hidden="true">✓</span>
    ติดต่อทีมงานในพื้นที่ได้โดยตรง
  </li>
</ul>
  </div>

  <div className="contact-card line-card">
    <div className="line-card-info">
      <div className="line-card-head">
        <span className="line-logo" aria-hidden="true">
          LINE
        </span>

        <div>
          <small>LINE OFFICIAL / LINE ID</small>
          <strong>mmcctv</strong>
        </div>
      </div>

      <a
  className="line-button"
  href="https://line.me/ti/p/~mmcctv"
  onClick={() => trackLineClick("contact_card")}
  target="_blank"
  rel="noopener noreferrer"
>
        <span>LINE</span>
        ทัก LINE ตอนนี้
        <b>↗</b>
      </a>

      <p className="line-note">
        ส่งรูปหน้างานหรือแชร์โลเคชั่นผ่าน LINE
        เพื่อให้ทีมงานประเมินเบื้องต้นได้ฟรี
      </p>

      <p className="line-hours">
        <span aria-hidden="true">◷</span>
        เวลาทำการ จันทร์–ศุกร์ 08.30–16.30 น.
      </p>
    </div>

    <div className="line-qr">
      <img
        src="/line-mmcctv-qr.png"
        alt="QR Code สำหรับเพิ่ม LINE M&M CCTV"
        loading="lazy"
      />

      <strong>สแกน QR</strong>
      <span>เพื่อเริ่มแชตได้ทันที</span>
    </div>
  </div>
</section>

      <footer><a className="footer-brand" href="#top"><img src="/logo-mm-cctv.webp" alt=""/><span><strong>M&amp;M CCTV</strong><small>SMART SECURITY FOR YOUR LIFE</small></span></a><p>รับติดตั้งและดูแลระบบรักษาความปลอดภัยครบวงจร</p><div><a href="#services">บริการ</a><a href="#works">ผลงาน</a><a href="#contact">ติดต่อเรา</a></div><small>© 2026 M&amp;M CCTV · ห้างหุ้นส่วนสามัญ เอ็มแอนด์เอ็ม ซีซีทีวี</small></footer>
      <a
  className="floating-line"
  href="https://line.me/ti/p/~mmcctv"
  onClick={() => trackLineClick("floating_button")}
  aria-label="ติดต่อผ่านไลน์"
>
  LINE
</a>
    </main>
  );
}
