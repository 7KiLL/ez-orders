import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./pages/orders/orders.component').then(c => c.OrdersComponent)}
];
