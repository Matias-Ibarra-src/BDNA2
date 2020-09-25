import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasSemanaScrennComponent } from './noticias-semana-screnn.component';

describe('NoticiasSemanaScrennComponent', () => {
  let component: NoticiasSemanaScrennComponent;
  let fixture: ComponentFixture<NoticiasSemanaScrennComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasSemanaScrennComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasSemanaScrennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
