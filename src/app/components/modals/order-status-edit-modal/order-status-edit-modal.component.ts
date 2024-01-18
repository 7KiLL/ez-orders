import {Component, inject} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderStatusComponent} from "../../order-status/order-status.component";

@Component({
  selector: 'app-order-status-edit-modal',
  standalone: true,
  imports: [
    OrderStatusComponent
  ],
  templateUrl: './order-status-edit-modal.component.html',
  styleUrl: './order-status-edit-modal.component.scss'
})
export class OrderStatusEditModalComponent {
  modalInstance = inject(NgbActiveModal)


  handleClose() {
    this.modalInstance.close();
  }
}
