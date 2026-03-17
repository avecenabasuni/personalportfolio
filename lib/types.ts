export interface Stat {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tags: string[];
  isOpenSource?: boolean;
  stars?: number;
  image: string;
  imageAlt: string;
  summary: string;
  problem: string;
  what: string;
  result: string;
}

export interface Article {
  title: string;
  url: string;
}

export interface WorkInProgress {
  title: string;
  description: string;
}

export interface ExperienceRole {
  title: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuedOn: string;
  expiresOn?: string;
  summary: string;
  credentialUrl?: string;
  badgeImage?: string;
  platform: string;
  primary?: boolean;
}

export interface SkillGroup {
  domain: string;
  context: string;
  skills: string[];
}

export interface VaultEntry {
  id: string;
  title: string;
  tldr: string;
  body: string;
}
