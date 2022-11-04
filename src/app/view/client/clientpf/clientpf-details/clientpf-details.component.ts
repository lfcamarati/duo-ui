import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientPf } from 'src/app/domain/ClientPf';
import { ClientPfService } from 'src/app/services/clientPf.service';

@Component({
  selector: 'app-clientpf-details',
  templateUrl: './clientpf-details.component.html',
  styleUrls: ['./clientpf-details.component.css']
})
export class ClientpfDetailsComponent implements OnInit {

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

  private loadClient(id: number) {
    this.clientPfService.getById(id).subscribe({
      next: (data) => {
        this.clientPf = data
      },
    })
  }
}
