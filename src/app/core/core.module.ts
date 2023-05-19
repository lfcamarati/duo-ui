import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ClientService} from '../client/services/client.service'
import {ServiceService} from '../service/services/service.service'
import {UserService} from '../shared/services/user.service'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ClientService, ServiceService, UserService],
})
export class CoreModule {}
