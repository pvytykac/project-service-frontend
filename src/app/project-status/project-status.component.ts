import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { IconSvgComponent } from '../icon-svg/icon-svg.component';
import { StatusComponent } from '../status/status.component';
import { Project } from '../project';

@Component({
  selector: 'app-project-status',
  imports: [StatusComponent, MatCardModule, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './project-status.component.html',
  styleUrl: './project-status.component.css'
})
export class ProjectStatusComponent {

  @Input() project!: Project;

}
