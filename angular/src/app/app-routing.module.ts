import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent

  },
  {
    path: 'result',
    loadChildren: () => import('./result-screen/result-screen.module').then(m => m.ResultScreenModule)
  },
  {
    path: '**', pathMatch: 'full',
    component: PagenotfoundComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }