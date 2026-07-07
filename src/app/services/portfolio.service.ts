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
    { name: 'C#',              cat: 'Core .NET', level: 5, desc: 'OOP, async/await, LINQ — LinkedIn Skill Assessed', assessed: true },
    { name: 'ASP.NET Web API', cat: 'Core .NET', level: 5, desc: 'REST API design, routing, middleware, DI — 2 TCS experiences' },
    { name: 'ASP.NET',         cat: 'Core .NET', level: 4, desc: 'Web forms, MVC, server-side rendering — 2 TCS experiences' },
    { name: 'WinForms',        cat: 'Core .NET', level: 4, desc: 'Desktop UI development — 2 TCS experiences' },

    // Frontend
    { name: 'Angular',         cat: 'Frontend',  level: 4, desc: 'Components, services, routing, reactive forms — 2 TCS experiences' },
    { name: 'Object-oriented Languages', cat: 'Frontend', level: 4, desc: 'OOP principles applied across stack — 2 TCS experiences' },
    { name: 'HTML & CSS',      cat: 'Frontend',  level: 3, desc: 'Responsive layouts, semantic markup' },

    // Database
    { name: 'Microsoft SQL Server', cat: 'Database', level: 5, desc: 'T-SQL, stored procs, indexing, optimization — 2 TCS experiences' },
    { name: 'MySQL',           cat: 'Database',  level: 4, desc: 'Relational queries, schema design — 2 TCS experiences' },

    // Backend & Tools
    { name: 'SoapUI',          cat: 'Testing & Tools', level: 5, desc: 'SOAP & REST API testing, test automation — 2 TCS experiences' },
    { name: 'Git',             cat: 'Testing & Tools', level: 5, desc: 'Branching, PR workflows, version control — LinkedIn Skill Assessed', assessed: true },
    { name: 'GitHub',          cat: 'Testing & Tools', level: 4, desc: 'Repo management, collaboration — St. Joseph\'s College' },
    { name: 'Bash',            cat: 'Testing & Tools', level: 4, desc: 'Shell scripting, automation — 2 TCS experiences' },
    { name: 'ETL',             cat: 'Testing & Tools', level: 4, desc: 'Extract, Transform, Load pipelines — 2 TCS experiences' },

    // Domain
    { name: 'Private Banking', cat: 'Domain', level: 5, desc: 'Banking domain expertise — 2 TCS experiences' },
    { name: 'COBOL',           cat: 'Domain', level: 4, desc: 'Legacy mainframe programming — 2 TCS experiences' },
    { name: 'Data Science',    cat: 'Domain', level: 3, desc: 'IBM Data Science Professional Certificate' },
    { name: 'Digital Marketing', cat: 'Domain', level: 3, desc: 'Google Digital Marketing certified' },
  ];

  readonly projects: Project[] = [
    { title: 'Banking System Module',         icon: '🏦', desc: 'Private banking enterprise module at TCS — secure transaction management, reporting, and ASP.NET Web API integrations with SQL Server backend.', tags: ['C#', 'ASP.NET Web API', 'SQL Server', 'Private Banking'] },
    { title: 'API Test Automation Suite',     icon: '🧪', desc: 'End-to-end API test automation using SoapUI covering SOAP and REST services across banking workflows, with CI pipeline integration.', tags: ['SoapUI', 'REST', 'SOAP', 'Bash'] },
    { title: 'ETL Data Pipeline',             icon: '🔄', desc: 'Extract, Transform, Load pipeline for migrating and transforming large volumes of banking data between systems at TCS.', tags: ['ETL', 'SQL Server', 'COBOL', 'Bash'] },
    { title: 'WinForms Desktop Application', icon: '🖥️', desc: 'Internal desktop tool built with WinForms and C# for banking operations management, with SQL Server integration.', tags: ['WinForms', 'C#', 'SQL Server', 'MySQL'] },
    { title: 'Angular Frontend Portal',       icon: '⚡', desc: 'Full stack Angular web portal with ASP.NET Web API backend for internal enterprise operations, featuring responsive design and role-based access.', tags: ['Angular', 'ASP.NET Web API', 'C#', 'Git'] },
    { title: 'Legacy COBOL Modernisation',   icon: '🏗️', desc: 'Analysed and modernised COBOL-based legacy banking systems, integrating with modern .NET APIs for gradual migration at TCS.', tags: ['COBOL', 'C#', 'ASP.NET', 'SQL Server'] },
  ];

  readonly timeline: TimelineItem[] = [
    { year: 'Oct 2022 — Present',  role: 'Systems Engineer',                 company: 'Tata Consultancy Services, Tamil Nadu' },
    { year: 'Aug 2021 — Oct 2022', role: 'Assistant System Engineer Trainee', company: 'Tata Consultancy Services, Chennai' },
    { year: 'Jul 2017 — Aug 2021', role: 'B.Tech — Computer Science',         company: "St. Joseph's College of Engg. & Technology, Palai" },
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
