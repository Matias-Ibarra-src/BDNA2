import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndLoadScreenComponent } from './create-and-load-screen.component';

describe('CreateAndLoadScreenComponent', () => {
  let component: CreateAndLoadScreenComponent;
  let fixture: ComponentFixture<CreateAndLoadScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAndLoadScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAndLoadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
