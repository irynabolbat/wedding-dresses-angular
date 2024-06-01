import { Component, OnInit, inject } from '@angular/core';
import { DressesFirebaseService } from './services/dressesFirebase.service';
import { DressesService } from './services/dresses.service';
import { CommonModule, NgFor } from '@angular/common';
import { DressesListComponent } from './dresses-list/dresses-list.component';

@Component({
  selector: 'dresses',
  standalone: true,
  imports: [CommonModule, NgFor, DressesListComponent],
  templateUrl: 'dresses.component.html',
  styleUrl: 'dresses.component.scss',
})
export class DressesComponent implements OnInit {
  dressesService = inject(DressesService);
  dressesFirebaseService = inject(DressesFirebaseService);

  ngOnInit(): void {
    this.dressesFirebaseService.getDresses().subscribe((dresses) => {
      this.dressesService.dressesSig.set(dresses);
    });
  }
}
