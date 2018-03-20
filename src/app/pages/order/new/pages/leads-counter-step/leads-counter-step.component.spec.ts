import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsCounterStepComponent } from './leads-counter-step.component';

describe('LeadsCounterStepComponent', () => {
  let component: LeadsCounterStepComponent;
  let fixture: ComponentFixture<LeadsCounterStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsCounterStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsCounterStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
