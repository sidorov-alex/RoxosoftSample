import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient) { }

  getList(): Observable<Order[]> {
    return this.http.get<RequestResult>('api/order')

      .pipe(map(data => {

        if (data.status == 'ok')
          return data.result as Order[]
        else
          throwError(data.message);

      }));
  }

  getOrderEntries(id: number): Observable<OrderEntry[]> {
    return this.http.get<RequestResult>('api/order/' + id + '/entries')
      .pipe(map(data => {

        if (data.status == 'ok')
          return data.result as OrderEntry[];
        else
          throwError(data.message);

      }));
  }
}

class RequestResult {
  status: string;
  message: string;
  result: any;
}

export class Order {
  id: number;
  dateTime: Date;
  status: number;
}

export class OrderEntry {
  id: number;
  productName: string;
  quantity: number;
  price: number;
}

export class OrderDetails {
  id: number;
  dateTime: Date;
  status: number;
  entries: OrderEntry[];
}
