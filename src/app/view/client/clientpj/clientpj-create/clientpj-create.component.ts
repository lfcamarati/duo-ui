import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClientPjService } from 'src/app/services/clientPj.service';
import { ClientPj } from 'src/app/domain/ClientPj';

export interface CreateClientInput {
  id?: number|null
  corporateName?: string|null
  cnpj?: string|null
  address?: string|null
  email?: string|null
  phone?: string|null
}

@Component({
  selector: 'app-clientpj-create',
  templateUrl: './clientpj-create.component.html',
  styleUrls: ['./clientpj-create.component.css']
})
export class ClientpjCreateComponent implements OnInit {

  createClientForm = new FormGroup({
    id: new FormControl<number|null>(null),
    corporateName: new FormControl<string|null>(null),
    cnpj: new FormControl<string|null>(null),
    address: new FormControl<string|null>(null, [Validators.required]),
    phone: new FormControl<string|null>(null, [Validators.required]),
    email: new FormControl<string|null>(null, [
      Validators.required,
      Validators.email
    ])
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private clientPjService: ClientPjService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      let idParam = paramMap.get('id');

      if (idParam) {
        this.loadClientToEdit(parseInt(idParam))
      }
    })
  }

  private loadClientToEdit(id: number) {
    this.clientPjService.getById(id).subscribe({
      next: (data) => {
        this.createClientForm.patchValue({
          id: data.id,
          corporateName: data.corporateName,
          cnpj: data.cnpj,
          address: data.address,
          email: data.email,
          phone: data.phone
        });
      },
    })
  }

  salvar(): void {
    let createClientInput: CreateClientInput = this.createClientForm.value;
    let clientPj: ClientPj = {
      id: createClientInput.id,
      corporateName: createClientInput.corporateName!,
      cnpj: createClientInput.cnpj!,
      address: createClientInput.address!,
      email: createClientInput.email!,
      phone: createClientInput.phone!,
    }

    if (clientPj.id) {
      this.clientPjService.update(clientPj).subscribe({
        next: () => {
          this.messageService.add({severity:'success', detail: "Cliente atualizado com sucesso!"})
          this.router.navigateByUrl('/clientes');
        },
        error: () => {
          this.messageService.add({severity:'error', detail: "Erro ao registrar cliente!"})
        }
      });
    } else {
      this.clientPjService.salvar(clientPj).subscribe({
        next: () => {
          this.messageService.add({severity:'success', detail: "Cliente registrado com sucesso!"})
          this.router.navigateByUrl('/clientes');
        },
        error: () => {
          this.messageService.add({severity:'error', detail: "Erro ao registrar cliente!"})
        }
      });
    }
  }

  cancelar(): void {
    let confirmBack = true;

    if (this.createClientForm.dirty) {
      confirmBack = confirm('Os dados informados serão perdidos. Deseja sair da página?')
    }

    if (!confirmBack) {
      return;
    }
    
    this.router.navigateByUrl('/clientes');
  }
}
