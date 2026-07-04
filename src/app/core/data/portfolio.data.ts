import { Certification, ExperienceItem, NavItem, Project, SkillCategory, SocialLink, TimelineEntry } from "../models/portfolio.models";

export const PROFILE = {
    firstName: 'Rahul',
    lastName: 'Raj',
    fullName: 'Rahul Raj',
    initials: 'RR',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    email: 'sayrahulraj@gmail.com',
    phone: '+91 85410 77579',
    photo: 'assets/images/profile.svg',
    resumePath: 'assets/files/resume.pdf',
    resumeFileName: 'Rahul_Raj_Resume.pdf',
    summary: 'Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes.',
    roles: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'] as const,
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const SOCIALS: readonly SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/rahulraj', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rahulraj', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:rahul.raj@example.com', icon: 'email' },
];

export const ABOUT_TIMELINE: readonly TimelineEntry[] = [
  {
    year: '2021',
    title: 'Started at Infosys',
    detail: 'Joined as a software engineer building enterprise Java systems.',
  },
  {
    year: '2022',
    title: 'Full Stack Focus',
    detail: 'Expanded into Angular front-ends and REST API design.',
  },
  {
    year: '2023',
    title: 'Microservices',
    detail: 'Architected Spring Boot microservices deployed on AWS.',
  },
  {
    year: '2024',
    title: 'AI-Assisted Delivery',
    detail: 'Adopted AI pair-programming to accelerate quality delivery.',
  },
];

export const ABOUT_HIGHLIGHTS: readonly {label: string, value: string}[] = [
    {label: 'Years of Experience', value: '3+'},
    {label: 'Projects Completed', value: '15+'},
    {label: 'Certifications', value: '5'},
    {label: 'Technologies', value: '20+'},
];

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
    {
        title: 'Frontend Development',
        icon: 'code',
        skills: [
            {name: 'Angular', level: 90},
            {name: 'React', level: 80},
            {name: 'Vue.js', level: 70},
        ]
    }
];

export const EXPERIENCES: readonly ExperienceItem[] = [
    {
        company: 'Infosys',
        role: 'Software Engineer',
        period: '2023 - Present',
        location: 'Bangalore, India',
        summary: 'Working on enterprise applications using Angular and Spring Boot.',
        projects: [
            {
                name: 'Project A',
                description: 'Developed a full-stack application for internal use.',
                responsibilities: [
                    'Designed and implemented RESTful APIs using Spring Boot.',
                    'Developed responsive front-end components using Angular.',
                ],
                achievements: [
                    'Reduced page load time by 30% through optimization.',
                    'Implemented CI/CD pipelines to streamline deployments.',
                ],
                stack: ['Angular', 'Spring Boot', 'MySQL', 'Docker', 'Jenkins'],
            }
        ]
    }
];

export const PROJECTS: readonly Project[] = [
    {
        name: 'Portfolio Website',
        description: 'A personal portfolio website to showcase projects and skills.',
        image: 'assets/images/portfolio.png',
        stack: ['Angular', 'TypeScript', 'SCSS'],
        github: 'https://github.com/rahulraj/portfolio',
    }
];

export const CERTIFICATIONS: readonly Certification[] = [
    {
        name: 'AWS Certified Solutions Architect',
        organization: 'Amazon Web Services',
        date: '2023-05-15',
        image: 'assets/images/aws-certification.png',
        url: 'https://www.youracclaim.com/badges/aws-certified-solutions-architect',
    }
];

