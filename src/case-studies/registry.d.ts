export type CaseStudyMetadata = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageType: string;
  articleImages: string[];
  publishedDate: string;
  modifiedDate: string;
  breadcrumbName: string;
  parentName: string;
  parentPath: string;
  caseStudy: boolean;
};

export const homeCctvPrachinburiRegistry: Readonly<{
  slug: string;
  title: string;
  location: string;
  path: string;
  publishedDate: string;
  modifiedDate: string;
  metadata: CaseStudyMetadata;
}>;

export const caseStudyPageMetadata: Readonly<Record<string, CaseStudyMetadata>>;
