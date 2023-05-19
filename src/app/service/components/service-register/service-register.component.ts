import {Component, OnDestroy, OnInit} from '@angular/core'
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms'
import {Router} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable, Subject, filter, takeUntil} from 'rxjs'
import {Client} from 'src/app/client/types/client.interface'
import {MessagesService} from 'src/app/shared/messages/services/messages.service'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import * as ServiceActions from '../../store/actions'
import {
  clientRegisterServiceSelector,
  errorSelector,
  isServiceRegistered,
} from '../../store/selectors'
import {
  ServiceClient,
  ServicePeriodType,
  WeekDay,
} from '../../types/serviceClient.interface'

@Component({
  selector: 'app-service-register',
  templateUrl: './service-register.component.html',
  styleUrls: ['./service-register.component.css'],
})
export class ServiceRegisterComponent implements OnInit, OnDestroy {
  registerServiceForm: FormGroup<RegisterServiceClientForm>
  client: Client | null = null

  servicePeriodTypes: {type: ServicePeriodType; name: string}[] = [
    {type: ServicePeriodType.Weekly, name: 'Semanal'},
    {type: ServicePeriodType.SpecificDate, name: 'Data específica'},
  ]

  weekDays: WeekDay[] = [
    {name: 'DOM', description: 'Domingo'},
    {name: 'SEG', description: 'Segunda'},
    {name: 'TER', description: 'Terça'},
    {name: 'QUA', description: 'Quarta'},
    {name: 'QUI', description: 'Quinta'},
    {name: 'SEX', description: 'Sexta'},
    {name: 'SAB', description: 'Sábado'},
  ]

  clientRegisterService$: Observable<Client | null>
  isServiceRegistered$: Observable<boolean | null>
  error$: Observable<string | null>

  private unsubscribe$ = new Subject<void>()

  constructor(
    private router: Router,
    private store: Store<AppStateInterface>,
    private messagesService: MessagesService
  ) {
    this.clientRegisterService$ = this.store.pipe(
      select(clientRegisterServiceSelector)
    )
    this.isServiceRegistered$ = this.store.pipe(select(isServiceRegistered))
    this.error$ = this.store.pipe(select(errorSelector))

    this.registerServiceForm = new FormGroup<RegisterServiceClientForm>(
      {
        id: new FormControl(null),
        clientId: new FormControl(0, {nonNullable: true}),
        description: new FormControl('', {
          nonNullable: true,
          validators: Validators.required,
        }),
        price: new FormControl(0, {
          nonNullable: true,
          validators: [Validators.required, this.greaterThanZero()],
        }),
        periodType: new FormControl(ServicePeriodType.Weekly, {
          nonNullable: true,
          validators: Validators.required,
        }),
        weekDays: new FormControl(null),
        specificDate: new FormControl(null),
      },
      {
        validators: [this.weekDaysRequired(), this.specificDateRequired()],
      }
    )
  }

  ngOnInit(): void {
    this.isServiceRegistered$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((value) => value === true)
      )
      .subscribe((isServiceRegistered) => {
        // if (isServiceRegistered) {
        this.messagesService.addSuccess('Serviço registrado com sucesso!')
        // }
      })

    this.error$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((value) => value !== null)
      )
      .subscribe((error) => {
        // if (error) {
        this.messagesService.addError(error!)
        // }
      })

    this.clientRegisterService$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((client: Client | null) => {
        if (client !== null && client.id !== null) {
          this.client = client
          this.registerServiceForm.controls.clientId.setValue(client.id)
        } else {
          this.router.navigate(['clientes'])
        }
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  save(): void {
    const serviceClient: ServiceClient = this.registerServiceForm.getRawValue()
    this.store.dispatch(ServiceActions.registerServiceClient(serviceClient))
  }

  cancel(): void {
    this.router.navigate(['clientes'])
  }

  isWeekly(): boolean {
    return (
      this.registerServiceForm.controls.periodType.value ===
      ServicePeriodType.Weekly
    )
  }

  private greaterThanZero(): ValidatorFn {
    return (control: AbstractControl<number>): ValidationErrors | null => {
      return control.value > 0 ? null : {greaterThanZero: true}
    }
  }

  private weekDaysRequired(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const periodType = control.get('periodType')
      const weekDays = control.get('weekDays')

      if (
        periodType &&
        weekDays &&
        periodType.value === ServicePeriodType.Weekly &&
        (weekDays.value === null || weekDays.value.length === 0)
      ) {
        weekDays.setErrors({weekDaysRequired: true})
        return {weekDaysRequired: true}
      }

      weekDays?.setErrors(null)
      return null
    }
  }

  private specificDateRequired(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const periodType = control.get('periodType')
      const specificDate = control.get('specificDate')

      if (
        periodType &&
        specificDate &&
        periodType.value === ServicePeriodType.SpecificDate &&
        specificDate.value === null
      ) {
        specificDate.setErrors({specificDateRequired: true})
        return {specificDateRequired: true}
      }

      specificDate?.setErrors(null)
      return null
    }
  }
}

interface RegisterServiceClientForm {
  id: FormControl<number | null>
  clientId: FormControl<number>
  description: FormControl<string>
  price: FormControl<number>
  periodType: FormControl<ServicePeriodType>
  weekDays: FormControl<WeekDay[] | null>
  specificDate: FormControl<string | null>
}
