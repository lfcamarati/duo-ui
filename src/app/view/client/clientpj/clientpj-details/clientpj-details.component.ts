import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { ClientPj } from 'src/app/domain/ClientPj';
import { ClientPjService } from 'src/app/services/clientPj.service';
import { ClientNameObserver } from '../../ClientNameObserver';

@Component({
  selector: 'app-clientpj-details',
  templateUrl: './clientpj-details.component.html',
  styleUrls: ['./clientpj-details.component.css']
})
export class ClientpjDetailsComponent implements OnInit, ClientNameObserver {

  clientName: Subject<string> = new Subject()
  clientPj?: ClientPj

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientPjService: ClientPjService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      let idParam = paramMap.get('id');

      if (idParam) {
        this.loadClient(parseInt(idParam))
      }
    })
  }

  getClientName(): Subject<string> {
    return this.clientName;
  }

  private loadClient(id: number) {
    this.clientPjService.getById(id).subscribe({
      next: (data) => {
        this.clientPj = data
        this.clientName.next(this.clientPj.corporateName)
      },
    })
  }
}
