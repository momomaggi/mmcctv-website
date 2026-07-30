import { caseStudyPageMetadata } from "./case-studies/registry.js";

export const SITE_URL = "https://mmcctv.net";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const pageMetadata = {
  "/": {
    title: "ติดตั้งกล้องวงจรปิด Access Control และไม้กั้นรถยนต์ | M&M CCTV",
    description:
      "M&M CCTV รับออกแบบและติดตั้งกล้องวงจรปิด ระบบควบคุมเข้า–ออก เครื่องสแกนใบหน้า ไม้กั้นรถยนต์ และดูแลระบบ โดยทีมช่างผู้เชี่ยวชาญ",
    path: "/",
    image: "/hero-installation-modern-v3.webp",
    imageAlt: "ทีมช่าง M&M CCTV ติดตั้งระบบรักษาความปลอดภัย",
    imageWidth: 1672,
    imageHeight: 941,
    imageType: "image/webp",
  },
  "/services/cctv": {
    title: "ติดตั้งกล้องวงจรปิด บ้าน ร้านค้า และโรงงาน | M&M CCTV",
    description:
      "รับออกแบบและติดตั้งระบบกล้องวงจรปิด IP Camera และ HDTVI สำหรับบ้าน ร้านค้า สำนักงาน และโรงงาน พร้อมสำรวจหน้างานและดูแลหลังการขาย",
    path: "/services/cctv",
    image: "/services/cctv/cctv-service-hero-modern-home.webp",
    imageAlt: "ระบบกล้องวงจรปิดสำหรับบ้านและธุรกิจ ติดตั้งโดย M&M CCTV",
    imageWidth: 1600,
    imageHeight: 1600,
    imageType: "image/webp",
    breadcrumbName: "กล้องวงจรปิด",
    serviceType: "บริการออกแบบและติดตั้งระบบกล้องวงจรปิด",
  },
  "/services/access-control": {
    title: "ติดตั้ง Access Control และเครื่องสแกนใบหน้า | M&M CCTV",
    description:
      "ออกแบบและติดตั้งระบบ Access Control เครื่องสแกนใบหน้า ลายนิ้วมือ บัตร และระบบบันทึกเวลาพนักงาน สำหรับสำนักงาน โรงงาน และอาคาร",
    path: "/services/access-control",
    image: "/services/access-control/access-control-hero-v1.webp",
    imageAlt: "ระบบ Access Control และเครื่องสแกนใบหน้าที่ประตูสำนักงาน",
    imageWidth: 1182,
    imageHeight: 1330,
    imageType: "image/webp",
    breadcrumbName: "ระบบควบคุมเข้า–ออก",
    serviceType: "บริการออกแบบและติดตั้งระบบควบคุมการเข้า–ออก",
  },
  "/services/car-park-barrier": {
    title: "ติดตั้งไม้กั้นรถยนต์และระบบอ่านป้ายทะเบียน | M&M CCTV",
    description:
      "ติดตั้งไม้กั้นรถยนต์ Hikvision พร้อมกล้องอ่านป้ายทะเบียน ระบบตรวจสอบสิทธิ์ บัตร UHF และการจัดการรถเข้า–ออกสำหรับหมู่บ้านและองค์กร",
    path: "/services/car-park-barrier",
    image: "/services/car-park-barrier/barrier-hero-v3.png",
    imageAlt: "ไม้กั้นรถยนต์ กล้องอ่านป้ายทะเบียน และรถบริเวณทางเข้าโครงการ",
    imageWidth: 1672,
    imageHeight: 941,
    imageType: "image/png",
    breadcrumbName: "ระบบไม้กั้นรถยนต์",
    serviceType: "บริการติดตั้งไม้กั้นรถยนต์และระบบอ่านป้ายทะเบียน",
  },
  "/services/maintenance": {
    title: "บริการดูแลและบำรุงรักษาระบบ CCTV | M&M CCTV",
    description:
      "บริการตรวจเช็ก บำรุงรักษา และแก้ไขระบบกล้องวงจรปิด เครื่องบันทึก เครือข่าย และระบบควบคุมเข้า–ออก พร้อมรายงานผลตรวจ",
    path: "/services/maintenance",
    image: "/services/maintenance/maintenance-hero-v2.png",
    imageAlt: "ช่างตรวจเช็กและบำรุงรักษาระบบกล้องวงจรปิด",
    imageWidth: 1536,
    imageHeight: 1024,
    imageType: "image/png",
    breadcrumbName: "บริการดูแลระบบ",
    serviceType: "บริการตรวจเช็กและบำรุงรักษาระบบ CCTV",
  },
  ...caseStudyPageMetadata,
};

export const notFoundMetadata = {
  title: "ไม่พบหน้าที่ต้องการ | M&M CCTV",
  description: "ไม่พบหน้าที่คุณกำลังค้นหา เลือกกลับหน้าแรกหรือดูบริการหลักของ M&M CCTV",
  path: "/404",
  image: "/hero-installation-modern-v3.webp",
  imageAlt: "M&M CCTV ระบบรักษาความปลอดภัยครบวงจร",
  imageWidth: 1672,
  imageHeight: 941,
  imageType: "image/webp",
  noindex: true,
};

export function normalizeMetadataPath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

export function getPageMetadata(pathname) {
  return pageMetadata[normalizeMetadataPath(pathname)] ?? notFoundMetadata;
}

export function getCanonicalUrl(metadata) {
  return `${SITE_URL}${metadata.path === "/" ? "/" : metadata.path}`;
}

export function getAbsoluteImageUrl(metadata) {
  return `${SITE_URL}${metadata.image}`;
}

export function createPageStructuredData(metadata) {
  if (metadata.noindex) {
    return null;
  }

  const canonical = getCanonicalUrl(metadata);
  const image = getAbsoluteImageUrl(metadata);
  const pageName = metadata.title.replace(" | M&M CCTV", "");
  const primaryImageId = `${canonical}#primaryimage`;
  const webPageId = `${canonical}#webpage`;
  const imageObject = {
    "@type": "ImageObject",
    "@id": primaryImageId,
    url: image,
    contentUrl: image,
    width: metadata.imageWidth,
    height: metadata.imageHeight,
    caption: metadata.imageAlt,
  };
  const webPage = {
    "@type": "WebPage",
    "@id": webPageId,
    url: canonical,
    name: pageName,
    description: metadata.description,
    inLanguage: "th-TH",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    primaryImageOfPage: { "@id": primaryImageId },
  };

  if (metadata.caseStudy) {
    const articleId = `${canonical}#article`;
    const breadcrumbId = `${canonical}#breadcrumb`;
    const parentUrl = `${SITE_URL}${metadata.parentPath}`;
    webPage.breadcrumb = { "@id": breadcrumbId };
    webPage.mainEntity = { "@id": articleId };

    return {
      "@context": "https://schema.org",
      "@graph": [
        webPage,
        imageObject,
        {
          "@type": "BreadcrumbList",
          "@id": breadcrumbId,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "M&M CCTV",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: metadata.parentName,
              item: parentUrl,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: metadata.breadcrumbName ?? pageName,
              item: canonical,
            },
          ],
        },
        {
          "@type": "Article",
          "@id": articleId,
          headline: pageName,
          description: metadata.description,
          image: (metadata.articleImages ?? [metadata.image]).map(
            (imagePath) => `${SITE_URL}${imagePath}`,
          ),
          datePublished: metadata.publishedDate,
          dateModified: metadata.modifiedDate,
          mainEntityOfPage: { "@id": webPageId },
          inLanguage: "th-TH",
          author: { "@id": ORGANIZATION_ID },
          publisher: { "@id": ORGANIZATION_ID },
          about: {
            "@type": "Service",
            name: "บริการออกแบบและติดตั้งระบบกล้องวงจรปิด",
            url: parentUrl,
          },
        },
      ],
    };
  }

  if (!metadata.serviceType) {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: "M&M CCTV",
          inLanguage: "th-TH",
          publisher: { "@id": ORGANIZATION_ID },
        },
        webPage,
        imageObject,
      ],
    };
  }

  const serviceId = `${canonical}#service`;
  const breadcrumbId = `${canonical}#breadcrumb`;
  webPage.breadcrumb = { "@id": breadcrumbId };
  webPage.about = { "@id": serviceId };

  return {
    "@context": "https://schema.org",
    "@graph": [
      webPage,
      imageObject,
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "M&M CCTV",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: metadata.breadcrumbName ?? pageName,
            item: canonical,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: pageName,
        serviceType: metadata.serviceType,
        description: metadata.description,
        url: canonical,
        image: { "@id": primaryImageId },
        mainEntityOfPage: { "@id": webPageId },
        inLanguage: "th-TH",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: ["ฉะเชิงเทรา", "ปราจีนบุรี", "นครนายก", "ชลบุรี", "สมุทรปราการ"].map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
      },
    ],
  };
}
