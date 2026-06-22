/**
 * Central content source for the portfolio.
 *
 * This file is the single source of truth for every section of the site.
 * Replace the PLACEHOLDER values below with real information from a resume,
 * LinkedIn export, or direct input. Nothing here should be treated as real
 * until validated — fields are intentionally generic rather than invented.
 */

export type SkillCategory =
  | "Technical"
  | "Professional"
  | "Management"
  | "Tools & Platforms";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0-100
}

export interface ExperienceEntry {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string; // "Present" allowed
  responsibilities: string[];
  achievements: string[];
}

export type ProjectCategory =
  | "Operations"
  | "Marketing"
  | "Technology"
  | "Management"
  | "Consulting";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string;
  link?: string;
}

export interface EducationEntry {
  institution: string;
  credential: string;
  field: string;
  startYear: string;
  endYear: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  year: string;
}

export interface Reference {
  name: string;
  position: string;
  company: string;
  relationship: string;
  recommendation: string;
}

export const profile = {
  fullName: "Alex Arévalo", // PLACEHOLDER - confirm preferred display name
  title: "Professional Title Placeholder", // PLACEHOLDER
  valueProposition:
    "A concise statement of the unique value you deliver — replace with your own positioning.", // PLACEHOLDER
  summary:
    "Short professional summary placeholder. Replace with 2-3 sentences describing your background, focus areas, and what you help organizations achieve.", // PLACEHOLDER
  location: "City, Country", // PLACEHOLDER
  email: "contact@example.com", // PLACEHOLDER - never rendered directly in HTML
  linkedinUrl: "https://www.linkedin.com/in/your-profile", // PLACEHOLDER
  resumeFile: "/resume.pdf",
  resumeVersionDate: "2026-06-22", // PLACEHOLDER
  yearsExperience: 0, // PLACEHOLDER
  industries: ["Industry Placeholder A", "Industry Placeholder B"], // PLACEHOLDER
  coreStrengths: [
    "Core strength placeholder one",
    "Core strength placeholder two",
    "Core strength placeholder three",
  ], // PLACEHOLDER
  leadershipStyle:
    "Leadership style placeholder — describe your approach to leading teams and projects.", // PLACEHOLDER
  mission:
    "Professional mission placeholder — describe the long-term impact you aim to create.", // PLACEHOLDER
};

export const skills: Skill[] = [
  { name: "Skill Placeholder 1", category: "Technical", level: 80 },
  { name: "Skill Placeholder 2", category: "Technical", level: 70 },
  { name: "Skill Placeholder 3", category: "Professional", level: 85 },
  { name: "Skill Placeholder 4", category: "Professional", level: 75 },
  { name: "Skill Placeholder 5", category: "Management", level: 80 },
  { name: "Skill Placeholder 6", category: "Management", level: 70 },
  { name: "Tool Placeholder 1", category: "Tools & Platforms", level: 90 },
  { name: "Tool Placeholder 2", category: "Tools & Platforms", level: 65 },
];

export const experience: ExperienceEntry[] = [
  {
    company: "Company Placeholder",
    position: "Position Placeholder",
    location: "City, Country",
    startDate: "2023",
    endDate: "Present",
    responsibilities: [
      "Responsibility placeholder describing a core duty in this role.",
      "Responsibility placeholder describing a second core duty.",
    ],
    achievements: [
      "Increased [metric] by XX% through [initiative placeholder].",
      "Led [project placeholder], delivering [outcome placeholder].",
    ],
  },
  {
    company: "Previous Company Placeholder",
    position: "Previous Position Placeholder",
    location: "City, Country",
    startDate: "2020",
    endDate: "2023",
    responsibilities: [
      "Responsibility placeholder for the previous role.",
    ],
    achievements: [
      "Achievement placeholder with a quantified result.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "project-one",
    name: "Project Name Placeholder",
    category: "Technology",
    description: "One-line description of the project placeholder.",
    technologies: ["Tech A", "Tech B"],
    challenge: "Challenge placeholder describing the problem to solve.",
    solution: "Solution placeholder describing the approach taken.",
    results: "Results placeholder with measurable impact, e.g. XX% improvement.",
    link: undefined,
  },
  {
    slug: "project-two",
    name: "Project Name Placeholder 2",
    category: "Operations",
    description: "One-line description of the second project placeholder.",
    technologies: ["Tool A", "Tool B"],
    challenge: "Challenge placeholder for the second project.",
    solution: "Solution placeholder for the second project.",
    results: "Results placeholder for the second project.",
    link: undefined,
  },
];

export const education: EducationEntry[] = [
  {
    institution: "Institution Placeholder",
    credential: "Degree Placeholder",
    field: "Field of Study Placeholder",
    startYear: "2016",
    endYear: "2020",
  },
];

export const certifications: CertificationEntry[] = [
  {
    name: "Certification Placeholder",
    issuer: "Issuing Body Placeholder",
    year: "2024",
  },
];

export const references: Reference[] = [
  {
    name: "Reference Name Placeholder",
    position: "Position Placeholder",
    company: "Company Placeholder",
    relationship: "Former Manager", // PLACEHOLDER
    recommendation:
      "Recommendation placeholder text. Replace with an authentic quote provided directly by the reference, or import from LinkedIn recommendations.",
  },
];
