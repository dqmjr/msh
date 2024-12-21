import {RouterModule, Routes} from '@angular/router';
import {MshComponent} from './msh/msh.component';
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: MshComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
