import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormActionsComponent } from '../../../shared/component/form-actions/form-actions.component';
import { InputTextModule } from 'primeng/inputtext';
import { PageComponent } from '../../../shared/page/page.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { addHours } from 'date-fns';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createTask } from '../../state/task.actions';
import { CreateTask, Task } from '../../model/task';

@Component({
  selector: 'tare-task-create',
  standalone: true,
  imports: [
    CommonModule,
    FormActionsComponent,
    InputTextModule,
    PageComponent,
    InputTextareaModule,
    CalendarModule,
    DropdownModule,
    ReactiveFormsModule,
    ListboxModule,
    MultiSelectModule,
  ],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCreateComponent {
  readonly router = inject(Router);
  readonly store = inject(Store);

  readonly formGroup = new FormGroup({
    name: new FormControl<string | undefined>(undefined, [Validators.required]),
    start: new FormControl<Date>(new Date(), [Validators.required]),
    end: new FormControl<Date>(addHours(new Date(), 1), [Validators.required]),
    repeat: new FormControl<string[] | undefined>([]),
    category: new FormControl<number | undefined>(undefined),
    description: new FormControl<string | undefined>(undefined),
  });

  readonly categories$ = this.store.select((state) => state.categories);

  cancel(): void {
    void this.router.navigate(['/']);
  }

  save(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const task = {
      ...this.formGroup.value,
      interval: {
        start: this.formGroup.value.start!,
        end: this.formGroup.value.end!,
      },
    } as CreateTask;

    this.store.dispatch(
      createTask({
        task,
      }),
    );
  }
}
