import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuswahlComponent } from './auswahl/auswahl.component';
import { AuswertungComponent } from './auswertung/auswertung.component';
import { ProdukteComponent } from './auswahl/produkte/produkte.component';
import { AusgewaehlteProdukteComponent } from './auswertung/ausgewaehlte-produkte/ausgewaehlte-produkte.component';
import { TabelleEigenschaftenComponent } from './auswertung/tabelle-eigenschaften/tabelle-eigenschaften.component';

@NgModule({
  declarations: [
    AppComponent,
    AuswahlComponent,
    AuswertungComponent,
    ProdukteComponent,
    AusgewaehlteProdukteComponent,
    TabelleEigenschaftenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
