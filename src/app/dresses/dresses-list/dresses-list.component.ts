import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DressesService } from '../services/dresses.service';
import { DressesFirebaseService } from '../services/dressesFirebase.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dresses-list',
  templateUrl: './dresses-list.component.html',
  styleUrls: ['./dresses-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class DressesListComponent {
  dressesService = inject(DressesService);
  dressesFirebaseService = inject(DressesFirebaseService);

  currentPage: number = 1;
  itemsPerPage: number = 10;

  get visibleDresses() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    console.log(this.dressesService.dressesSig().slice(startIndex, endIndex));
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
}
