import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable} from 'rxjs'
import {AppStateInterface} from 'src/app/types/appState.interface'
import * as ClientActions from '../../store/actions'
import {clientsSelector} from '../../store/selectors'
import {Client} from '../../types/client.interface'

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  clients$: Observable<Client[]>

  constructor(private router: Router, private store: Store<AppStateInterface>) {
    this.clients$ = this.store.pipe(select(clientsSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(ClientActions.getClients())
  }

  novo(): void {
    this.router.navigateByUrl('/clientes/novo')
  }

  onView(client: Client): void {
    this.router.navigate([`clientes/${client.id}/detalhes`])
  }

  onEdit(client: Client): void {
    this.router.navigateByUrl(`/clientes/${client.id}/editar`)
  }

  onDelete(client: Client): void {
    this.store.dispatch(ClientActions.deleteClient(client.id!))
  }
}
