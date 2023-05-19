import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {MessageService} from 'primeng/api'
import {MessagesService} from './services/messages.service'
import {MessagesEffects} from './store/effects'
import {reducers} from './store/reducers'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('messages', reducers),
    EffectsModule.forFeature([MessagesEffects]),
  ],
  providers: [MessagesService, MessageService],
})
export class MessagesModule {}
