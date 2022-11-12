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
import { AuthGuard } from './infra/http/routes/guard/AuthGuard';
import { LoginComponent } from './view/user/login/login.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },

  // User
  { path: 'login', component: LoginComponent },
  
  // Clients
  { path: 'clientes', component: ClientListComponent, canActivate: [AuthGuard] },
  { path: 'clientes/novo', component: ClientCreateComponent, canActivate: [AuthGuard], children: [
    { path: 'pf', component: ClientpfCreateComponent, canActivate: [AuthGuard] },
    { path: 'pj', component: ClientpjCreateComponent, canActivate: [AuthGuard] }
  ] },
  { path: 'clientes/:id/editar', component: ClientEditComponent, canActivate: [AuthGuard], children: [
    { path: 'pf', component: ClientpfCreateComponent, canActivate: [AuthGuard] },
    { path: 'pj', component: ClientpjCreateComponent, canActivate: [AuthGuard] }
  ] },
  { path: 'clientes/:id', component: ClientDetailsComponent, canActivate: [AuthGuard], children: [
    { path: 'detalhes/pf', component: ClientpfDetailsComponent, canActivate: [AuthGuard] },
    { path: 'detalhes/pj', component: ClientpjDetailsComponent, canActivate: [AuthGuard] }
  ] },

  // Contracts
  // { path: 'contracts', component: ContractCreateComponent, canActivate: [AuthGuard] },

  // Services
  { path: 'servicos', component: ServiceListComponent, canActivate: [AuthGuard] },
  { path: 'servicos/novo', component: ServiceCreateComponent, canActivate: [AuthGuard] },
  { path: 'servicos/editar/:id', component: ServiceCreateComponent, canActivate: [AuthGuard] },

  // Not Found
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
