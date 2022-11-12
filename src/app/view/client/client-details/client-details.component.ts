import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/domain/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  client?: Client
  tabIndex: number = 0

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.firstChild?.url.subscribe((path) => {
      this.tabIndex = (path[0].path === 'pj' || path[0].path === 'pf') ? 0 : 1;
     });

    this.activatedRoute.paramMap.subscribe(paramMap => {
      const clientId = parseInt(paramMap.get('id')!);
      this.clientService.getById(clientId).subscribe((client) => this.client = client)
    })
  }

  back() {
    this.router.navigateByUrl('/clientes');
  }
}
