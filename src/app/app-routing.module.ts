import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ClientCreateComponent} from './client/components/client-create/client-create.component'
import {ClientDetailsComponent} from './client/components/client-details/client-details.component'
import {ClientListComponent} from './client/components/client-list/client-list.component'
import {DashboardComponent} from './home/components/dashboard/dashboard.component'
import {AuthGuardService} from './shared/services/authGuard.service'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },

  // Clients
  {
    path: 'clientes',
    component: ClientListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'clientes/novo',
    component: ClientCreateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'clientes/:id/editar',
    component: ClientCreateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'clientes/:id/detalhes',
    component: ClientDetailsComponent,
    canActivate: [AuthGuardService],
  },

  // NotFound
  // {path: '404', component: NotFoundComponent, canActivate: [AuthGuardService]},
  // {path: '**', redirectTo: '/404'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
