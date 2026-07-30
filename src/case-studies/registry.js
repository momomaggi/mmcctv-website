const homeCctvImageRoot = "/case-studies/home-cctv-prachinburi";
const homeCctvPath = "/case-studies/home-cctv-installation";
const homeCctvPublishedDate = "2026-07-30T22:28:00+07:00";
const homeCctvModifiedDate = "2026-07-30T23:18:07+07:00";

export const homeCctvPrachinburiRegistry = Object.freeze({
  slug: "home-cctv-installation",
  title: "ติดตั้งกล้องวงจรปิดบ้านพักอาศัย ปราจีนบุรี",
  location: "จังหวัดปราจีนบุรี",
  path: homeCctvPath,
  publishedDate: homeCctvPublishedDate,
  modifiedDate: homeCctvModifiedDate,
  metadata: {
    title: "ผลงานติดตั้งกล้องวงจรปิดบ้านพักอาศัย ปราจีนบุรี | M&M CCTV",
    description:
      "กรณีศึกษาติดตั้งกล้องวงจรปิดบ้านพักอาศัย จ.ปราจีนบุรี เริ่มเดินสายก่อนปิดฝ้าและเก็บงานผนัง ติดตั้งกล้อง Hikvision พร้อมตั้งค่าและทดสอบระบบ",
    path: homeCctvPath,
    image: `${homeCctvImageRoot}/og-home-cctv-prachinburi.webp`,
    imageAlt: "วางระบบ CCTV บ้านพักอาศัยตั้งแต่ช่วงก่อสร้าง จังหวัดปราจีนบุรี",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/webp",
    articleImages: [
      `${homeCctvImageRoot}/article-home-cctv-prachinburi-16x9.webp`,
      `${homeCctvImageRoot}/hero-desktop.webp`,
      `${homeCctvImageRoot}/article-home-cctv-prachinburi-square.webp`,
    ],
    publishedDate: homeCctvPublishedDate,
    modifiedDate: homeCctvModifiedDate,
    breadcrumbName: "ติดตั้ง CCTV บ้านพักอาศัย ปราจีนบุรี",
    parentName: "กล้องวงจรปิด",
    parentPath: "/services/cctv",
    caseStudy: true,
  },
});

export const caseStudyPageMetadata = Object.freeze({
  [homeCctvPrachinburiRegistry.path]: homeCctvPrachinburiRegistry.metadata,
});
