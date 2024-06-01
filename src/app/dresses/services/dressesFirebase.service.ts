import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { DressInterface } from '../types/dress.interface';

@Injectable({ providedIn: 'root' })
export class DressesFirebaseService {
  firestore = inject(Firestore);
  dressesCollection = collection(this.firestore, 'collection');

  getDresses(): Observable<DressInterface[]> {
    return collectionData(this.dressesCollection, {
      idField: 'id',
    }) as Observable<DressInterface[]>;
  }
}
