import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ClientPf } from 'src/app/domain/ClientPf';
import { ClientPfService } from 'src/app/services/clientPf.service';
import { ClientNameObserver } from '../../ClientNameObserver';

@Component({
  selector: 'app-clientpf-details',
  templateUrl: './clientpf-details.component.html',
  styleUrls: ['./clientpf-details.component.css']
})
export class ClientpfDetailsComponent implements OnInit, ClientNameObserver {

  clientName: Subject<string> = new Subject()
  clientPf?: ClientPf

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientPfService: ClientPfService
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
    this.clientPfService.getById(id).subscribe({
      next: (data) => {
        this.clientPf = data
        this.clientName.next(this.clientPf.name)
      },
    })
  }
}
