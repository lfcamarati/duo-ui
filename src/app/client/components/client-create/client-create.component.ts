import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable, Subject, takeUntil} from 'rxjs'
import {MessagesService} from 'src/app/shared/services/messages.service'
import {AppStateInterface} from 'src/app/types/appState.interface'
import {ClientService} from '../../services/client.service'
import * as ClientActions from '../../store/actions'
import {errorSelector, isClientCreated} from '../../store/selectors'
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
export class ClientCreateComponent implements OnInit, OnDestroy {
  isClientCreated$: Observable<boolean | null>
  error$: Observable<string | null>
  title: string = 'Novo cliente'
  tipos: ClientTypes[] = [
    {type: 'PF', description: 'Pessoa Física'},
    {type: 'PJ', description: 'Pessoa Jurídica'},
  ]
  createClientForm: FormGroup

  private unsubscribe$ = new Subject<void>()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppStateInterface>,
    private messagesService: MessagesService,
    private clientService: ClientService
  ) {
    this.error$ = this.store.pipe(select(errorSelector))
    this.isClientCreated$ = this.store.pipe(select(isClientCreated))

    this.createClientForm = new FormGroup({
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
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((paramMap) => {
        let idParam = paramMap.get('id')

        if (idParam) {
          this.loadClientToEdit(parseInt(idParam))
          this.title = 'Editar cliente'
        }
      })

    this.isClientCreated$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isClientCreated) => {
        if (isClientCreated) {
          this.messagesService.showSuccess('Cliente registrado com sucesso!')
          this.router.navigateByUrl('/clientes')
        }
      })

    this.error$.pipe(takeUntil(this.unsubscribe$)).subscribe((error) => {
      if (error) {
        this.messagesService.showError(error)
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  save(): void {
    let client: Client = this.createClientForm.getRawValue()

    if (client.id) {
      this.clientService
        .update(client)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => {
          this.messagesService.showSuccess('Cliente atualizado com sucesso!')
          this.router.navigateByUrl('/clientes')
        })
    } else {
      this.store.dispatch(ClientActions.createClient(client))
    }
  }

  cancel(): void {
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

  private loadClientToEdit(id: number) {
    this.clientService
      .getById(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => this.createClientForm.patchValue(data))
  }
}
