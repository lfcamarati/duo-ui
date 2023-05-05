import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {
  ServiceClient,
  ServicePeriodType,
} from '../../types/serviceClient.interface'

@Component({
  selector: 'app-service-register',
  templateUrl: './service-register.component.html',
  styleUrls: ['./service-register.component.css'],
})
export class ServiceRegisterComponent implements OnInit {
  registerServiceForm: FormGroup
  servicePeriodTypes: {type: ServicePeriodType; name: string}[] = [
    {type: ServicePeriodType.Weekly, name: 'Semanal'},
    {type: ServicePeriodType.Monthly, name: 'Mensal'},
    {type: ServicePeriodType.SpecificDate, name: 'Data específica'},
  ]

  constructor() {
    this.registerServiceForm = new FormGroup({
      id: new FormControl<number | null>(null),
      description: new FormControl<string>('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      periodType: new FormControl<ServicePeriodType>(ServicePeriodType.Weekly, {
        nonNullable: true,
        validators: Validators.required,
      }),
      periodConfig: new FormControl<string[]>([], [Validators.required]),
      price: new FormControl<number>(0, [Validators.required]),
    })
  }

  ngOnInit(): void {}

  save(): void {
    const serviceClient: ServiceClient = this.registerServiceForm.getRawValue()
    console.log(serviceClient)
  }

  cancel(): void {}
}
