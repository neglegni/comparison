import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuswahlComponent } from './auswahl/auswahl.component';
import { AuswertungComponent } from './auswertung/auswertung.component';
import { TabelleEigenschaftenComponent } from './auswertung/tabelle-eigenschaften/tabelle-eigenschaften.component';
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    AuswahlComponent,
    AuswertungComponent,
    TabelleEigenschaftenComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
