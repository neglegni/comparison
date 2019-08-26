import { Component  } from '@angular/core';
import { AuswahlService} from '../auswahl.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-auswertung',
  templateUrl: './auswertung.component.html',
  styleUrls: ['./auswertung.component.css']
})
export class AuswertungComponent {
  listData: Observable<object[]>;
  displayedColumns: string[] = ['Name', 'Zoll', 'Prozessor', 'RAM', 'Preis'];

  constructor(
    private auswahlService: AuswahlService,
  ) {
    this.listData = this.auswahlService.getItems();
  }
}
