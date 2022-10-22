import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClientPf } from 'src/app/domain/ClientPf';
import { ClientPj } from 'src/app/domain/ClientPj';
import { ClientPfService } from 'src/app/services/clientPf.service';
import { ClientPjService } from 'src/app/services/clientPj.service';
import { TipoCliente } from '../shared/TipoCliente';

export interface CreateClientInput {
  type?: string|null
  name?: string|null
  cpf?: string|null
  corporateName?: string|null
  cnpj?: string|null
  address?: string|null
  email?: string|null
  phone?: string|null
}

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
    private clientPfService: ClientPfService,
    private clientPjService: ClientPjService
  ) {}

  ngOnInit(): void {
    this.novoClienteForm.controls.type.setValue(this.tipos[0].tipo);
    this.setValidators();
  }

  salvar(): void {
    let createClientInput: CreateClientInput = this.novoClienteForm.value;
    let createClientObservable;

    if (createClientInput.type === 'PF') {
      createClientObservable = this.clientPfService.salvar({
        name: createClientInput.name!,
        cpf: createClientInput.cpf!,
        address: createClientInput.address!,
        email: createClientInput.email!,
        phone: createClientInput.phone!,
      });
    } else {
      createClientObservable = this.clientPjService.salvar({
        corporateName: createClientInput.corporateName!,
        cnpj: createClientInput.cnpj!,
        address: createClientInput.address!,
        email: createClientInput.email!,
        phone: createClientInput.phone!,
      })
    }

    createClientObservable.subscribe({
      next: () => {
        this.messageService.add({severity:'success', detail: "Cliente registrado com sucesso!"})
        this.router.navigateByUrl('/clientes');
      },
      error: () => {
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
