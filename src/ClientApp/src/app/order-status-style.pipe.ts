import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatusStyle'
})
export class OrderStatusStylePipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 0:
        return "bg-danger";
      case 1:
        return "bg-success"
      default:
        return "bg-dark";
    }
  }

}
