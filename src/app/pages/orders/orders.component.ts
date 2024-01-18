import {Component, inject} from '@angular/core';
import {FormControlComponent} from "../../components/form-control/form-control.component";
import {DropdownComponent} from "../../components/dropdown/dropdown.component";
import {OrdersService} from "../../services/orders.service";
import {map, Observable} from "rxjs";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {OrderComponent} from "../../components/order/order.component";
import {Order} from "../../types/orders";
import {SearchComponent} from "../../components/icons/search/search.component";
import {DeleteComponent} from "../../components/icons/delete/delete.component";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    FormControlComponent,
    DropdownComponent,
    JsonPipe,
    AsyncPipe,
    OrderComponent,
    SearchComponent,
    DeleteComponent
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  ordersService = inject(OrdersService);

  orders$ = this.ordersService.getOrders();
}
