import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ButtonModule} from "primeng/button";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonModule],
  selector: 'tare-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tare';
}
