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

  ngOnInit() {
    // this.refreshList();

  }

  refreshList() {
    const dummyData = [{
        name: 'Dell XPS 15',
        description: 'Leistungsstarkes Notebook von Dell',
        zoll: '15',
        prozessor: 'i7',
        ram: '16',
        preis: '1600€'
      },
      {
        name: 'Dell Inspiron 13',
        description: 'Leistungsstarkes Notebook von Dell',
        zoll: '13',
        prozessor: 'i5',
        ram: '16',
        preis: '1400€'
      },
      {
        name: 'Surface Pro4',
        description: 'Leistungsstarkes 2 in 1 Convertible von Microsoft ',
        zoll: '13',
        prozessor: 'i5',
        ram: '8',
        preis: '900€'
      },
      {
        name: 'MacbookAir 13',
        description: 'Leistungsstarkes 2 in 1 Convertible von Microsoft ',
        zoll: '13',
        prozessor: 'i7',
        ram: '8',
        preis: '1700€'
      },
    ];

    this.listData = new MatTableDataSource(dummyData);
  }
}
