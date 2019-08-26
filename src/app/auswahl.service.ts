import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuswahlService {
  private items: BehaviorSubject<object[]> = new BehaviorSubject<object[]>([]);

  addToSelection(product: {}): void {
    const items = this.items.getValue();
    items.push(product);
    this.items.next(items);
  }

  getItems(): Observable<object[]> {
    return this.items.asObservable();
  }
}
