import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSemanalComponent } from './tarjeta-semanal.component';

describe('TarjetaSemanalComponent', () => {
  let component: TarjetaSemanalComponent;
  let fixture: ComponentFixture<TarjetaSemanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaSemanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
