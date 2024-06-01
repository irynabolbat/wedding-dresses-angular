import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { DressInterface } from '../types/dress.interface';

@Injectable({
  providedIn: 'root',
})
export class DressesService {
  dressesSig = signal<DressInterface[]>([]);
}
