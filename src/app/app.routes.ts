import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DressesComponent } from './dresses/dresses.component';
import { EmptyPage } from './components/empty-route/empty-route.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dresses-list',
    pathMatch: 'full',
  },
  {
    path: 'dresses-list',
    component: DressesComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    component: EmptyPage,
  },
];
