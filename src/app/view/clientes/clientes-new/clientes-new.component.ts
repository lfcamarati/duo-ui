import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CreateClient } from 'src/app/domain/CreateClient';
import { ClientPfService } from 'src/app/services/clientPf.service';
import { TipoCliente } from '../shared/TipoCliente';

@Component({
  selector: 'app-clientes-new',
  templateUrl: './clientes-new.component.html',
  styleUrls: ['./clientes-new.component.css']
})
export class ClientesNewComponent implements OnInit {

  tipos: TipoCliente[] = [
    { tipo: 'PF', descricao: 'Pessoa Física' },
    { tipo: 'PJ', descricao: 'Pessoa Jurídica' }
  ];;

  novoClienteForm = new FormGroup({
    type: new FormControl('PF'),
    name: new FormControl<string|null>(null),
    cpf: new FormControl(null),
    corporateName: new FormControl(null),
    cnpj: new FormControl(null),
    address: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  constructor(
    private router: Router,
    private messageService: MessageService,
    private clientPfService: ClientPfService
  ) {}

  ngOnInit(): void {
    this.novoClienteForm.controls.type.setValue(this.tipos[0].tipo);
    this.setValidators();
  }

  salvar(): void {
    let createClient: CreateClient = this.novoClienteForm.value;

    this.clientPfService.salvar(createClient).subscribe({
      next: (message) => {
        this.messageService.add({severity:'success', detail: "Cliente registrado com sucesso!"})
        this.router.navigateByUrl('/clientes');
      },
      error: (error) => {
        this.messageService.add({severity:'error', detail: "Erro ao registrar cliente!"})
      }
    })
  }

  cancelar(): void {
    let confirmBack = true;

    if (this.novoClienteForm.dirty) {
      confirmBack = confirm('Os dados informados serão perdidos. Deseja sair da página?')
    }

    if (!confirmBack) {
      return;
    }
    
    this.router.navigateByUrl('/clientes');
  }

  isPf(): boolean {
    return this.novoClienteForm.controls.type.value === 'PF';
  }

  isPj(): boolean {
    return this.novoClienteForm.controls.type.value === 'PJ';
  }

  updateTipo(): void {
    this.setValidators();
  }

  private setValidators() {
    let name = this.novoClienteForm.controls.name;
    let cpf = this.novoClienteForm.controls.cpf;
    let corporateName = this.novoClienteForm.controls.corporateName;
    let cnpj = this.novoClienteForm.controls.cnpj;

    if (this.isPf()) {
      corporateName.removeValidators(Validators.required)
      cnpj.removeValidators(Validators.required)
      name.addValidators([Validators.required])
      cpf.addValidators([Validators.required])
    } else {
      name.removeValidators(Validators.required)
      cpf.removeValidators(Validators.required)
      corporateName.addValidators([Validators.required])
      cnpj.addValidators([Validators.required])
    }

    this.novoClienteForm.controls.name.updateValueAndValidity();
    this.novoClienteForm.controls.cpf.updateValueAndValidity();
    this.novoClienteForm.controls.corporateName.updateValueAndValidity();
    this.novoClienteForm.controls.cnpj.updateValueAndValidity();
  }
}
