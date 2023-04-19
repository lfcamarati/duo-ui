import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SocialMediaManagementService } from 'src/app/core/services/socialMediaManagement.service';

export interface CreateServiceInput {
  id?: number|null
  name?: string|null
  description?: string|null
  price?: number|null
}

@Component({
  selector: 'app-social-media-management-create',
  templateUrl: './social-media-management-create.component.html',
  styleUrls: ['./social-media-management-create.component.css']
})
export class SocialMediaManagementCreateComponent implements OnInit {

  createServiceForm = new FormGroup({
    id: new FormControl<number|null>(null),
    name: new FormControl<string|null>(null, [Validators.required]),
    type: new FormControl<string|null>(null, [Validators.required]),
    description: new FormControl<string|null>(null, [Validators.required]),
    weekFrequency: new FormControl<number|null>(null, [Validators.required]),
    price: new FormControl<number|null>(null, [Validators.required])
  });

  planTypes = [
    {label: 'Mensal', value: 'MENSAL'},
    {label: 'Semestral', value: 'SEMESTRAL'},
    {label: 'Anual', value: 'ANUAL'},
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private socialMediaManagementService: SocialMediaManagementService
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {

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
