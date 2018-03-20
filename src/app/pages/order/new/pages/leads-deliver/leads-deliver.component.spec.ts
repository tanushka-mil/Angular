import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDeliverComponent } from './leads-deliver.component';

describe('LeadsDeliverComponent', () => {
  let component: LeadsDeliverComponent;
  let fixture: ComponentFixture<LeadsDeliverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsDeliverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
