import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { DetailComponent } from './detail/detail.component';
import { ComparisonComponent } from './comparison/comparison.component';
import {routing} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DetailComponent,
    ComparisonComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
