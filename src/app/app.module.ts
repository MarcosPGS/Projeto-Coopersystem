import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './core/template/template.module';
import { HomeComponent } from './views/home/home.component';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { ResgateModule } from './views/resgate/resgate.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TemplateModule,
    NgBrazil,
    TextMaskModule,
    ResgateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
