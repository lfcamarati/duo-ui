import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ClientService} from '../client/services/client.service'
import {ServiceService} from './services/service.service'
import {SocialMediaManagementService} from './services/socialMediaManagement.service'
import {UserService} from './services/user.service'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    ClientService,
    ServiceService,
    SocialMediaManagementService,
    UserService,
  ],
})
export class CoreModule {}
