/** Shared domain models for the portfolio content */

export interface NavItem {
  readonly id: string;
  readonly label: string;
}

export interface SocialLink {
  readonly label: string;
  readonly url: string;
  readonly icon: 'github' | 'linkedin' | 'email';
}

export interface SkillCategory {
  readonly title: string;
  readonly icon: string;
  readonly skills: readonly Skill[];
}

export interface Skill {
  readonly name: string;
  /** proficiency 0-100, drives the animated meter */
  readonly level: number;
}

export interface ExperienceItem {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly location: string;
  readonly summary: string;
  readonly projects: readonly ExperienceProject[];
}

export interface ExperienceProject {
  readonly name: string;
  readonly description: string;
  readonly responsibilities: readonly string[];
  readonly achievements: readonly string[];
  readonly stack: readonly string[];
}

export interface Project {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly stack: readonly string[];
  readonly github?: string;
  readonly demo?: string;
}

export interface Certification {
  readonly name: string;
  readonly organization: string;
  readonly date: string;
  readonly image: string;
  readonly url?: string;
}

export interface TimelineEntry {
  readonly year: string;
  readonly title: string;
  readonly detail: string;
}

export type ThemeMode = 'dark' | 'light';