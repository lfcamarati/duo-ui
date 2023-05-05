import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {CnpjPipe} from './pipe/cnpj.pipe'
import {CpfPipe} from './pipe/cpf.pipe'
import {CpfCnpjPipe} from './pipe/cpfCnpj.pipe'
import {PhonePipe} from './pipe/phone.pipe'
import {AuthGuardService} from './services/authGuard.service'
import {MessagesService} from './services/messages.service'
import {OverlayService} from './services/overlay.service'
import {UserService} from './services/user.service'

@NgModule({
  declarations: [CnpjPipe, CpfPipe, CpfCnpjPipe, PhonePipe],
  imports: [CommonModule],
  providers: [AuthGuardService, MessagesService, OverlayService, UserService],
  exports: [CnpjPipe, CpfPipe, CpfCnpjPipe, PhonePipe],
})
export class SharedModule {}
