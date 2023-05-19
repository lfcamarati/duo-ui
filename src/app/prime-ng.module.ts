import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {BadgeModule} from 'primeng/badge'
import {BlockUIModule} from 'primeng/blockui'
import {ButtonModule} from 'primeng/button'
import {CalendarModule} from 'primeng/calendar'
import {CardModule} from 'primeng/card'
import {DividerModule} from 'primeng/divider'
import {InputMaskModule} from 'primeng/inputmask'
import {InputNumberModule} from 'primeng/inputnumber'
import {InputTextModule} from 'primeng/inputtext'
import {InputTextareaModule} from 'primeng/inputtextarea'
import {MessagesModule} from 'primeng/messages'
import {MultiSelectModule} from 'primeng/multiselect'
import {ProgressSpinnerModule} from 'primeng/progressspinner'
import {SelectButtonModule} from 'primeng/selectbutton'
import {SplitButtonModule} from 'primeng/splitbutton'
import {TableModule} from 'primeng/table'
import {TabViewModule} from 'primeng/tabview'
import {ToastModule} from 'primeng/toast'

const modules = [
  CommonModule,
  ButtonModule,
  CardModule,
  TableModule,
  InputTextModule,
  DividerModule,
  SelectButtonModule,
  InputMaskModule,
  ToastModule,
  InputNumberModule,
  InputTextareaModule,
  TabViewModule,
  BlockUIModule,
  BadgeModule,
  SplitButtonModule,
  ProgressSpinnerModule,
  MessagesModule,
  MultiSelectModule,
  CalendarModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class PrimeNGModule {}
