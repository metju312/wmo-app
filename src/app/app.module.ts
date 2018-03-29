import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ProjectComponent} from './components/project/project.component';
import {DetailComponent} from './components/detail/detail.component';
import {ComparisonComponent} from './components/comparison/comparison.component';
import {ProjectDataStorage} from './services/projectDataStorage';
import {routing} from "./app.routing";
import {MaterialModule} from "./modules/material.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_CHECKBOX_CLICK_ACTION} from "@angular/material";
import {HelperComponent} from "./components/helper/helper.component";


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DetailComponent,
    ComparisonComponent,
    HelperComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    routing
  ],
  entryComponents: [
    HelperComponent
  ],

  providers: [
    ProjectDataStorage,
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
