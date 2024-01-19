import { Pipe, PipeTransform } from '@angular/core';
import { differenceInMilliseconds } from 'date-fns';

@Pipe({
  name: 'intervalWidth',
  standalone: true,
})
export class IntervalWidthPipe implements PipeTransform {
  transform(interval: Interval, compare: Interval): unknown {
    const intervalDuration = differenceInMilliseconds(
      interval.start,
      interval.end,
    );
    const compareDuration = differenceInMilliseconds(
      compare.start,
      compare.end,
    );
    return `${(intervalDuration / compareDuration) * 100}%`;
  }
}
