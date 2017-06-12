import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogModule } from './log.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
