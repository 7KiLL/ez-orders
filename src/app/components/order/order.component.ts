import {
  AfterViewInit,
  Component,
  computed,
  inject,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Order} from "../../types/orders";
import {DeleteComponent} from "../icons/delete/delete.component";
import {DeliveryComponent} from "../icons/delivery/delivery.component";
import {CurrencyPipe, DatePipe, NgClass} from "@angular/common";
import {InHouseComponent} from "../icons/in-house/in-house.component";
import {LocationComponent} from "../icons/location/location.component";
import {TimeComponent} from "../icons/time/time.component";
import {TimePipe} from "../../time.pipe";
import {ReadyComponent} from "../icons/ready/ready.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderStatusEditModalComponent} from "../modals/order-status-edit-modal/order-status-edit-modal.component";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    DeleteComponent,
    DeliveryComponent,
    NgClass,
    LocationComponent,
    TimeComponent,
    DatePipe,
    TimePipe,
    ReadyComponent,
    CurrencyPipe
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit, AfterViewInit {
  modalService = inject(NgbModal)

  @ViewChild("deliveryIconRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @Input() data!: Order;
  @Input() checked = false;
  expanded = false
  orderStatus = computed(() => {
    // Also should set icon dynamically for order status label
    return {
      color: this.data.OrderStatusId === 1 ? 'text-bg-success' : 'text-bg-danger',
      text: this.data.OrderStatusId === 1 ? 'Ready' : 'Canceled'
    }
  })


  ngOnInit() {
  }
  ngAfterViewInit() {
    const iconMap = {
      1: DeliveryComponent,
      2: InHouseComponent
    } as Record<number, any>

    const statusId = this.data.OrderStatusId;
    const icon = iconMap[statusId] ?? DeliveryComponent;

    this.vcr.createComponent(icon);

  }

  handleExpand() {
    this.expanded = !this.expanded;
  }

  handleStatusClick($event: Event) {
    $event.stopPropagation();
    this.modalService.open(OrderStatusEditModalComponent, {
      centered: true
    });
  }
}
