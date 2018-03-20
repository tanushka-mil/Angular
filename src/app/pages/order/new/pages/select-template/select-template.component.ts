import {Component, OnInit} from '@angular/core';

import {NewOrderService} from '../../service/new-order.service';


@Component({
    selector: 'bp-select-template',
    templateUrl: './select-template.component.html',
    styleUrls: ['./select-template.component.less']
})
export class SelectTemplateComponent implements OnInit {

    componentValues = [
        'premium',
        'standart',
        'custom'
    ];


    constructor(public newOrderService: NewOrderService) {
    }


    ngOnInit() {
        this.newOrderService.setDisabledButton(this.newOrderService.newOrder.selectTemplate);
    }


    changeValue(value) {
        this.newOrderService.newOrder.selectTemplate = value;
        this.newOrderService.setDisabledButton(this.newOrderService.newOrder.selectTemplate);
    }
}
