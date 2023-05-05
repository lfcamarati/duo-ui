import {Component, OnInit} from '@angular/core'
import {Observable, map} from 'rxjs'
import {UserService} from 'src/app/shared/services/user.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  currentUser?: Observable<string>

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.userService
      .getCurrent()
      .pipe(map((user) => user.name))
  }
}
