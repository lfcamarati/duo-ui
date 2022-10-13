import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Cliente {
  nome: string
}

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Cliente[] = []

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.clientes.push({
        nome: `Cliente ${i+1}`
      })
    }
  }

  novo(): void {
    this.router.navigateByUrl('/clientes/create');
  }
}
