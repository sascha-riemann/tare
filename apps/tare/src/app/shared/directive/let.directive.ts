import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  appLet?: T;
}

@Directive({
  selector: '[appLet]',
  standalone: true,
})
export class LetDirective<T> {
  private _context: LetContext<T> = { appLet: undefined };

  constructor(
    private readonly viewContainer: ViewContainerRef,
    private readonly templateRef: TemplateRef<LetContext<T>>,
  ) {
    viewContainer.createEmbeddedView(templateRef, this._context);
  }

  @Input()
  set appLet(value: T) {
    this._context.appLet = value;
  }
}
