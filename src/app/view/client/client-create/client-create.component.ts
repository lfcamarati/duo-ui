import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClientPfService } from 'src/app/services/clientPf.service';
import { ClientPjService } from 'src/app/services/clientPj.service';

export interface TipoCliente {
  tipo: string,
  descricao: string
}

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  tipos: TipoCliente[] = [
    { tipo: 'PF', descricao: 'Pessoa Física' },
    { tipo: 'PJ', descricao: 'Pessoa Jurídica' }
  ];;

  tipo: String = 'PF'

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateTipo();
  }

  updateTipo(): void {
    if (this.tipo === 'PF') {
      this.router.navigate(['clientes/novo/pf']);
    } else {
      this.router.navigate(['clientes/novo/pj']);
    }
  }
}
