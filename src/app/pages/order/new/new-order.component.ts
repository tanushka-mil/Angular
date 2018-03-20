import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NewOrderService} from './service/new-order.service';


@Component({
    selector: 'bp-new-order',
    templateUrl: './new-order.component.html',
    styleUrls: ['./new-order.component.less'],
    providers: [NewOrderService],
})
export class NewOrderComponent {

    constructor(public newOrderService: NewOrderService) {
    }
}
