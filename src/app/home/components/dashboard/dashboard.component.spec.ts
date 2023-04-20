import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing'
import {PrimeNGModule} from 'src/app/prime-ng.module'
import {DashboardComponent} from './dashboard.component'

describe('DashboardComponent', () => {
  let component: DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [PrimeNGModule],
      declarations: [DashboardComponent],
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}],
    })
  })

  beforeEach(async () => {
    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance
  })

  it('should render', async () => {
    expect(component).toBeDefined()
  })

  it('should show the title', async () => {
    // arrange
    const htmlElement: HTMLElement = fixture.debugElement.nativeElement
    const title = htmlElement.querySelector('p')!

    // assert
    expect(title.textContent).toContain('Dashboard')
  })
})
