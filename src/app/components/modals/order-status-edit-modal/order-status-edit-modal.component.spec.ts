import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusEditModalComponent } from './order-status-edit-modal.component';

describe('OrderStatusEditModalComponent', () => {
  let component: OrderStatusEditModalComponent;
  let fixture: ComponentFixture<OrderStatusEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderStatusEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderStatusEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
