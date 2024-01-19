import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {
  addDays,
  endOfDay,
  isAfter,
  isBefore,
  isWithinInterval,
  startOfDay,
  subDays,
} from 'date-fns';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChipModule } from 'primeng/chip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';
import { PageComponent } from '../../../shared/page/page.component';
import { MOCK_DATA } from '../../../mock/test';
import { LetDirective } from '../../../shared/directive/let.directive';
import { RippleModule } from 'primeng/ripple';
import { IntervalWidthPipe } from '../../../shared/pipe/intervalWidth.pipe';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../../task/model/task';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'tare-overview',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ProgressBarModule,
    ChipModule,
    ProgressSpinnerModule,
    ImageModule,
    TagModule,
    DividerModule,
    RouterLink,
    PageComponent,
    LetDirective,
    RippleModule,
    IntervalWidthPipe,
    MenuModule,
    ReactiveFormsModule,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  private readonly store = inject(Store);

  readonly currentDate$ = new BehaviorSubject(new Date());

  readonly tasks$: Observable<Task[]> = this.currentDate$.pipe(
    switchMap(() =>
      this.store.select((state) => {
        let tasks = state.tasks as Task[];
        tasks = tasks.map((task) => ({
          ...task,
          interval: {
            start: new Date(task.interval.start),
            end: new Date(task.interval.end),
          },
        }));
        return tasks.filter(
          (task) =>
            isAfter(task.interval.start, startOfDay(new Date())) &&
            isBefore(task.interval.start, endOfDay(new Date())),
        );
      }),
    ),
  );

  readonly currentTask$ = this.tasks$.pipe(
    map((tasks) =>
      tasks.find((task) => isWithinInterval(new Date(), task.interval)),
    ),
  );

  menuItems: MenuItem[] = [
    {
      label: 'Tasks',
      routerLink: 'task/create',
    },
    {
      label: 'Categories',
      routerLink: 'categories',
    },
  ];

  previousDay() {
    this.currentDate$.next(subDays(this.currentDate$.value, 1));
  }

  nextDay() {
    this.currentDate$.next(addDays(this.currentDate$.value, 1));
  }
}
