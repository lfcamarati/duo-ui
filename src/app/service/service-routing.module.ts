import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AuthGuardService} from '../shared/services/authGuard.service'
import {ServiceCreateComponent} from './components/service-create/service-create.component'
import {ServiceListComponent} from './components/service-list/service-list.component'
import {ServiceRegisterComponent} from './components/service-register/service-register.component'
import {ServiceComponent} from './service.component'

const routes: Routes = [
  {
    path: 'servicos',
    component: ServiceComponent,
    children: [
      {
        path: '',
        component: ServiceListComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'registrar',
        component: ServiceRegisterComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'novo',
        component: ServiceCreateComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'editar/:id',
        component: ServiceCreateComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
