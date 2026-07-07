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
    'ASP.NET Web API', 'Microsoft SQL Server',
    'SoapUI & API Testing', 'COBOL / Legacy Systems',
    'ETL Pipelines', 'Private Banking Domain',
    'Angular', 'WinForms', 'MySQL', 'Bash Scripting',
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
