import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
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
    tipo: new FormControl('PF'),
    nome: new FormControl<string|null>(null),
    cpf: new FormControl<string|null>(null),
    razaoSocial: new FormControl<string|null>(null),
    cnpj: new FormControl<string|null>(null),
    endereco: new FormControl<string|null>(null, [Validators.required]),
    telefone: new FormControl<string|null>(null, [Validators.required]),
    email: new FormControl<string|null>('', [
      Validators.required,
      Validators.email
    ])
  });

  constructor(
    private router: Router,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.novoClienteForm.controls.tipo.setValue(this.tipos[0].tipo);
    this.setValidators();
  }

  salvar(): void {
    console.warn(this.novoClienteForm.value);

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
    return this.novoClienteForm.controls.tipo.value === 'PF';
  }

  isPj(): boolean {
    return this.novoClienteForm.controls.tipo.value === 'PJ';
  }

  updateTipo(): void {
    this.setValidators();
  }

  private setValidators() {
    let nome = this.novoClienteForm.controls.nome;
    let cpf = this.novoClienteForm.controls.cpf;
    let razaoSocial = this.novoClienteForm.controls.razaoSocial;
    let cnpj = this.novoClienteForm.controls.cnpj;

    if (this.isPf()) {
      razaoSocial.removeValidators(Validators.required)
      cnpj.removeValidators(Validators.required)
      nome.addValidators([Validators.required])
      cpf.addValidators([Validators.required])
    } else {
      nome.removeValidators(Validators.required)
      cpf.removeValidators(Validators.required)
      razaoSocial.addValidators([Validators.required])
      cnpj.addValidators([Validators.required])
    }

    this.novoClienteForm.updateValueAndValidity();
  }
}
