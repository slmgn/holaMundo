import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EtiquetaPipe } from './etiqueta.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogosComponent } from './dialogos/dialogos.component';

@NgModule({
  declarations: [
    AppComponent,
    EtiquetaPipe,
    DialogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
