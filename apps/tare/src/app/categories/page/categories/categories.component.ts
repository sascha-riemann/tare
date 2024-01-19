import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { PageComponent } from '../../../shared/page/page.component';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { LetDirective } from '../../../shared/directive/let.directive';

@Component({
  selector: 'tare-categories',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    ButtonModule,
    RouterLink,
    LetDirective,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  private readonly store = inject(Store);

  readonly categories$ = this.store.select((state) => state.categories);
}
