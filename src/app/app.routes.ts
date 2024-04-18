import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";

export const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    loadChildren : () => import('../app/pages/main/main.routes').then((r) => r.MainRoutes),
  }
];
