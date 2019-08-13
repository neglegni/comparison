import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { AuswahlService} from '../auswahl.service';

@Component({
  selector: 'app-auswertung',
  templateUrl: './auswertung.component.html',
  styleUrls: ['./auswertung.component.css']
})
export class AuswertungComponent implements OnInit {

  items;

  constructor(
    private auswahlService: AuswahlService,
  ) {
    this.items = this.auswahlService.getItems();
   }

  ngOnInit() {
  }

}
