import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../../shared/page/page.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormActionsComponent } from '../../../shared/component/form-actions/form-actions.component';
import { ColorPickerModule } from 'primeng/colorpicker';
import { COLORS } from '../../../shared/data/colors';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { categoryCreate } from '../../state/category.actions';

@Component({
  selector: 'tare-category',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    InputTextModule,
    FormActionsComponent,
    ColorPickerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  colors = COLORS;

  readonly router = inject(Router);
  readonly store = inject(Store);

  readonly form = new FormGroup({
    name: new FormControl<string | undefined>(undefined, Validators.required),
    color: new FormControl<string | undefined>('#F00'),
  });

  save(): void {
    if (this.form.valid) {
      const category = this.form.value as { name: string; color: string };
      this.store.dispatch(
        categoryCreate({
          category,
        }),
      );
      void this.router.navigate(['/categories']);
    }
  }

  cancel(): void {
    void this.router.navigate(['/']);
  }
}
