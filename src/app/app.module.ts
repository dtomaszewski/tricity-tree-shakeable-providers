import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TricityOldService } from './shared/tricity-old.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [TricityOldService]
})
export class AppModule { }
