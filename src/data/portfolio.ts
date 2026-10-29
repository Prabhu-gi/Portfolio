export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon?: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  liveDemoUrl?: string;
  githubUrl?: string;
  capabilities: string[];
}

export interface Service {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  hasCta?: boolean;
}

export const personalInfo = {
  fullName: "Voleti Prabhu Kranthi",
  displayName: "Prabhu Kranthi",
  role: "Full Stack Developer",
  roleHighlight: "Java & React Specialist",
  tagline: "Building high-performance Spring Boot REST APIs, scalable MongoDB data layers, and responsive web platforms.",
  email: "Prabhukranthi02@gmail.com",
  phone: "+91 9392247355",
  location: "Andhra Pradesh, India",
  github: "https://github.com/prabhu-gi",
  linkedin: "https://linkedin.com/in/prabhukranthi",
  aboutText: "An enthusiastic Java Full Stack Developer with hands-on experience building production-grade Spring Boot REST APIs, MongoDB and MySQL data layers, and Docker-based deployments. Built core PRISM ERP modules at Sandspace Technologies cutting query latency by 35% through optimized compound indexing. Experienced in JWT/RBAC security, JUnit & Mockito automated testing (85%+ coverage), and modular React frontend development.",
  aboutHighlights: ["Java 17", "Spring Boot", "React.js", "MongoDB", "REST APIs", "Docker"],
  education: [
    {
      degree: "B.Sc. in Computer Science",
      institution: "P.R. Government Degree College",
      period: "2021 – 2024",
      score: "CGPA: 7.5 / 10.0"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Vijaya Gayatri Junior College",
      period: "2019 – 2021",
      score: "CGPA: 8.9 / 10.0"
    }
  ],
  certifications: [
    {
      title: "Full Stack Java Development Certification",
      issuer: "JSpiders",
      description: "Core and Advanced Java, Spring Boot, Hibernate, SQL/NoSQL, and Microservices"
    },
    {
      title: "Web Development Certification",
      issuer: "Modern Frontend Architecture",
      description: "JavaScript ES6+, Responsive Design, DOM Manipulation & AJAX"
    }
  ],
  experience: [
    {
      role: "Full Stack Java Developer",
      company: "Sandspace Technologies Pvt. Ltd.",
      location: "Andhra Pradesh, India",
      period: "Aug 2026 – Present",
      bullets: [
        "Built and maintain 15+ REST API endpoints for PRISM ERP using Spring Boot; cut query latency 35% by adding compound MongoDB indexes.",
        "Designed MongoDB document schemas for customer and communication data; kept retrieval under 200 ms across 5,000+ records.",
        "Implemented JWT authentication and role-based access control in Spring Boot, securing every endpoint behind Admin/User roles.",
        "Containerized PRISM services with Docker and Maven, reducing staging setup and deployment time by 40%.",
        "Reviewed 40+ pull requests on GitHub and introduced a PR checklist that standardized validation before merge."
      ]
    },
    {
      role: "OPT Recruiter / Technical Screening Associate",
      company: "Netline Technologies – US IT Staffing",
      location: "Andhra Pradesh, India",
      period: "Feb 2026 – May 2026",
      bullets: [
        "Screened 120+ US-based software engineers (OPT/STEM OPT) for enterprise client requirements.",
        "Ran 40+ technical screens covering Java, multithreading, SQL, and Spring, shortlisting candidates for client interviews.",
        "Managed the candidate pipeline and onboarding paperwork, reducing time-to-submission by 25%."
      ]
    },
    {
      role: "Full Stack Developer – Apprentice",
      company: "SmartBridge Educational Services Pvt. Ltd.",
      location: "Remote, India",
      period: "Jan 2024 – May 2024",
      bullets: [
        "Delivered 6 full-stack modules using Java, Spring MVC, and MySQL; improved query response time 20% by adding indexes and rewriting joins.",
        "Wrote JUnit tests for service and controller layers, reaching 85% coverage across delivered modules in a Scrum team."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Brainovision Solutions Pvt. Ltd.",
      location: "Remote, India",
      period: "May 2023 – Jun 2023",
      bullets: [
        "Built 5 responsive pages and reusable layout components with HTML5, CSS3, JavaScript, and AJAX, tested across mobile and desktop."
      ]
    }
  ]
};

export const skillsMarquee = {
  row1: [
    "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design", "Flexbox & Grid", "Bootstrap", "AJAX", "JSON"
  ],
  row2: [
    "Java 17", "Spring Boot", "RESTful APIs", "Spring Security", "JWT Authentication", "Spring Data JPA", "Hibernate", "Bean Validation"
  ],
  row3: [
    "MongoDB", "MySQL", "SQL", "JDBC", "Schema Design", "Docker", "Maven", "Git", "GitHub Flow"
  ],
  row4: [
    "JUnit", "Mockito", "Postman", "VS Code", "Eclipse", "JIRA", "Linux Shell", "OOP", "Data Structures & Algorithms", "DBMS"
  ]
};

export const servicesData: Service[] = [
  {
    number: "01",
    title: "FULL STACK JAVA & REACT DEVELOPMENT",
    description: "I build robust, high-performance web applications by combining modern layered Spring Boot backends, responsive React.js user interfaces, and production-ready architectures.",
    capabilities: [
      "Layered Spring Boot 3 & Java 17 backend services",
      "Dynamic, accessible React.js user interfaces",
      "RESTful API design & OpenAPI/Postman documentation",
      "End-to-end integration with state management",
      "Clean, maintainable, production-ready code"
    ],
    hasCta: true
  },
  {
    number: "02",
    title: "REST API & SECURE AUTHENTICATION",
    description: "I engineer secure, stateless RESTful APIs backed by Spring Security, JSON Web Tokens (JWT), and granular Role-Based Access Control (RBAC).",
    capabilities: [
      "JWT-based stateless authentication & refresh tokens",
      "Role-Based Access Control (Admin/User privileges)",
      "Strict request validation using Spring Bean Validation",
      "Security filters, CORS handling & exception hierarchies",
      "API performance tuning & response caching"
    ]
  },
  {
    number: "03",
    title: "DATABASE ARCHITECTURE & OPTIMIZATION",
    description: "I design scalable document models and relational database schemas, accelerating search and transaction performance through intelligent query indexing.",
    capabilities: [
      "MongoDB document modeling & compound indexing",
      "MySQL relational schema normalization & foreign keys",
      "Sub-200ms query retrieval across 5,000+ records",
      "Spring Data JPA repositories & custom Hibernate queries",
      "Data consistency, ACID compliance & migrations"
    ]
  },
  {
    number: "04",
    title: "DOCKER CONTAINERIZATION & DEVOPS",
    description: "I containerize services for reproducible staging and deployment environments, accelerating CI/CD pipelines and team developer setup.",
    capabilities: [
      "Multi-stage Docker containerization for Java & React",
      "Automated Maven build pipelines & dependency management",
      "GitHub Flow, branch policies & standardized PR reviews",
      "40% reduction in local onboarding and deployment times",
      "Linux server orchestration & environment configuration"
    ]
  },
  {
    number: "05",
    title: "AUTOMATED TESTING & QUALITY ASSURANCE",
    description: "I write comprehensive test suites ensuring zero regression, validating business rules, and maintaining 85%+ test coverage across services.",
    capabilities: [
      "Unit testing with JUnit 5 & Mockito mocks",
      "Integration testing for Spring Boot controller & service layers",
      "Payload integrity & boundary condition verification",
      "85%+ code coverage across critical business logic",
      "Standardized PR validation checklists"
    ]
  },
  {
    number: "06",
    title: "TECHNICAL EVALUATION & CODE REVIEWS",
    description: "I conduct rigorous technical evaluations and code reviews, ensuring industry best practices in data structures, OOP principles, and clean system design.",
    capabilities: [
      "In-depth technical evaluations in Java, Spring, & SQL",
      "Comprehensive code reviews on GitHub with actionable feedback",
      "Adherence to Object-Oriented Principles (SOLID) & MVC",
      "System design analysis & refactoring recommendations",
      "Agile Scrum sprint participation and standups"
    ]
  }
];

export const projectsData: Project[] = [
  {
    number: "01",
    title: "SS PRISM ERP",
    category: "ENTERPRISE ERP & CRM",
    description: "An enterprise-grade Customer Relationship & Communication platform built with Spring Boot, MongoDB, and Docker. Delivers 15+ secured REST API endpoints, automated Bean Validation, and compound indexing that reduced database query latency by 35% with sub-200ms response times across 5,000+ records.",
    image: "/assets/prism-erp.jpg",
    tags: ["Java 17", "Spring Boot", "MongoDB", "Docker", "JWT / RBAC", "Maven"],
    metrics: [
      { label: "Query Latency Cut", value: "35%" },
      { label: "Data Retrieval", value: "< 200ms" },
      { label: "Records Handled", value: "5,000+" },
      { label: "Staging Setup Cut", value: "40%" }
    ],
    liveDemoUrl: "#contact",
    githubUrl: "https://github.com/prabhu-gi",
    capabilities: [
      "Built 4 modular backend domains (customers, communication logs, analytics, auth)",
      "Engineered compound MongoDB indexes to accelerate high-frequency lookups",
      "Containerized microservices with Docker reducing deployment overhead by 40%",
      "Enforced Bean Validation and 85%+ JUnit/Mockito test coverage"
    ]
  },
  {
    number: "02",
    title: "TEGA PLATFORM",
    category: "EDUCATIONAL & CAREER HUB",
    description: "An end-to-end educational web platform engineered with Java, Spring Boot, React.js, and MySQL. Features dynamic media galleries, modular course hierarchies, student onboarding workflows, and atomic accessible UI components that accelerated frontend feature delivery by 30%.",
    image: "/assets/tega-platform.jpg",
    tags: ["React.js", "Java", "Spring Boot", "REST APIs", "MySQL", "WCAG A11y"],
    metrics: [
      { label: "Feature Delivery", value: "+30%" },
      { label: "API Payload Cut", value: "25%" },
      { label: "Component Reusability", value: "100%" },
      { label: "Accessibility", value: "WCAG AA" }
    ],
    liveDemoUrl: "https://tegaedu.com",
    githubUrl: "https://github.com/prabhu-gi",
    capabilities: [
      "Engineered dynamic course catalog with hierarchical category browsing",
      "Authored a modular, atomic React UI component library",
      "Built optimized REST APIs with Spring Boot and relational MySQL schema",
      "Implemented role-based dashboard for instructors and students"
    ]
  },
  {
    number: "03",
    title: "SHOPSPHERE",
    category: "FULL-STACK E-COMMERCE",
    description: "A production-ready full-stack e-commerce application engineered with Java 17, Spring Boot 3, React 18, and MySQL. Features secure JWT/RBAC authentication, Redis cache acceleration, dynamic catalog filtering, cart state management, and Docker containerization.",
    image: "/assets/shopsphere.jpg",
    tags: ["Java 17", "Spring Boot", "React.js", "MySQL", "Redis", "Docker", "Tailwind CSS"],
    metrics: [
      { label: "Cache Response", value: "< 50ms" },
      { label: "API Endpoints", value: "20+" },
      { label: "Test Coverage", value: "85%" },
      { label: "Local Port", value: ":3000" }
    ],
    liveDemoUrl: "http://localhost:3000",
    githubUrl: "https://github.com/Prabhu-gi/Shopsphere",
    capabilities: [
      "Engineered layered Spring Boot REST APIs with JWT & Refresh token security",
      "Integrated Redis caching layer reducing database read load by 45%",
      "Built responsive React storefront with category browsing and cart checkout",
      "Containerized full-stack architecture with Docker Compose and MySQL"
    ]
  },
  {
    number: "04",
    title: "THE BAKERY",
    category: "ARTISAN BAKERY WEB APPLICATION",
    description: "An elegant, responsive artisan bakery web application built with HTML5, CSS3, JavaScript, and Font Awesome. Showcases custom theme cakes, interactive product navigation, categorized bakery menus, and fluid mobile-first layouts.",
    image: "/assets/bakery.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Flexbox & Grid"],
    metrics: [
      { label: "Mobile Responsive", value: "100%" },
      { label: "Theme Showcase", value: "Artisan Cakes" },
      { label: "Page Load", value: "< 1.0s" },
      { label: "Local Port", value: ":5500" }
    ],
    liveDemoUrl: "http://localhost:5500",
    githubUrl: "https://github.com/Prabhu-gi/Bakery",
    capabilities: [
      "Crafted custom theme cake showcase featuring interactive image enlargement",
      "Designed responsive pastry and cake category browsing with smooth transitions",
      "Engineered clean semantic HTML5 layout with mobile-first CSS3 Flexbox and Grid",
      "Integrated intuitive quick-links footer and customer order interaction flow"
    ]
  }
];

