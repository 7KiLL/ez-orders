import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {IncomingOrderComponent} from "../icons/incoming-order/incoming-order.component";
import {OrderStatusEditModalComponent} from "../modals/order-status-edit-modal/order-status-edit-modal.component";
import {ReadyComponent} from "../icons/ready/ready.component";
import {PreparationComponent} from "../icons/preparation/preparation.component";
import {SentComponent} from "../icons/sent/sent.component";
import {CanceledComponent} from "../icons/canceled/canceled.component";
import {RefundComponent} from "../icons/refund/refund.component";

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.scss'
})
export class OrderStatusComponent implements AfterViewInit{
  @Input() statusId!: number;
  @ViewChild("iconRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;

  statusMap = {
    1: {
      color: "incoming",
      text: "Incoming order",
      icon: IncomingOrderComponent
    },
    2: {
      color: "preparation",
      text: "Preparation",
      icon: PreparationComponent
    },
    3: {
      color: "ready",
      text: "Ready",
      icon: ReadyComponent
    },
    4: {
      color: "sent",
      text: "Sent/Picked",
      icon: SentComponent
    },
    5: {
      color: "canceled",
      text: "Canceled",
      icon: CanceledComponent,
      isWhite: true,
    },
    6: {
      color: "refund",
      text: "Refund",
      icon: RefundComponent,
      isWhite: true,
    }
  } as Record<any, any>

  ngAfterViewInit() {
    // @ts-ignore
    this.vcr.createComponent(this.statusMap[this.statusId].icon)
  }
}
