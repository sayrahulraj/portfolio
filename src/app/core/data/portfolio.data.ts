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
        detail: 'Began my career as a Java Developer on Cardinal Health, building Spring Boot microservices and REST APIs from scratch as part of a cross-functional team, working closely with QA and business analysts on healthcare supply-chain applications.',
    },
    {
        year: '2024',
        title: 'Expanded Full Stack Expertise',
        detail: 'Joined the State Farm insurance project mid-way through its development, ramping up quickly to improve existing APIs, interact directly with the client on new requirements, and deliver across both Spring Boot backend services and Angular frontend components.',
    },
    {
        year: '2025',
        title: 'Joined Infosys',
        detail: 'Joined Infosys as an Associate Consultant, working directly with the Fiserv client on a global banking platform — building and modernizing REST APIs behind an Apigee gateway using Java 17, Spring Boot, Microservices, and Angular.',
    },
    {
        year: '2026',
        title: 'Promoted to Senior Associate Consultant',
        detail: 'Promoted to Senior Associate Consultant at Infosys within 1.5 years, continuing to lead API modernization work on the Fiserv account.',
    },
    {
        year: 'Present',
        title: 'Building Modern Enterprise Solutions',
        detail: 'Developing secure, high-performance applications with Spring Boot, Angular, Kafka, Redis, JWT, and AI-assisted development tools like GitHub Copilot, Devin AI, and Claude AI.',
    },
];

export const ABOUT_HIGHLIGHTS: readonly { label: string, value: string }[] = [
    { label: 'Years of Experience', value: '5.5+' },
    { label: 'Projects Delivered', value: '3+' },
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
        role: 'Senior Associate Consultant | Java Full Stack Developer',
        period: 'Jan 2025 - Present',
        location: 'Hyderabad, India',
        summary:
            'Working on enterprise banking solutions for Fiserv, USA, developing scalable Java Full Stack applications using Spring Boot, Angular, Microservices, Kafka and Claude AI.',
        projects: [
            {
                name: 'Fiserv Inc. (USA)',
                description:
                    'Enterprise banking and financial services platform for secure and scalable digital payment solutions.',
                responsibilities: [
                    'Worked directly with the Fiserv client through requirement discussions and calls, translating evolving business needs into technical changes rather than working off a fixed specification.',
                    'Built and modified REST APIs in Spring Boot on the backend, and contributed to Angular components on the frontend that consume them.',
                    'Used Apigee as the API gateway layer between backend and frontend, managing routing, security, and traffic between the two.',
                    'Took on legacy API modernization, adapting existing services to match new requirements gathered directly from those client conversations.'
                ],
                achievements: [
                    'Received an Insta Award at Infosys for consistent performance improvement and contribution to the successful delivery of the MN Rewrite Websites Phase 2 project, with recognized commitment to speed and efficiency in Webservices Phase 2 as well.',
                    'Recognized as Employee of the Quarter (Jan–Mar 2026) at Infosys for sustained strong performance and consistent delivery.',
                    'Promoted from Associate Consultant to Senior Associate Consultant at Infosys within approximately 1.5 years — well ahead of typical timelines — on the strength of consistent performance.',
                ],
                stack: [
                    'Java',
                    'Spring Boot',
                    'Microservices',
                    'MS SQL Server',
                    'JPA/Hibernate',
                    'Redis',
                    'Kafka',
                    'Angular',
                    'Apigee',
                    'JWT',
                    'GitLab',
                    'Maven',
                    'Claude AI',
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
                    'Built Java/Spring Boot microservices and REST APIs from scratch, owning the work from initial design through to final production release.',
                    'Focused primarily on backend development — service architecture, business logic, and data persistence using JPA/Hibernate and MS SQL Server.',
                    'Collaborated closely with QA and business analysts to translate healthcare supply-chain requirements into working backend services, learning the team\'s development and review processes along the way.',
                ],
                achievements: [
                    'Completed multiple Fresco Play learning milestones throughout TCS tenure, reflecting consistent upskilling alongside project delivery.',
                    'Received team recognition award at TCS for contribution and commitment on a project delivery.',
                    'Awarded for outstanding contribution to the organization, recognized by TCS leadership as an inspiring role model to colleagues.',
                ],
                stack: [
                    'Java',
                    'Spring Boot',
                    'Spring MVC',
                    'REST APIs',
                    'MS SQL Server',
                    'JPA/Hibernate',
                    'Maven',
                    'GitLab',
                ],
            },
            {
                name: 'State Farm (USA)',
                description:
                    'Insurance platform focused on scalable microservices and modern web applications.',
                responsibilities: [
                    'Joined an already in-progress insurance platform project and quickly ramped up to take ownership of existing APIs, improving their performance and reliability.',
                    'Interacted directly with the client to gather and implement new requirements across both backend and frontend.',
                    'Secured the APIs with JWT and documented everything in Swagger/OpenAPI so both backend and frontend teams could work off them confidently.',
                ],
                achievements: [
                    'Ramped up quickly on a live, already in-progress codebase and became a meaningful contributor within weeks of joining.',
                    'Improved API response times by up to 30% on high-traffic services through Redis caching.',
                    'Built reusable Angular components that cut new-feature development time by roughly 20%.',
                ],
                stack: [
                    'Java',
                    'Spring Boot',
                    'Microservices',
                    'Apache Kafka',
                    'JWT',
                    'Redis',
                    'SonarQube',
                    'Fortify',
                    'GitLab',
                    'Angular',
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

