import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { DressInCartInterface } from '../dresses/types/dressInCart.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CommonModule, RouterModule, NgForOf],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public dressesInCart: DressInCartInterface[] = [
    {
      id: '1',
      title: 'Red Dress',
      price: 49.99,
      quantity: 1,
      image: 'assets/red-dress.jpg',
    },
    {
      id: '2',
      title: 'Blue Dress',
      price: 59.99,
      quantity: 1,
      image: 'assets/blue-dress.jpg',
    },
  ];

  public decreaseQuantity(dress: DressInCartInterface) {
    if (dress.quantity > 1) {
      dress.quantity--;
    }
  }

  public increaseQuantity(dress: DressInCartInterface) {
    dress.quantity++;
  }

  public getTotalPrice(): number {
    return this.dressesInCart.reduce(
      (total, dress) => total + dress.price * dress.quantity,
      0
    );
  }

  public submitOrder() {
    alert('Thank you for your order!');
  }
}
