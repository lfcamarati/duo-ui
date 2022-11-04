import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Client } from 'src/app/domain/Client';
import { ClientService } from 'src/app/services/client.service';
import { ClientPfService } from 'src/app/services/clientPf.service';
import { ClientPjService } from 'src/app/services/clientPj.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = []

  constructor(
    private router: Router,
    private messageService: MessageService,
    private clientService: ClientService,
    private clientPfService: ClientPfService,
    private clientPjService: ClientPjService
  ) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe({
      next: (response) => {
        this.clients = response.data
      }
    })
  }

  novo(): void {
    this.router.navigateByUrl('/clientes/novo');
  }

  view(client: Client): void {
    if (client.type === 'PF') {
      this.router.navigateByUrl(`/clientes/detalhes/pf/${client.id}`);
    } else {
      this.router.navigateByUrl(`/clientes/detalhes/pj/${client.id}`);
    }
  }

  edit(client: Client): void {
    if (client.type === 'PF') {
      this.router.navigateByUrl(`/clientes/editar/pf/${client.id}`);
    } else {
      this.router.navigateByUrl(`/clientes/editar/pj/${client.id}`);
    }
  }

  delete(client: Client): void {
    if (client.type === 'PF') {
      this.clientPfService.delete(client.id).subscribe({
        next: () => {
          this.messageService.add({severity:'success', detail: "Cliente removido com sucesso!"})
          this.ngOnInit();
        }
      })
    } else {
      this.clientPjService.delete(client.id).subscribe({
        next: () => {
          this.messageService.add({severity:'success', detail: "Cliente removido com sucesso!"})
          this.ngOnInit();
        }
      })
    }
  }
}
