import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutComponent} from "./layout/layout.component";
import {SharedModule} from "./shared/shared.module";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
