import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderWebComponent } from './components/header-web/header-web.component';
import { FooterWebComponent } from './components/footer-web/footer-web.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderWebComponent,
    FooterWebComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
