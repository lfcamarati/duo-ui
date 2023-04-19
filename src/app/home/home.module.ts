import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {CommonModule} from '@angular/common'
import {PrimeNGModule} from '../prime-ng.module'

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, PrimeNGModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
