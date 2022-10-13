import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './view/clientes/cliente-create/cliente-create.component';
import { ClientesListComponent } from './view/clientes/clientes-list/clientes-list.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'clientes', component: ClientesListComponent },
  { path: 'clientes/create', component: ClienteCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
