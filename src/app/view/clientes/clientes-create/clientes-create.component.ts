import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

interface TipoCliente {
  tipo: string,
  descricao: string
}

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {

  tipos: TipoCliente[] = [];
  tipoSelecionado?: TipoCliente;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tipos = [
      { tipo: 'PF', descricao: 'Pessoa Física' },
      { tipo: 'PJ', descricao: 'Pessoa Jurídica' }
    ]
    this.tipoSelecionado = this.tipos[0]
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

  isPf(): boolean {
    return this.tipoSelecionado?.tipo === 'PF';
  }

  isPj(): boolean {
    return this.tipoSelecionado?.tipo === 'PJ';
  }
}
