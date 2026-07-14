import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  timeline: any[] = [];
  chips = [
    'C# — LinkedIn Assessed', 'Git — LinkedIn Assessed',
    'ASP.NET Web API', 'JERSEY Web API', 'Microsoft SQL Server',
    'SoapUI & API Testing', 'COBOL Batch & Online Processing',
    'ETL Pipelines', 'Jenkins & IIS Deployment',
    'Private Banking Domain', '🇨🇭 Onsite — Switzerland',
    'Angular', 'WinForms', 'MySQL', 'Bash Scripting',
    'ChatGPT', 'GitHub Copilot', 'Claude AI',
  ];
  certs = [
    'IBM Data Science Professional Certificate',
    'IBM Databases and SQL for Data Science',
    'IBM Introduction to Data Science',
    'Digital Marketing — Google',
    'Operating Systems and You: Becoming a Power User',
  ];
  constructor(private ps: PortfolioService) {}
  ngOnInit() { this.timeline = this.ps.timeline; }
}
