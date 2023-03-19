import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './view/client/client-create/client-create.component';
import { ClientListComponent } from './view/client/client-list/client-list.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ServiceListComponent } from './view/service/service-list/service-list.component';
import { ServiceCreateComponent } from './view/service/service-create/service-create.component';
import { ClientDetailsComponent } from './view/client/client-details/client-details.component';
import { AuthGuard } from './infra/http/routes/guard/AuthGuard';
import { LoginComponent } from './view/user/login/login.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { SocialMediaManagementCreateComponent } from './view/service/social-media-management-create/social-media-management-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },

  // User
  { path: 'login', component: LoginComponent },
  
  // Clients
  { path: 'clientes', component: ClientListComponent, canActivate: [AuthGuard] },
  { path: 'clientes/novo', component: ClientCreateComponent, canActivate: [AuthGuard] },
  { path: 'clientes/:id/editar', component: ClientCreateComponent, canActivate: [AuthGuard] },
  { path: 'clientes/:id/detalhes', component: ClientDetailsComponent, canActivate: [AuthGuard] },

  // Services
  { path: 'servicos', component: ServiceListComponent, canActivate: [AuthGuard] },
  { path: 'servicos/novo', component: ServiceCreateComponent, canActivate: [AuthGuard] },
  { path: 'servicos/editar/:id', component: ServiceCreateComponent, canActivate: [AuthGuard] },

  // Social Media Management
  { path: 'gestao-rede-social/novo', component: SocialMediaManagementCreateComponent, canActivate: [AuthGuard] },

  // Not Found
  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
