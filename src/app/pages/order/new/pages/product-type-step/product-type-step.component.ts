import {Component, OnInit} from '@angular/core';

import {NewOrderService} from '../../service/new-order.service';


@Component({
    selector: 'bp-product-type-step',
    templateUrl: './product-type-step.component.html',
    styleUrls: ['./product-type-step.component.less']
})
export class ProductTypeStepComponent implements OnInit {

    componentValues = [
        'leads',
        'calls',
        'clicks',
    ];


    constructor(public newOrderService: NewOrderService) {
    }


    ngOnInit() {
        this.newOrderService.setDisabledButton(this.newOrderService.newOrder.productType);
    }


    changeValue(value) {
        this.newOrderService.newOrder.productType = value;
        this.newOrderService.setDisabledButton(this.newOrderService.newOrder.productType);
    }
}
