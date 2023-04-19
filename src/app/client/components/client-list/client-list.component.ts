import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {MessageService} from 'primeng/api'
import {Observable} from 'rxjs'
import {AppStateInterface} from 'src/app/types/appState.interface'
import {ClientService} from '../../services/client.service'
import * as ClientActions from '../../store/actions'
import {clientsSelector} from '../../store/selectors'
import {Client} from '../../types/Client'

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  clients$: Observable<Client[]>

  constructor(
    private router: Router,
    private messageService: MessageService,
    private clientService: ClientService,
    private store: Store<AppStateInterface>
  ) {
    this.clients$ = this.store.pipe(select(clientsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(ClientActions.getClients())
  }

  novo(): void {
    this.router.navigateByUrl('/clientes/novo')
  }

  view(client: Client): void {
    this.router.navigate([`clientes/${client.id}/detalhes`])
  }

  edit(client: Client): void {
    this.router.navigateByUrl(`/clientes/${client.id}/editar`)
  }

  delete(client: Client): void {
    this.clientService.delete(client.id!).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          detail: 'Cliente removido com sucesso!',
        })
        this.ngOnInit()
      },
    })
  }
}
