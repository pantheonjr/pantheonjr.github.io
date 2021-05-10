import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IndexComponent } from './index/index.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule,
    MdbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
