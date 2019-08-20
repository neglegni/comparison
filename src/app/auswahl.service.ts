import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuswahlService {
  items = [];

  constructor() { }

  addToSelection(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearSelecction() {
    this.items = [];
    return this.items;
  }

}
