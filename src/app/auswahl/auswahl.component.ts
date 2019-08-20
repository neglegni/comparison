import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { AuswahlService } from '../auswahl.service';

@Component({
  selector: 'app-auswahl',
  templateUrl: './auswahl.component.html',
  styleUrls: ['./auswahl.component.css']
})
export class AuswahlComponent implements OnInit {

  constructor(
    private auswahlService: AuswahlService,
  ) { }

  product;
  products = products;

  select(product) {
    this.auswahlService.addToSelection(product);
  }

  ngOnInit() {
  }

}
