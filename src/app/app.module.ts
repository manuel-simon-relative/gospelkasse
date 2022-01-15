import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookinglistComponent } from './_template/bookinglist/bookinglist.component';

import {MatTabsModule} from '@angular/material/tabs';
import { ExportsComponent } from './_template/exports/exports.component';

@NgModule({
  declarations: [
    AppComponent,
    BookinglistComponent,
    ExportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
