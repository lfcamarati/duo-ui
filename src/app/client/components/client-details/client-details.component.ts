import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {Store} from '@ngrx/store'
import {Subject, takeUntil} from 'rxjs'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import * as ServiceActions from '../../../service/store/actions'
import {ClientService} from '../../services/client.service'
import {Client} from '../../types/client.interface'

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent implements OnInit {
  client?: Client

  private unsubscribe$ = new Subject<void>()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppStateInterface>,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((paramMap) => {
        const clientId = parseInt(paramMap.get('id')!)
        this.findClient(clientId)
      })
  }

  back() {
    this.router.navigateByUrl('/clientes')
  }

  registerService() {
    this.store.dispatch(
      ServiceActions.registerServiceClientInitial(this.client!)
    )
    this.router.navigate(['servicos', 'registrar'])
  }

  private findClient(clientId: number): void {
    this.clientService
      .getById(clientId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((client) => (this.client = client))
  }
}
