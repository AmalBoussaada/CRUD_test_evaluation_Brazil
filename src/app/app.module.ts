import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import {RouterModule,Routes} from '@angular/router';
import { Screen4Component } from './screen4/screen4.component';

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'screen3',component:Screen3Component},
      {path:'screen4',component:Screen4Component},
      {path:'screen1',component:Screen1Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule{ 
}
