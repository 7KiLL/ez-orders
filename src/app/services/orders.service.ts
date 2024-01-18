import { Injectable } from '@angular/core';
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {Order} from "../types/orders";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  getOrders() {
    return fromPromise(import('../biteOrders.json').then(m => m.default)) as unknown as Observable<Order[]>
  }
}
