import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPequeComponent } from './tarjeta-peque.component';

describe('TarjetaPequeComponent', () => {
  let component: TarjetaPequeComponent;
  let fixture: ComponentFixture<TarjetaPequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
