import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {MessageService} from 'primeng/api'
import {ClientService} from '../../services/client.service'
import {Client} from '../../types/Client'

export interface TipoCliente {
  tipo: string
  descricao: string
}

export interface CreateClientCommand {
  id?: number | null
  name?: string | null
  cpfCnpj?: string | null
  address?: string | null
  email?: string | null
  phone?: string | null
  type?: string | null
}

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
})
export class ClientCreateComponent implements OnInit {
  tipos: TipoCliente[] = [
    {tipo: 'PF', descricao: 'Pessoa Física'},
    {tipo: 'PJ', descricao: 'Pessoa Jurídica'},
  ]

  createClientForm = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null),
    cpfCnpj: new FormControl<string | null>(null),
    address: new FormControl<string | null>(null, [Validators.required]),
    phone: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.email,
    ]),
    type: new FormControl<string | null>('PF', [Validators.required]),
  })

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      let idParam = paramMap.get('id')

      if (idParam) {
        this.loadClientToEdit(parseInt(idParam))
      }
    })
  }

  private loadClientToEdit(id: number) {
    this.clientService.getById(id).subscribe({
      next: (data) => {
        this.createClientForm.patchValue({
          id: data.id,
          name: data.name,
          cpfCnpj: data.cpfCnpj,
          address: data.address,
          email: data.email,
          phone: data.phone,
          type: data.type,
        })
      },
    })
  }

  salvar(): void {
    let createClientCommand: CreateClientCommand = this.createClientForm.value
    let client: Client = {
      id: createClientCommand.id,
      name: createClientCommand.name!,
      cpfCnpj: createClientCommand.cpfCnpj!,
      address: createClientCommand.address!,
      email: createClientCommand.email!,
      phone: createClientCommand.phone!,
      type: createClientCommand.type!,
    }

    if (client.id) {
      this.clientService.update(client).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            detail: 'Cliente atualizado com sucesso!',
          })
          this.router.navigateByUrl('/clientes')
        },
      })
    } else {
      this.clientService.salvar(client).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            detail: 'Cliente registrado com sucesso!',
          })
          this.router.navigateByUrl('/clientes')
        },
      })
    }
  }

  cancelar(): void {
    let confirmBack = true

    if (this.createClientForm.dirty) {
      confirmBack = confirm(
        'Os dados informados serão perdidos. Deseja sair da página?'
      )
    }

    if (!confirmBack) {
      return
    }

    this.router.navigateByUrl('/clientes')
  }

  isPf(): boolean {
    return this.createClientForm.controls['type'].value === 'PF'
  }

  isPj(): boolean {
    return this.createClientForm.controls['type'].value === 'PJ'
  }
}
