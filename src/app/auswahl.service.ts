import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuswahlService {
  items = [];

  constructor() { }

  addToAuswahl(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearAuswahl() {
    this.items = [];
    return this.items;
  }

}
