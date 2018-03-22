import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { DetailComponent } from './components/detail/detail.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import {routing} from "./app.routing";
import {MaterialModule} from "./modules/material.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DetailComponent,
    ComparisonComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
