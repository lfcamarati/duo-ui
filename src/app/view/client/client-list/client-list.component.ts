import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Client } from 'src/app/domain/Client';
import { ClientService } from 'src/app/services/client.service';

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
    this.router.navigate([`clientes/${client.id}/detalhes`]);
  }

  edit(client: Client): void {
    this.router.navigateByUrl(`/clientes/${client.id}/editar`);
  }

  delete(client: Client): void {
    this.clientService.delete(client.id!).subscribe({
      next: () => {
        this.messageService.add({severity:'success', detail: "Cliente removido com sucesso!"})
        this.ngOnInit();
      }
    })
  }
}
