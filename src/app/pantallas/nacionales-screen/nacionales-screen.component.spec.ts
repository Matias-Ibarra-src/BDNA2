import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalesScreenComponent } from './nacionales-screen.component';

describe('NacionalesScreenComponent', () => {
  let component: NacionalesScreenComponent;
  let fixture: ComponentFixture<NacionalesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionalesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
