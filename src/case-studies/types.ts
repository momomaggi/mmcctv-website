export type CaseStudyImage = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  objectPosition?: string;
};

export type CaseStudyStage = {
  no: string;
  label: string;
  title: string;
  text: string;
  images: CaseStudyImage[];
};

export type CaseStudyDetail = {
  label: string;
  value: string;
  dateTime?: string;
};

export type CaseStudyProject = {
  slug: string;
  title: string;
  location: string;
  publishedDate: string;
  modifiedDate: string;
  projectDate: string;
  projectDateLabel: string;
  servicePath: string;
  serviceName: string;
  kicker: string;
  hero: {
    title: string;
    accentTitle: string;
    description: string;
    desktopImage: string;
    mobileImage: string;
    alt: string;
    width: number;
    height: number;
  };
  projectDetails: CaseStudyDetail[];
  projectBrief: {
    title: string;
    description: string;
    points: string[];
  };
  process: {
    title: string;
    description: string;
    stages: CaseStudyStage[];
  };
  results: {
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  disclosure: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
  };
};
