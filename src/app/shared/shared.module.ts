import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {MessagesModule} from './messages/messages.module'
import {CnpjPipe} from './pipe/cnpj.pipe'
import {CpfPipe} from './pipe/cpf.pipe'
import {CpfCnpjPipe} from './pipe/cpfCnpj.pipe'
import {PhonePipe} from './pipe/phone.pipe'
import {AuthGuardService} from './services/authGuard.service'
import {OverlayService} from './services/overlay.service'
import {UserService} from './services/user.service'

@NgModule({
  declarations: [CpfPipe, CnpjPipe, CpfCnpjPipe, PhonePipe],
  imports: [CommonModule, MessagesModule],
  providers: [AuthGuardService, OverlayService, UserService],
  exports: [CpfPipe, CnpjPipe, CpfCnpjPipe, PhonePipe],
})
export class SharedModule {}
