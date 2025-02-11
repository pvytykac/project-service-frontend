import { Component, Input, booleanAttribute } from '@angular/core';
import { Status } from '../status';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {

  @Input({required: true}) status!: string;
  @Input({transform: booleanAttribute}) showLabel: boolean = false;

  getStatusClass(): string {
     return this.status.toLowerCase();
   }
}
