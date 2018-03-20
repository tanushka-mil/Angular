import {Component, OnInit} from '@angular/core';

import {DailyLeads} from '../../../interfaces/new-order-object.interface';

import {NewOrderService} from '../../service/new-order.service';


@Component({
    selector: 'bp-leads-counter-step',
    templateUrl: './leads-counter-step.component.html',
    styleUrls: ['./leads-counter-step.component.less']
})
export class LeadsCounterStepComponent implements OnInit {

    dailyLeads: DailyLeads = {
        Sunday: {isActive: true, leadsPerDay: Infinity, timeFrom: 0, timeTo: 12},
        Monday: {isActive: true, leadsPerDay: Infinity, timeFrom: 0, timeTo: 12},
        Tuesday: {isActive: true, leadsPerDay: Infinity, timeFrom: 0, timeTo: 12},
        Wednesday: {isActive: true, leadsPerDay: Infinity, timeFrom: 0, timeTo: 12},
        Thursday: {isActive: true, leadsPerDay: Infinity, timeFrom: 0, timeTo: 12},
        Friday: {isActive: true, leadsPerDay: Infinity, timeFrom: 0, timeTo: 12},
        Saturday: {isActive: true, leadsPerDay: Infinity, timeFrom: 0, timeTo: 12},
    };


    leadsPerDayValues: number[] = [
        Infinity,
        10,
        30,
        50,
        100
    ];


    constructor(public newOrderService: NewOrderService) {
    }


    ngOnInit() {
        this.newOrderService.newOrder.leadsTime = this.dailyLeads;
        this.newOrderService.setDisabledButton(this.newOrderService.newOrder.leadsTime);
    }

    isActiveDay(day) {
        this.dailyLeads[day].isActive = !this.dailyLeads[day].isActive;
    }
}
