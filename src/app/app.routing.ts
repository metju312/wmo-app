import {RouterModule, Routes} from "@angular/router";
import {ProjectComponent} from "./components/project/project.component";
import {DetailComponent} from "./components/detail/detail.component";
import {ComparisonComponent} from "./components/comparison/comparison.component";
const appRoutes: Routes = [
  {path: '', component: ProjectComponent, pathMatch: 'full'},
  {path: 'detail', component: DetailComponent},
  {path: 'comparison', component: ComparisonComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
