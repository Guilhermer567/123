import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { RecomendationComponent } from './recomendation/recomendation.component';

@NgModule({
  declarations: [
    AppComponent,
    RecomendationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
