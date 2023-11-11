import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { SliderComponent } from './slider/slider.component';
import { Section1Component } from './section1/section1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NextComponent } from './next/next.component';
import { Section2Component } from './section2/section2.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    BrowserAnimationsModule,
    Section1Component,
    LoadingPageComponent,
    SliderComponent,
    NextComponent,
    
    Section2Component,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
