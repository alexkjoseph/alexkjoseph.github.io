import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Skill } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  categories: string[] = [];
  activeTab = 'All';
  filteredSkills: Skill[] = [];
  stats: any = {};
  tooltip = { visible: false, name: '', desc: '', x: 0, y: 0 };

  levelLabels = ['','Learning','Familiar','Proficient','Advanced','Expert'];
  legend = [
    { label: 'Learning',   color: '#4a9e5c' },
    { label: 'Familiar',   color: '#6db87a' },
    { label: 'Proficient', color: '#00c882' },
    { label: 'Advanced',   color: '#00e5a0' },
    { label: 'Expert',     color: '#80ffcc' },
  ];

  constructor(private ps: PortfolioService) {}

  ngOnInit() {
    this.categories = this.ps.getCategories();
    this.filteredSkills = this.ps.getSkillsByCategory('All');
    this.stats = this.ps.stats;
  }

  ngAfterViewInit() {
    // Re-trigger reveal for dynamically rendered elements
  }

  setTab(cat: string) {
    this.activeTab = cat;
    this.filteredSkills = this.ps.getSkillsByCategory(cat);
  }

  getCellClass(level: number): string {
    return `l${level}`;
  }

  showTip(e: MouseEvent, skill: Skill) {
    this.tooltip = { visible: true, name: skill.name, desc: `${skill.desc} — ${this.levelLabels[skill.level]}`, x: e.clientX + 14, y: e.clientY + 14 };
  }

  hideTip() { this.tooltip.visible = false; }
}
