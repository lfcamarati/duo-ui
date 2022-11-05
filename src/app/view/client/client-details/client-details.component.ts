import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientNameObserver } from '../ClientNameObserver';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  clientName?: Observable<string>

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigateByUrl('/clientes');
  }

  loadClientName(compRef: ClientNameObserver) {
    this.clientName = compRef?.getClientName()
  }
}
