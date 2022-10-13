import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.clientesService.salvar('teste').subscribe({
      next(message) {
        console.log(message);
      },
      error(msg) {
        console.error(msg)
      }
    })
  }

  cancelar(): void {
    this.router.navigateByUrl('/clientes');
  }
}
