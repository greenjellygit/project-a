import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LayoutLibModule} from '@jelly/layout-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
