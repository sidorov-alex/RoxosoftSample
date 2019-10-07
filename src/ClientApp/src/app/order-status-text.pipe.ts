import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs/operators';

@Pipe({
  name: 'orderStatusText'
})
export class OrderStatusTextPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 0:
        return "In progress";
      case 1:
        return "Completed"
      default:
        return "Unknown";
    }
  }

}
