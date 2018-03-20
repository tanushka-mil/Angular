import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductTypeStepComponent} from './product-type-step.component';

describe('ProductTypeStepComponent', () => {
    let component: ProductTypeStepComponent;
    let fixture: ComponentFixture<ProductTypeStepComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductTypeStepComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductTypeStepComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
