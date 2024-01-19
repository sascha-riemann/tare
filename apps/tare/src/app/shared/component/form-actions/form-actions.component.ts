import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'tare-form-actions',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './form-actions.component.html',
  styleUrl: './form-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormActionsComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
}
