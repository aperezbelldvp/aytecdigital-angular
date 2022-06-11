import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderWebComponent } from './components/header-web/header-web.component';
import { FooterWebComponent } from './components/footer-web/footer-web.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardContactComponent } from './components/card-contact/card-contact.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderWebComponent,
    FooterWebComponent,
    CardListComponent,
    CardContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
