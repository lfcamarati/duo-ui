import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ClientCreateComponent} from './client/components/client-create/client-create.component'
import {ClientDetailsComponent} from './client/components/client-details/client-details.component'
import {ClientListComponent} from './client/components/client-list/client-list.component'
import {DashboardComponent} from './home/components/dashboard/dashboard.component'
import {NotFoundComponent} from './layout/components/not-found/not-found.component'
import {ServiceCreateComponent} from './service/components/service-create/service-create.component'
import {ServiceListComponent} from './service/components/service-list/service-list.component'
import {SocialMediaManagementCreateComponent} from './service/components/social-media-management-create/social-media-management-create.component'
import {AuthGuard} from './shared/http/routes/guard/AuthGuard'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent, canActivate: [AuthGuard]},

  // Clients
  {path: 'clientes', component: ClientListComponent, canActivate: [AuthGuard]},
  {
    path: 'clientes/novo',
    component: ClientCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clientes/:id/editar',
    component: ClientCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clientes/:id/detalhes',
    component: ClientDetailsComponent,
    canActivate: [AuthGuard],
  },

  // Services
  {path: 'servicos', component: ServiceListComponent, canActivate: [AuthGuard]},
  {
    path: 'servicos/novo',
    component: ServiceCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'servicos/editar/:id',
    component: ServiceCreateComponent,
    canActivate: [AuthGuard],
  },

  // Social Media Management
  {
    path: 'gestao-rede-social/novo',
    component: SocialMediaManagementCreateComponent,
    canActivate: [AuthGuard],
  },

  // NotFound
  {path: '404', component: NotFoundComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/404'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
