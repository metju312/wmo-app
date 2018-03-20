import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { DetailComponent } from './components/detail/detail.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import {routing} from "./app.routing";
import {MaterialModule} from "./modules/material.module";


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
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
