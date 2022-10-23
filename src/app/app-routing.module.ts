import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './view/client/client-create/client-create.component';
import { ClientListComponent } from './view/client/client-list/client-list.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ClientpfCreateComponent } from './view/client/clientpf/clientpf-create/clientpf-create.component';
import { ClientpjCreateComponent } from './view/client/clientpj/clientpj-create/clientpj-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'clientes', component: ClientListComponent },
  { path: 'clientes/novo', component: ClientCreateComponent, children: [
    { path: 'pf', component: ClientpfCreateComponent },
    { path: 'pj', component: ClientpjCreateComponent }
  ] },
  { path: 'clientes-pf/editar/:id', component: ClientpfCreateComponent },
  { path: 'clientes-pj/editar/:id', component: ClientpjCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
