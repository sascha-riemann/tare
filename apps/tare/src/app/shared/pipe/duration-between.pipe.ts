import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationBetween',
  standalone: true,
})
export class DurationBetweenPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
