import { Component, inject } from '@angular/core';
import { GroupService } from '../group.service';
import { Group } from '../group';

@Component({
  selector: 'app-notification-settings',
  imports: [],
  templateUrl: './notification-settings.component.html',
  styleUrl: './notification-settings.component.css'
})
export class NotificationSettingsComponent {
  private service: GroupService = inject(GroupService);
  groups: Group[] = [];

  constructor() {
    this.service.getGroups().then(groups => this.groups = groups);
  }

}
