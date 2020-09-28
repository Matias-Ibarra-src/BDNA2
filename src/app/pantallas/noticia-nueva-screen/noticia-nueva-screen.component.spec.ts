import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaNuevaScreenComponent } from './noticia-nueva-screen.component';

describe('NoticiaNuevaScreenComponent', () => {
  let component: NoticiaNuevaScreenComponent;
  let fixture: ComponentFixture<NoticiaNuevaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaNuevaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaNuevaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
