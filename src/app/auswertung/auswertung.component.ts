import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { AuswahlService} from '../auswahl.service';
import { MatTableDataSource } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { variable } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-auswertung',
  templateUrl: './auswertung.component.html',
  styleUrls: ['./auswertung.component.css']
})
export class AuswertungComponent implements OnInit {

  items;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Name', 'Zoll', 'Prozessor', 'RAM', 'Preis'];

  constructor(
    private auswahlService: AuswahlService,
  ) {
    this.items = this.auswahlService.getItems();
    this.listData = new MatTableDataSource(this.auswahlService.getItems());
    }

  ngOnInit() {}
}
