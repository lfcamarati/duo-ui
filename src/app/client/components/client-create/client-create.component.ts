import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {MessageService} from 'primeng/api'
import {ClientService} from '../../services/client.service'
import {Client, ClientType} from '../../types/client.interface'

export interface ClientTypes {
  type: ClientType
  description: string
}

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
})
export class ClientCreateComponent implements OnInit {
  tipos: ClientTypes[] = [
    {type: 'PF', description: 'Pessoa Física'},
    {type: 'PJ', description: 'Pessoa Jurídica'},
  ]

  createClientForm = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    cpfCnpj: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    address: new FormControl<string | null>(null),
    phone: new FormControl<string | null>(null),
    email: new FormControl<string | null>(null, [Validators.email]),
    type: new FormControl<ClientType>('PF', {
      nonNullable: true,
      validators: Validators.required,
    }),
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
    let client: Client = this.createClientForm.getRawValue()

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
