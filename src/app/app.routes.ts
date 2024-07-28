import { Routes } from '@angular/router';
import { UserComponent } from './features/user/user.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { OrderComponent } from './features/order/order.component';
import { ProductComponent } from './features/product/product.component';

export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order', component: OrderComponent },
  { path: 'product', component: ProductComponent },
];
