import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ResgateDetalheComponent } from './views/resgate/resgate-detalhe/resgate-detalhe.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'resgate-detalhe', component: ResgateDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
