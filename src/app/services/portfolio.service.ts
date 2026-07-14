import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  cat: string;
  level: number;
  desc: string;
  assessed?: boolean;
}

export interface Project {
  title: string;
  desc: string;
  icon: string;
  tags: string[];
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  readonly levels = ['', 'Learning', 'Familiar', 'Proficient', 'Advanced', 'Expert'];

  readonly skills: Skill[] = [
    // Core .NET
    { name: 'C#',                      cat: 'Core .NET',       level: 5, desc: 'OOP, async/await, LINQ — LinkedIn Skill Assessed', assessed: true },
    { name: 'ASP.NET Web API',         cat: 'Core .NET',       level: 5, desc: 'REST API design, routing, middleware, DI — 2 TCS experiences' },
    { name: 'JERSEY Web API',          cat: 'Core .NET',       level: 4, desc: 'Java-based REST API used in banking portal project' },
    { name: 'ASP.NET',                 cat: 'Core .NET',       level: 4, desc: 'Web forms, MVC, server-side rendering — 2 TCS experiences' },
    { name: 'WinForms',                cat: 'Core .NET',       level: 4, desc: 'Desktop UI development — 2 TCS experiences' },

    // Frontend
    { name: 'Angular',                 cat: 'Frontend',        level: 4, desc: 'Components, services, routing, reactive forms — 2 TCS experiences' },
    { name: 'Object-oriented Design',  cat: 'Frontend',        level: 4, desc: 'OOP principles applied across full stack — 2 TCS experiences' },
    { name: 'HTML & CSS',              cat: 'Frontend',        level: 3, desc: 'Responsive layouts, semantic markup' },

    // Database
    { name: 'Microsoft SQL Server',    cat: 'Database',        level: 5, desc: 'T-SQL, stored procs, indexing, optimization — 2 TCS experiences' },
    { name: 'MySQL',                   cat: 'Database',        level: 4, desc: 'Relational queries, schema design — 2 TCS experiences' },

    // Testing & Tools
    { name: 'SoapUI',                  cat: 'Testing & Tools', level: 5, desc: 'SOAP & REST API testing, test automation — 2 TCS experiences' },
    { name: 'Git',                     cat: 'Testing & Tools', level: 5, desc: 'Branching, PR workflows, version control — LinkedIn Skill Assessed', assessed: true },
    { name: 'Jenkins',                 cat: 'Testing & Tools', level: 4, desc: '.NET CI/CD pipelines, automated build & deployment' },
    { name: 'IIS',                     cat: 'Testing & Tools', level: 4, desc: 'Deploy & configure .NET applications on IIS' },
    { name: 'GitHub',                  cat: 'Testing & Tools', level: 4, desc: 'Repo management, collaboration' },
    { name: 'Bash',                    cat: 'Testing & Tools', level: 4, desc: 'Shell scripting, automation — 2 TCS experiences' },
    { name: 'ETL',                     cat: 'Testing & Tools', level: 4, desc: 'Extract, Transform, Load pipelines — 2 TCS experiences' },

    // Domain
    { name: 'Private Banking',         cat: 'Domain',          level: 5, desc: 'Banking domain expertise — 2 TCS experiences' },
    { name: 'COBOL',                   cat: 'Domain',          level: 4, desc: 'Batch & online transaction processing modules — same Swiss banking system' },
    { name: 'Data Science',            cat: 'Domain',          level: 3, desc: 'IBM Data Science Professional Certificate' },
    { name: 'Digital Marketing',       cat: 'Domain',          level: 3, desc: 'Google Digital Marketing certified' },

    // AI & Tools
    { name: 'Prompt Engineering',      cat: 'AI & Tools',      level: 2, desc: 'Prompt engineering for code generation & debugging using Claude AI & ChatGPT' },
    { name: 'AI-assisted Development', cat: 'AI & Tools',      level: 2, desc: 'Co-coding with Claude AI for accelerated development, debugging and code review' },
    { name: 'ChatGPT',                 cat: 'AI & Tools',      level: 2, desc: 'AI-assisted problem solving, documentation and development support' },
    { name: 'GitHub Copilot',          cat: 'AI & Tools',      level: 2, desc: 'AI pair programming — inline code suggestions and completions' },
  ];

  readonly projects: Project[] = [
    {
      title: 'Angular Banking Client Portal',
      icon: '🏦',
      desc: 'Full stack portal for private banking clients — built with Angular and JERSEY Web API. Clients can view accounts, transactions and reports, make payments, buy and sell securities. Advisors can manage and oversee client portfolios. Enhanced and maintained on the same Swiss banking platform.',
      tags: ['Angular', 'JERSEY Web API', 'C#', 'Git']
    },
    {
      title: 'COBOL Banking Modules',
      icon: '⚙️',
      desc: 'Developed and maintained COBOL batch and online transaction processing modules for the Swiss private banking system at TCS — covering payment processing, account operations and data workflows.',
      tags: ['COBOL', 'Batch Processing', 'Online Transaction', 'SQL Server']
    },
    {
      title: 'API Test Automation Suite',
      icon: '🧪',
      desc: 'End-to-end API test automation using SoapUI covering SOAP and REST services across banking workflows, integrated into Jenkins CI pipelines.',
      tags: ['SoapUI', 'REST', 'SOAP', 'Jenkins']
    },
    {
      title: 'ETL Data Pipeline',
      icon: '🔄',
      desc: 'Extract, Transform, Load pipeline for migrating and transforming large volumes of banking data between legacy and modern systems at TCS.',
      tags: ['ETL', 'SQL Server', 'COBOL', 'Bash']
    },
    {
      title: 'Banking Production Support — Switzerland 🇨🇭',
      icon: '🚨',
      desc: 'Onsite at a Swiss private banking client (Oct–Dec 2025) — diagnosed and resolved critical production incidents covering batch failures, transaction processing issues and API outages under live SLA pressure with international stakeholders.',
      tags: ['C#', 'COBOL', 'SQL Server', 'ASP.NET Web API']
    },
    {
      title: '.NET IIS Deployment Pipeline',
      icon: '🚀',
      desc: 'Designed and maintained Jenkins CI/CD pipelines for deploying .NET banking applications to IIS — managing build automation, release packaging and environment-specific configurations.',
      tags: ['Jenkins', 'IIS', 'C#', '.NET']
    },
  ];

  readonly timeline: TimelineItem[] = [
    { year: 'Oct 2022 — Present',  role: 'Systems Engineer',                    company: 'Tata Consultancy Services, Tamil Nadu' },
    { year: 'Oct 2025 – Dec 2025', role: 'Onsite Systems Engineer — Switzerland', company: 'Tata Consultancy Services / Client Site, Zürich, Switzerland' },
    { year: 'Aug 2021 — Oct 2022', role: 'Assistant System Engineer Trainee',     company: 'Tata Consultancy Services, Chennai' },
    { year: 'Jul 2017 — Aug 2021', role: 'B.Tech — Computer Science',             company: "St. Joseph's College of Engg. & Technology, Palai" },
  ];

  getCategories(): string[] {
    return ['All', ...new Set(this.skills.map(s => s.cat))];
  }

  getSkillsByCategory(cat: string): Skill[] {
    return cat === 'All' ? this.skills : this.skills.filter(s => s.cat === cat);
  }

  get stats() {
    return {
      total:    this.skills.length,
      expert:   this.skills.filter(s => s.level === 5).length,
      advanced: this.skills.filter(s => s.level >= 4).length,
      cats:     new Set(this.skills.map(s => s.cat)).size,
    };
  }
}
