import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DressInCartInterface } from '../dresses/types/dressInCart.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public dressesInCart: DressInCartInterface[] = [];

  ngOnInit() {
    if (this.isBrowser()) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.dressesInCart = JSON.parse(storedCart);
      }
    }
  }

  public decreaseQuantity(dress: DressInCartInterface) {
    if (dress.quantity > 1) {
      dress.quantity--;
      this.updateCartInStorage();
    }
  }

  public increaseQuantity(dress: DressInCartInterface) {
    dress.quantity++;
    this.updateCartInStorage();
  }

  public getTotalPrice(): number {
    return this.dressesInCart.reduce(
      (total, dress) => total + dress.price * dress.quantity,
      0
    );
  }

  public submitOrder() {
    alert('Thank you for your order!');
    if (this.isBrowser()) {
      localStorage.removeItem('cart');
    }
    this.dressesInCart = [];
  }

  private updateCartInStorage() {
    if (this.isBrowser()) {
      localStorage.setItem('cart', JSON.stringify(this.dressesInCart));
    }
  }

  private isBrowser(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    );
  }

  public removeFromCart(id: string) {
    const index = this.dressesInCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const removedItem = this.dressesInCart.splice(index, 1)[0];
      this.updateCartInStorage();
      alert(`${removedItem.title} has been removed from the cart!`);
    }
  }

  public clearCart() {
    this.dressesInCart = [];
    if (this.isBrowser()) {
      localStorage.removeItem('cart');
    }
    alert(`Cart has been cleared!`);
  }
}
