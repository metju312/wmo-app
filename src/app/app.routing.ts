import {RouterModule, Routes} from "@angular/router";
import {ProjectComponent} from "./project/project.component";
import {DetailComponent} from "./detail/detail.component";
import {ComparisonComponent} from "./comparison/comparison.component";
const appRoutes: Routes = [
  {path: '', component: ProjectComponent, pathMatch: 'full'},
  {path: 'detail', component: DetailComponent},
  {path: 'comparison', component: ComparisonComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
