import {RouterModule, Routes} from "@angular/router";
import {ProjectComponent} from "./project/project.component";
import {DetailComponent} from "./detail/detail.component";
import {ComparisonComponent} from "./comparison/comparison.component";
const appRoutes: Routes = [
  {path: '', component: ProjectComponent, pathMatch: 'full'},
  {path: 'login', component: DetailComponent},
  {path: 'rules', component: ComparisonComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
