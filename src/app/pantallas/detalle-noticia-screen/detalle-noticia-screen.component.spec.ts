import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNoticiaScreenComponent } from './detalle-noticia-screen.component';

describe('DetalleNoticiaScreenComponent', () => {
  let component: DetalleNoticiaScreenComponent;
  let fixture: ComponentFixture<DetalleNoticiaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleNoticiaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleNoticiaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
