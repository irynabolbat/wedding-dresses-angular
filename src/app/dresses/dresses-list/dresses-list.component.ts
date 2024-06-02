import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DressesService } from '../services/dresses.service';
import { DressesFirebaseService } from '../services/dressesFirebase.service';
import { RouterModule } from '@angular/router';
import { DressInterface } from '../types/dress.interface';
import { DressInCartInterface } from '../types/dressInCart.interface';

@Component({
  selector: 'dresses-list',
  templateUrl: './dresses-list.component.html',
  styleUrls: ['./dresses-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class DressesListComponent implements OnInit {
  dressesService = inject(DressesService);
  dressesFirebaseService = inject(DressesFirebaseService);

  currentPage: number = 1;
  itemsPerPage: number = 10;
  cart: DressInCartInterface[] = [];
  loading: any;

  ngOnInit() {
    if (this.isBrowser()) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      }
    }
  }

  get visibleDresses() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.dressesService.dressesSig().slice(startIndex, endIndex);
  }

  get totalPages() {
    const totalDresses = this.dressesService.dressesSig().length;
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalDresses / this.itemsPerPage); i++) {
      pages.push(i);
    }
    return pages;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  public addToCart(dress: DressInterface) {
    const existingDressIndex = this.cart.findIndex(
      (item) => item.id === dress.id
    );

    if (existingDressIndex !== -1) {
      this.cart[existingDressIndex].quantity++;
    } else {
      this.cart.push({
        id: dress.id,
        title: dress.title,
        image: dress.image_url_1,
        price: dress.price,
        quantity: 1,
      });
    }

    if (this.isBrowser()) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    alert(`${dress.title} has been added to cart!`);
  }

  private isBrowser(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    );
  }
}
