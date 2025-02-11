import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatIconModule}  from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { IconSvgComponent } from './icon-svg/icon-svg.component';
import { StatusComponent } from './status/status.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatIconModule, MatButtonModule, IconSvgComponent, StatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
