import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './view/client/client-create/client-create.component';
import { ClientListComponent } from './view/client/client-list/client-list.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ClientpfCreateComponent } from './view/client/clientpf/clientpf-create/clientpf-create.component';
import { ClientpjCreateComponent } from './view/client/clientpj/clientpj-create/clientpj-create.component';
import { ClientEditComponent } from './view/client/client-edit/client-edit.component';
import { ServiceListComponent } from './view/service/service-list/service-list.component';
import { ServiceCreateComponent } from './view/service/service-create/service-create.component';
import { ClientDetailsComponent } from './view/client/client-details/client-details.component';
import { ClientpfDetailsComponent } from './view/client/clientpf/clientpf-details/clientpf-details.component';
import { ClientpjDetailsComponent } from './view/client/clientpj/clientpj-details/clientpj-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  
  // Clients
  { path: 'clientes', component: ClientListComponent },
  { path: 'clientes/novo', component: ClientCreateComponent, children: [
    { path: 'pf', component: ClientpfCreateComponent },
    { path: 'pj', component: ClientpjCreateComponent }
  ] },
  { path: 'clientes/editar', component: ClientEditComponent, children: [
    { path: 'pf/:id', component: ClientpfCreateComponent },
    { path: 'pj/:id', component: ClientpjCreateComponent }
  ] },
  { path: 'clientes/detalhes', component: ClientDetailsComponent, children: [
    { path: 'pf/:id', component: ClientpfDetailsComponent },
    { path: 'pj/:id', component: ClientpjDetailsComponent }
  ] },

  // Services
  { path: 'servicos', component: ServiceListComponent },
  { path: 'servicos/novo', component: ServiceCreateComponent },
  { path: 'servicos/editar/:id', component: ServiceCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
