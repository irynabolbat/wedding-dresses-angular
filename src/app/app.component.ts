import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DressesComponent } from './dresses/dresses.component';
import { DressesListComponent } from './dresses/dresses-list/dresses-list.component';
import { CartComponent } from './cart/cart.component';
import { EmptyPage } from './components/empty-route/empty-route.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    DressesComponent,
    DressesListComponent,
    CartComponent,
    EmptyPage,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
