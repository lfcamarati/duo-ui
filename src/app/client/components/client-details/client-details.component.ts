import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {Subject, takeUntil} from 'rxjs'
import {Contract} from 'src/app/core/domain/Contract'
import {ContractService} from 'src/app/core/services/contract.service'
import {ClientService} from '../../services/client.service'
import {Client} from '../../types/client.interface'

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent implements OnInit {
  client?: Client
  contracts: Contract[] = []

  private unsubscribe$ = new Subject<void>()

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private contractService: ContractService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((paramMap) => {
        const clientId = parseInt(paramMap.get('id')!)
        this.findClient(clientId)
        this.findContracts(clientId)
      })
  }

  back() {
    this.router.navigateByUrl('/clientes')
  }

  private findClient(clientId: number): void {
    this.clientService
      .getById(clientId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((client) => (this.client = client))
  }

  private findContracts(clientId: number): void {
    this.contractService
      .getByClient(clientId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((contracts) => (this.contracts = contracts.data))
  }
}
