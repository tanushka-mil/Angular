import {Component, OnInit} from '@angular/core';

import {NewOrderService} from '../../service/new-order.service';
import {LeadsDeliver} from '../../../interfaces/new-order-object.interface';


@Component({
    selector: 'bp-leads-deliver',
    templateUrl: './leads-deliver.component.html',
    styleUrls: ['./leads-deliver.component.less']
})
export class LeadsDeliverComponent implements OnInit {

    componentValues = [
        'Email',
        'SMS',
        'CRM / Lead Management System'
    ];


    constructor(public newOrderService: NewOrderService) {
    }


    ngOnInit() {
        const defaultLeadsDeliver: LeadsDeliver = {
            value: '',
            type: '',
        };
        this.newOrderService.newOrder.leadsDeliver = this.newOrderService.newOrder.leadsDeliver || defaultLeadsDeliver;
        this.newOrderService.setDisabledButton(
            this.newOrderService.newOrder.leadsDeliver.value && this.newOrderService.newOrder.leadsDeliver.type
        );
    }


    changeValue(value) {
        if (this.newOrderService.newOrder.leadsDeliver.type !== value) {
            this.newOrderService.newOrder.leadsDeliver.type = value;
            this.newOrderService.newOrder.leadsDeliver.value = '';
        }
        this.newOrderService.setDisabledButton(
            this.newOrderService.newOrder.leadsDeliver.value && this.newOrderService.newOrder.leadsDeliver.type
        );
    }
}
