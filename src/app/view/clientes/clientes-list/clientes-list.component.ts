import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientSearch } from 'src/app/domain/ClientGetAllSearch';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clients: ClientSearch[] = []

  constructor(
    private router: Router,
    private clientService: ClientesService
  ) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe(response => {
      this.clients = response.data
    })
  }

  novo(): void {
    this.router.navigateByUrl('/clientes/novo');
  }

  delete(id: number): void {
    this.clientService.delete(id).subscribe({
      next: (response) => {
        console.log("Removido com sucesso!");
        this.ngOnInit();
      }
    })
  }
}
