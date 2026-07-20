const services = [
  { no: "01", title: "กล้องวงจรปิด", text: "ออกแบบและติดตั้งระบบ IP Camera และ HDTVI สำหรับบ้าน ร้านค้า ออฟฟิศ และโรงงาน" },
  { no: "02", title: "ระบบควบคุมเข้า–ออก", text: "เครื่องสแกนใบหน้า ลายนิ้วมือ และระบบล็อกประตูที่จัดการได้อย่างเป็นระบบ" },
  { no: "03", title: "ระบบไม้กั้นรถยนต์", text: "ไม้กั้นพร้อมกล้องอ่านป้ายทะเบียน AI เพิ่มความสะดวกและความปลอดภัยให้ทุกพื้นที่" },
  { no: "04", title: "บริการดูแลระบบ MA", text: "ตรวจเช็ก บำรุงรักษา และแก้ไขปัญหาระบบเดิม พร้อมรายงานผลโดยทีมช่าง" },
];

const steps = [
  ["01", "คุยความต้องการ", "บอกลักษณะพื้นที่ จำนวนจุด และงบประมาณคร่าว ๆ"],
  ["02", "สำรวจหน้างาน", "ทีมช่างเข้าตรวจพื้นที่ วางตำแหน่งและระบบเดินสาย"],
  ["03", "เสนอราคา", "แจกแจงอุปกรณ์และค่าติดตั้งชัดเจนก่อนเริ่มงาน"],
  ["04", "ติดตั้งและสอนใช้งาน", "ส่งมอบงานเรียบร้อย พร้อมตั้งค่าดูผ่านมือถือ"],
];

export default function Home() {
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
          <div className="eyebrow"><i /> ดูแลครบ ตั้งแต่สำรวจจนถึงหลังการขาย</div>
          <h1>ติดตั้งอย่างมืออาชีพ<br/><em>ดูแลหลังการขายจริง</em></h1>
          <p>ระบบกล้องวงจรปิดสำหรับบ้าน ร้านค้า ออฟฟิศ และโรงงาน ออกแบบให้เหมาะกับพื้นที่จริงโดยทีมช่างของเรา</p>
          <div className="hero-actions">
            <a className="btn primary" href="https://line.me/ti/p/~mmcctv">ปรึกษาทีมช่าง <span>↗</span></a>
            <a className="btn secondary" href="#works">ชมผลงาน <span>↓</span></a>
          </div>
          <div className="location"><span>●</span> ฉะเชิงเทรา · ปราจีนบุรี · นครนายก และพื้นที่ใกล้เคียง</div>
        </div>
        <div className="hero-visual">
          <div className="purple-block" />
          <img src="/hero-technician.webp" alt="ทีมช่าง M&M CCTV กำลังติดตั้งกล้องวงจรปิด" />
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
        <div className="service-grid">{services.map((s)=><article key={s.no}><span className="number">{s.no}</span><h3>{s.title}</h3><p>{s.text}</p><a href="#contact">ดูรายละเอียด <b>↗</b></a></article>)}</div>
      </section>

      <section className="promo" id="promotions">
        <div><span className="kicker light">โปรโมชั่นแนะนำ</span><h2>เริ่มต้นระบบความปลอดภัย<br/>ในงบที่วางแผนได้</h2><p>ชุดติดตั้งพร้อมอุปกรณ์มาตรฐาน มีหลายแบรนด์และหลายระดับราคา ทีมงานช่วยเปรียบเทียบให้ตรงกับพื้นที่ของคุณ</p><a className="btn white" href="https://line.me/ti/p/~mmcctv">ขอรายการโปรโมชั่น <span>↗</span></a></div>
        <div className="promo-card"><small>ชุดกล้องวงจรปิดพร้อมติดตั้ง</small><strong>เริ่มต้น <b>13,990</b> บาท</strong><ul><li>กล้องและเครื่องบันทึกครบชุด</li><li>ติดตั้งและตั้งค่าดูผ่านมือถือ</li><li>รับประกันสินค้าและบริการหลังการขาย</li></ul><span className="note">*ราคาขึ้นอยู่กับรุ่น ระยะสาย และสภาพหน้างาน</span></div>
      </section>

      <section className="section works" id="works">
        <div className="section-head"><div><span className="kicker">ผลงานติดตั้ง</span><h2>ความเรียบร้อย<br/>คือส่วนหนึ่งของความปลอดภัย</h2></div><p>เราใส่ใจทั้งตำแหน่งกล้อง แนวเดินสาย ตู้เก็บอุปกรณ์ และการตั้งค่าระบบ เพื่อให้งานใช้งานง่ายและดูดีไปพร้อมกัน</p></div>
        <div className="work-grid"><div className="work-main"><span>บ้านพักอาศัย</span><h3>ติดตั้งกล้อง IP พร้อมเดินท่อเก็บสาย</h3></div><div className="work-side"><div><span>โรงงานและโกดัง</span><h3>ระบบกล้องพร้อมตู้ควบคุม</h3></div><div><span>สำนักงาน</span><h3>ระบบสแกนใบหน้าเข้า–ออก</h3></div></div></div>
      </section>

      <section className="about" id="about">
        <div className="about-mark">M<span>&amp;</span>M</div><div><span className="kicker">รู้จัก M&amp;M CCTV</span><h2>ขายความมั่นใจ<br/>ไม่ใช่แค่ขายกล้อง</h2><p>M&amp;M CCTV ให้บริการระบบรักษาความปลอดภัยครบวงจร โดยบริษัท แม็กมอส อินโนเวชั่น จำกัด เราเชื่อว่างานติดตั้งที่ดีต้องเริ่มจากคำแนะนำที่ตรงไปตรงมา จบงานเรียบร้อย และยังติดต่อกันได้เมื่อลูกค้าต้องการความช่วยเหลือ</p><div className="about-facts"><div><strong>ครบวงจร</strong><span>สำรวจ · ออกแบบ · ติดตั้ง · ดูแล</span></div><div><strong>ทีมงานในพื้นที่</strong><span>เข้าบริการได้รวดเร็วกว่า</span></div></div></div>
      </section>

      <section className="section process"><span className="kicker">ขั้นตอนการทำงาน</span><h2>ง่าย ชัดเจน และรู้ราคาก่อนติดตั้ง</h2><div className="steps">{steps.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

      <section className="contact" id="contact">
        <div><span className="kicker light">เริ่มต้นคุยกับเรา</span><h2>มีพื้นที่อยู่แล้ว<br/>ให้เราช่วยวางระบบ</h2><p>ส่งรูปหน้างานหรือแชร์โลเคชั่นผ่าน LINE ทีมงานช่วยประเมินเบื้องต้นและแนะนำชุดที่เหมาะสมให้ฟรี</p></div>
        <div className="contact-card"><small>LINE OFFICIAL / LINE ID</small><strong>@mmcctv</strong><a className="btn white" href="https://line.me/ti/p/~mmcctv">ทัก LINE ตอนนี้ <span>↗</span></a><p>เวลาทำการ จันทร์–ศุกร์ 08.30–16.30 น.</p></div>
      </section>

      <footer><a className="footer-brand" href="#top"><img src="/logo-mm-cctv.webp" alt=""/><span><strong>M&amp;M CCTV</strong><small>SMART SECURITY FOR YOUR LIFE</small></span></a><p>รับติดตั้งและดูแลระบบรักษาความปลอดภัยครบวงจร</p><div><a href="#services">บริการ</a><a href="#works">ผลงาน</a><a href="#contact">ติดต่อเรา</a></div><small>© 2026 M&amp;M CCTV · บริษัท แม็กมอส อินโนเวชั่น จำกัด</small></footer>
      <a className="floating-line" href="https://line.me/ti/p/~mmcctv" aria-label="ติดต่อผ่านไลน์">LINE</a>
    </main>
  );
}
