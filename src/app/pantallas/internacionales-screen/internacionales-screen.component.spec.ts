import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionalesScreenComponent } from './internacionales-screen.component';

describe('InternacionalesScreenComponent', () => {
  let component: InternacionalesScreenComponent;
  let fixture: ComponentFixture<InternacionalesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternacionalesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternacionalesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
