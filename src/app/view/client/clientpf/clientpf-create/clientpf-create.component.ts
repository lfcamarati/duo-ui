import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClientPfService } from 'src/app/services/clientPf.service';
import { ClientPf } from 'src/app/domain/ClientPf';

export interface CreateClientInput {
  id?: number|null
  name?: string|null
  cpf?: string|null
  address?: string|null
  email?: string|null
  phone?: string|null
}

@Component({
  selector: 'app-clientpf-create',
  templateUrl: './clientpf-create.component.html',
  styleUrls: ['./clientpf-create.component.css']
})
export class ClientpfCreateComponent implements OnInit {

  createClientForm = new FormGroup({
    id: new FormControl<number|null>(null),
    name: new FormControl<string|null>(null),
    cpf: new FormControl<string|null>(null),
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
    private clientPfService: ClientPfService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      let idParam = paramMap.get('id');

      if (idParam) {
        this.loadClientToEdit(parseInt(idParam))
      }
    })
  }

  private loadClientToEdit(id: number) {
    this.clientPfService.getById(id).subscribe({
      next: (data) => {
        this.createClientForm.patchValue({
          id: data.id,
          name: data.name,
          cpf: data.cpf,
          address: data.address,
          email: data.email,
          phone: data.phone
        });
      },
    })
  }

  salvar(): void {
    let createClientInput: CreateClientInput = this.createClientForm.value;
    let clientPf: ClientPf = {
      id: createClientInput.id,
      name: createClientInput.name!,
      cpf: createClientInput.cpf!,
      address: createClientInput.address!,
      email: createClientInput.email!,
      phone: createClientInput.phone!,
    }

    if (clientPf.id) {
      this.clientPfService.update(clientPf).subscribe({
        next: () => {
          this.messageService.add({severity:'success', detail: "Cliente atualizado com sucesso!"})
          this.router.navigateByUrl('/clientes');
        },
        error: () => {
          this.messageService.add({severity:'error', detail: "Erro ao registrar cliente!"})
        }
      });
    } else {
      this.clientPfService.salvar(clientPf).subscribe({
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
