import { Routes } from '@angular/router';
import { DressesListComponent } from './dresses/dresses-list/dresses-list.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dresses-list',
    pathMatch: 'full',
  },
  {
    path: 'dresses-list',
    component: DressesListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
