import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionScreenComponent } from './edicion-screen.component';

describe('EdicionScreenComponent', () => {
  let component: EdicionScreenComponent;
  let fixture: ComponentFixture<EdicionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
