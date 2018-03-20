import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InsuranceTypeStepComponent} from './insurance-type-step.component';

describe('InsuranceTypeStepComponent', () => {
    let component: InsuranceTypeStepComponent;
    let fixture: ComponentFixture<InsuranceTypeStepComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InsuranceTypeStepComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InsuranceTypeStepComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
