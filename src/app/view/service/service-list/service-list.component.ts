import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Service } from 'src/app/domain/Service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: Service[] = []

  constructor(
    private router: Router,
    private messageService: MessageService,
    private serviceService: ServiceService,
  ) { }

  ngOnInit(): void {
    this.serviceService.getAll().subscribe({
      next: (response) => {
        this.services = response.data
      },
      error: () => {
        this.messageService.add({severity:'error', detail: 'Erro ao recuperar serviços!'})
      }
    });
  }

  novo(): void {
    this.router.navigateByUrl('/servicos/novo');
  }

  edit(service: Service): void {
    this.router.navigateByUrl(`/servicos/editar/${service.id}`);
  }

  delete(service: Service): void {
    this.serviceService.delete(service.id!).subscribe({
      next: () => {
        this.messageService.add({severity:'success', detail: "Serviço removido com sucesso!"})
        this.ngOnInit();
      },
      error: () => {
        this.messageService.add({severity:'error', detail: 'Erro ao remover serviço!'})
      }
    })
  }
}
