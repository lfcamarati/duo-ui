import {CommonModule} from '@angular/common'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {AuthModule} from '../auth/auth.module'
import {PrimeNGModule} from '../prime-ng.module'
import {NotFoundComponent} from './components/not-found/not-found.component'
import {SidebarComponent} from './components/sidebar/sidebar.component'
import {TopbarComponent} from './components/topbar/topbar.component'

@NgModule({
  declarations: [TopbarComponent, SidebarComponent, NotFoundComponent],
  imports: [CommonModule, ReactiveFormsModule, PrimeNGModule, AuthModule],
  exports: [TopbarComponent, SidebarComponent, NotFoundComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {}
