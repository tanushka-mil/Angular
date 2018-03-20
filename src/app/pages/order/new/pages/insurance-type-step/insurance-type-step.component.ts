import {Component, OnInit} from '@angular/core';

import {NewOrderService} from '../../service/new-order.service';


@Component({
    selector: 'bp-insurance-type-step',
    templateUrl: './insurance-type-step.component.html',
    styleUrls: ['./insurance-type-step.component.less']
})
export class InsuranceTypeStepComponent implements OnInit {

    componentValues = [
        'home',
        'auto',
        'business',
        'health',
        'life'
    ];


    constructor(public newOrderService: NewOrderService) {
    }


    ngOnInit() {
        this.newOrderService.setDisabledButton(this.newOrderService.newOrder.insuranceType);
    }


    changeValue(value) {
        this.newOrderService.newOrder.insuranceType = value;
        this.newOrderService.setDisabledButton(this.newOrderService.newOrder.insuranceType);
    }
}
