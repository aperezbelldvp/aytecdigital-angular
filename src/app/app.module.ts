import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderWebComponent } from './components/header-web/header-web.component';
import { FooterWebComponent } from './components/footer-web/footer-web.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderWebComponent,
    FooterWebComponent,
    CardListComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardBodyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
