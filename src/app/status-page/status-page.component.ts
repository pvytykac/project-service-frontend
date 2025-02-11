import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ProjectStatusComponent } from '../project-status/project-status.component';
import { GroupService } from '../group.service';
import { Group } from '../group';
import { Project } from '../project';

@Component({
  selector: 'app-status-page',
  imports: [MatCardModule, MatDividerModule, ProjectStatusComponent],
  templateUrl: './status-page.component.html',
  styleUrl: './status-page.component.css'
})
export class StatusPageComponent {
  private service: GroupService = inject(GroupService);
  groups: Group[] = [];

  constructor() {
    this.service.getGroups().then(groups => this.groups = groups);
  }

  getReportedProjectStatusClass(project: Project): string {
    return project.status.reportedStatus.toLowerCase();
  }

  getOverriddenProjectStatusClass(project: Project): string {
    return project.status.overriddenStatus.toLowerCase();
  }
}
