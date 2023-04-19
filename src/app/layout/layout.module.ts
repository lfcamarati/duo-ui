import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PrimeNGModule} from '../prime-ng.module'
import {ReactiveFormsModule} from '@angular/forms'
import {TopbarComponent} from './components/topbar/topbar.component'
import {SidebarComponent} from './components/sidebar/sidebar.component'
import {NotFoundComponent} from './components/not-found/not-found.component'
import {AuthModule} from '../auth/auth.module'

@NgModule({
  declarations: [TopbarComponent, SidebarComponent, NotFoundComponent],
  imports: [CommonModule, ReactiveFormsModule, PrimeNGModule, AuthModule],
  exports: [TopbarComponent, SidebarComponent, NotFoundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {}
