import { Certification, ExperienceItem, NavItem, Project, SkillCategory, SocialLink, TimelineEntry } from "../models/portfolio.models";

export const PROFILE = {
    firstName: 'Rahul',
    lastName: 'Raj',
    fullName: 'Rahul Raj',
    initials: 'RR',
    title: 'Java Full Stack Developer',
    location: 'Hyderabad, IN',
    email: 'rahulrajonline.ai@gmail.com',
    phone: '+91 84648 77579',
    photo: 'assets/images/profile.jpg',
    resumePath: 'assets/resume/Rahul_Raj_Resume.pdf',
    resumeFileName: 'Rahul_Raj_Resume.pdf',
    summary: 'Java Full Stack Developer with 5.5+ years building scalable microservices and Angular front ends for global fintech, banking, and healthcare clients. Skilled in Spring Boot, Kafka, and cloud-native architectures, with a growing focus on AI-assisted engineering to boost delivery velocity.', roles: ['Android Apps', 'Web Applications'] as const,
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

/** Short tech highlights shown as pills under the hero's social links. */
export const HERO_HIGHLIGHTS: readonly string[] = [
    'Java',
    'Spring Boot',
    'Microservices',
    'Angular',
    'Claude AI',
];

export const SOCIALS: readonly SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/sayrahulraj', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sayrahulraj/', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:rahulrajonline.ai@gmail.com', icon: 'email' },
];

export const ABOUT_TIMELINE: readonly TimelineEntry[] = [
    {
        year: '2021',
        title: 'Started at Tata Consultancy Services',
        detail: 'Began my career as a Java Developer, building enterprise applications using Java, Spring Boot, and RESTful APIs for Cardinal Health.',
    },
    {
        year: '2024',
        title: 'Expanded Full Stack Expertise',
        detail: 'Worked on State Farm project, developing scalable microservices and Angular applications while implementing secure APIs and event-driven solutions using Kafka.',
    },
    {
        year: '2025',
        title: 'Joined Infosys',
        detail: 'Joined Infosys as an Associate Consultant, contributing to enterprise banking solutions for Fiserv using Java 17, Spring Boot, Microservices, Angular, and CI/CD practices.',
    },
    {
        year: 'Present',
        title: 'Building Modern Enterprise Solutions',
        detail: 'Developing secure, high-performance applications with Spring Boot, Angular, Kafka, Redis, OAuth2, JWT, and AI-assisted development tools like GitHub Copilot, Devin AI, and Claude AI.',
    },
];

export const ABOUT_HIGHLIGHTS: readonly { label: string, value: string }[] = [
    { label: 'Years of Experience', value: '5.5+' },
    { label: 'Projects Delivered', value: '4+' },
    { label: 'Certifications', value: '6+' },
    { label: 'Technologies', value: '3+' },
];

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
    {
        title: 'Language & Framework',
        icon: 'code',
        skills: [
            { name: 'Java 8', level: 90 },
            { name: 'Java 17', level: 95 },
            { name: 'Spring Boot', level: 95 },
            { name: 'Spring MVC', level: 90 },
            { name: 'JPA / Hibernate', level: 85 },
        ]
    },
    {
        title: 'Architecture & Integration',
        icon: 'server',
        skills: [
            { name: 'Microservices Architecture', level: 90 },
            { name: 'Hexagonal Architecture', level: 90 },
            { name: 'RESTful APIs', level: 95 },
            { name: 'Apache Kafka', level: 85 },
        ]
    },
    {
        title: 'Frontend Development',
        icon: 'layout',
        skills: [
            { name: 'Angular', level: 90 },
            { name: 'TypeScript', level: 65 },
            { name: 'JavaScript', level: 85 },
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 85 },
        ]
    },
    {
        title: 'API Security & Documentation',
        icon: 'lock',
        skills: [
            { name: 'OAuth2', level: 90 },
            { name: 'JWT Authentication', level: 90 },
            { name: 'API Gateway', level: 85 },
            { name: 'Swagger / OpenAPI', level: 90 },
        ]
    },
    {
        title: 'Data & Caching',
        icon: 'database',
        skills: [
            { name: 'MS SQL Server', level: 90 },
            { name: 'AWS RDS', level: 80 },
            { name: 'Redis', level: 90 },
        ]
    },
    {
        title: 'DevOps & CI/CD',
        icon: 'git-branch',
        skills: [
            { name: 'GitLab Pipelines', level: 90 },
            { name: 'Maven', level: 90 },
            { name: 'Gradle', level: 90 },
        ]
    },
    {
        title: 'Testing & Quality',
        icon: 'tool',
        skills: [
            { name: 'JUnit', level: 85 },
            { name: 'Mockito', level: 85 },
            { name: 'Cucumber', level: 85 },
            { name: 'SonarQube', level: 90 },
            { name: 'Fortify Scan', level: 85 },
            { name: 'Code Reviews', level: 90 },
        ]
    },
    {
        title: 'Agile Collaboration',
        icon: 'briefcase',
        skills: [
            { name: 'Scrum', level: 90 },
            { name: 'Confluence', level: 90 },
            { name: 'Cross-Functional & Client-Facing Delivery', level: 85 },
        ]
    },
    {
        title: 'AI-Augmented Engineering',
        icon: 'brain',
        skills: [
            { name: 'Claude AI', level: 90 },
            { name: 'GitHub Copilot', level: 85 },
            { name: 'Devin AI', level: 90 },
        ]
    }
];

export const EXPERIENCES: readonly ExperienceItem[] = [
    {
        company: 'Infosys Ltd.',
        role: 'Associate Consultant | Java Full Stack Developer',
        period: 'Jan 2025 - Present',
        location: 'Hyderabad, India',
        summary:
            'Working on enterprise banking solutions for Fiserv, USA, developing scalable Java Full Stack applications using Spring Boot, Angular, Microservices, and Kafka.',
        projects: [
            {
                name: 'Fiserv Inc. (USA)',
                description:
                    'Enterprise banking and financial services platform for secure and scalable digital payment solutions.',
                responsibilities: [
                    'Developed and maintained Spring Boot microservices using Java 17.',
                    'Built responsive Angular components for enterprise web applications.',
                    'Designed and implemented secure RESTful APIs.',
                    'Integrated Kafka for event-driven communication.',
                    'Worked with Redis, JPA/Hibernate, and MS SQL Server for data management.',
                    'Collaborated with cross-functional Agile teams to deliver high-quality software.',
                ],
                achievements: [
                    'Delivered scalable and secure enterprise banking solutions.',
                    'Improved application performance through optimized backend services.',
                    'Maintained high code quality using SonarQube and Fortify.',
                    'Automated deployments using CI/CD pipelines.',
                ],
                stack: [
                    'Java 17',
                    'Spring Boot',
                    'Angular',
                    'Microservices',
                    'Kafka',
                    'Redis',
                    'MS SQL Server',
                    'JPA/Hibernate',
                    'OAuth2',
                    'JWT',
                    'GitLab',
                    'Maven',
                    'JUnit',
                ],
            },
        ],
    },

    {
        company: 'Tata Consultancy Services',
        role: 'System Engineer | Java Developer',
        period: 'Jan 2021 - Jan 2025',
        location: 'Hyderabad, India',
        summary:
            'Worked on healthcare and insurance domain applications for Cardinal Health and State Farm, developing enterprise-grade Java applications and microservices.',
        projects: [
            {
                name: 'Cardinal Health Inc. (USA)',
                description:
                    'Healthcare platform for managing pharmaceutical and medical supply operations.',
                responsibilities: [
                    'Developed Java and Spring Boot backend services.',
                    'Created RESTful APIs for enterprise applications.',
                    'Implemented database operations using JPA/Hibernate and MS SQL Server.',
                    'Participated in Agile ceremonies and code reviews.',
                ],
                achievements: [
                    'Delivered reliable backend services for healthcare applications.',
                    'Enhanced API performance and maintainability.',
                ],
                stack: [
                    'Java 8',
                    'Spring Boot',
                    'Spring MVC',
                    'REST APIs',
                    'MS SQL Server',
                    'JPA/Hibernate',
                    'Git',
                    'Maven',
                ],
            },
            {
                name: 'State Farm (USA)',
                description:
                    'Insurance platform focused on scalable microservices and modern web applications.',
                responsibilities: [
                    'Developed Spring Boot microservices and Angular applications.',
                    'Integrated Apache Kafka for asynchronous messaging.',
                    'Implemented OAuth2 and JWT-based authentication.',
                    'Worked with CI/CD pipelines and code quality tools.',
                ],
                achievements: [
                    'Successfully delivered secure and scalable enterprise applications.',
                    'Improved deployment quality using SonarQube and Fortify scans.',
                ],
                stack: [
                    'Java 17',
                    'Spring Boot',
                    'Angular',
                    'Microservices',
                    'Kafka',
                    'OAuth2',
                    'JWT',
                    'Redis',
                    'SonarQube',
                    'Fortify',
                    'GitLab',
                ],
            },
        ],
    },
];

export const PROJECTS: readonly Project[] = [
    {
        name: 'Digi E-Learning Android Application',
        description:
            'A feature-rich Android learning platform designed for students to access study materials, take subject-wise quizzes, and utilize productivity tools. The application includes user authentication, semester-wise notes, PDF viewer, quiz management, score tracking, calculators, timer, logarithm tables, and trigonometric formulas to enhance the learning experience.',
        image: 'assets/images/digi-elearning.png',
        stack: [
            'Java',
            'Android',
            'Firebase',
            'XML',
            'Android Studio',
            'Material Design'
        ],
        github: 'https://github.com/sayrahulraj/DigiELearning',
    }
];

export const CERTIFICATIONS: readonly Certification[] = [
  {
    name: 'Claude Certified Architect - Foundations',
    organization: 'Anthropic',
    date: '2026-08-02',
    image: 'assets/images/claude-certified-architect-foundations.jpg',
    url: 'https://www.credly.com/badges/dbb51e06-8e8f-4925-838d-09792daaa6e4/public_url',
  },
  {
    name: 'Claude Certified Architect - Professional',
    organization: 'Anthropic',
    date: '2026-08-03',
    image: 'assets/images/claude-certified-architect-professional.jpg',
    url: 'https://www.credly.com/badges/73a31231-7b0c-4f7c-8963-4e9a5261d9e5/public_url',
  },
  {
    name: 'Programming in Java',
    organization: 'NPTEL',
    date: '2019-04-01',
    image: 'assets/images/nptel-java.png',
    url: 'https://drive.google.com/file/d/1K3KySNqhcguPiHpAehZbSMHBB4LFlFHQ/view',
  },
  {
    name: 'Database Management System',
    organization: 'NPTEL',
    date: '2026-08-03',
    image: 'assets/images/nptel-dbms.png',
    url: 'https://drive.google.com/file/d/1rU0-5bosdjqBhSmgx2Ca2FzkQapj-VSW/view',
  },
  {
     name: 'AWS Certified Cloud Practitioner',
     organization: 'Amazon Web Services (AWS)',
     date: '2024-11-06',
     image: 'assets/images/aws_cloudpractioner.png',
     url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/efb2457028bd47e99c3f96ce4a1c604a',
  },
  {
    name: 'Android Certification Training Course with Java',
    organization: 'Edureka',
    date: '2022-01-24',
    image: 'assets/images/android_developer.png',
    url: 'https://www.edureka.co/lms/certificate/846c53aa4633dff0dbd27dd45388258e',
  }
];

