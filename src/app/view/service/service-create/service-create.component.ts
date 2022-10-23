import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Service } from 'src/app/domain/Service';
import { ServiceService } from 'src/app/services/service.service';

export interface CreateServiceInput {
  id?: number|null
  title?: string|null
  description?: string|null
  price?: number|null
}

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {

  createServiceForm = new FormGroup({
    id: new FormControl<number|null>(null),
    title: new FormControl<string|null>(null, [Validators.required]),
    description: new FormControl<string|null>(null, [Validators.required]),
    price: new FormControl<number|null>(null, [Validators.required])
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      let idParam = paramMap.get('id');

      if (idParam) {
        this.loadClientToEdit(parseInt(idParam))
      }
    })
  }

  private loadClientToEdit(id: number) {
    this.serviceService.getById(id).subscribe({
      next: (data) => {
        this.createServiceForm.patchValue({
          id: data.id,
          title: data.title,
          description: data.description,
          price: data.price
        });
      },
    })
  }

  salvar(): void {
    let createServiceInput: CreateServiceInput = this.createServiceForm.value;
    let service: Service = {
      id: createServiceInput.id,
      title: createServiceInput.title!,
      description: createServiceInput.description!,
      price: createServiceInput.price!
    }

    console.log(service);

    if (service.id) {
      this.serviceService.update(service).subscribe({
        next: () => {
          this.messageService.add({severity:'success', detail: "Serviço atualizado com sucesso!"})
          this.router.navigateByUrl('/servicos');
        },
        error: () => {
          this.messageService.add({severity:'error', detail: "Erro ao atualizar serviço!"})
        }
      });
    } else {
      this.serviceService.save(service).subscribe({
        next: () => {
          this.messageService.add({severity:'success', detail: "Serviço registrado com sucesso!"})
          this.router.navigateByUrl('/servicos');
        },
        error: () => {
          this.messageService.add({severity:'error', detail: "Erro ao registrar serviço!"})
        }
      });
    }
  }

  cancelar(): void {
    let confirmBack = true;

    if (this.createServiceForm.dirty) {
      confirmBack = confirm('Os dados informados serão perdidos. Deseja sair da página?')
    }

    if (!confirmBack) {
      return;
    }
    
    this.router.navigateByUrl('/servicos');
  }
}
