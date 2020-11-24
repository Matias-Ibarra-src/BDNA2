import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPeriodistaScreenComponent } from './inicio-periodista-screen.component';

describe('InicioPeriodistaScreenComponent', () => {
  let component: InicioPeriodistaScreenComponent;
  let fixture: ComponentFixture<InicioPeriodistaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPeriodistaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPeriodistaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
