export interface Stat {
  value: string;
  label: string;
}

export interface TraceSpan {
  service: string;
  offset: number;
  duration: number;
  color: string;
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
  implementation: string;
  architecture: string;
  outcome: string;
  hiringSummary: {
    role: string;
    scope: string;
    stack: string[];
    outcome: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    intent: "role" | "project";
    label: string;
    trackLabel: string;
  };
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

export interface WorkInProgressMeta {
  status: "in-progress" | "completed";
  tags: string[];
}

export interface HiringEvidenceLink {
  label: string;
  href: string;
  type: "case-study" | "certification" | "writing" | "vault" | "resume";
}

export interface HiringProfile {
  id: "sre" | "observability" | "solutions-architect";
  title: string;
  shortTitle: string;
  audience: string;
  summary: string;
  outcomes: string[];
  strengths: string[];
  evidence: HiringEvidenceLink[];
  ctaLabel: string;
  trackLabel: string;
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
  tags: string[];
  tldr: string;
  body: string;
}
