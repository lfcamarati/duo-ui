import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {LoginComponent} from './components/login/login.component'

const routes = [{path: 'login', component: LoginComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
