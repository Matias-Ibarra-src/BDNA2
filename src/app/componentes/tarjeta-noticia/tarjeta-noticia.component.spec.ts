import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaNoticiaComponent } from './tarjeta-noticia.component';

describe('TarjetaNoticiaComponent', () => {
  let component: TarjetaNoticiaComponent;
  let fixture: ComponentFixture<TarjetaNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
