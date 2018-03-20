import {Component, OnInit} from '@angular/core';
import {MouseEvent} from '@agm/core';

import {Geo} from '../../../interfaces/new-order-object.interface';

import {NewOrderService} from '../../service/new-order.service';


@Component({
    selector: 'bp-geo',
    templateUrl: './geo.component.html',
    styleUrls: ['./geo.component.less']
})
export class GeoComponent implements OnInit {

    zoom: number = 8;
    lat: number = 35.40726682834762;
    lng: number = -117.5184467109375;
    radius: number = 35000;


    constructor(public newOrderService: NewOrderService) {
    }


    ngOnInit() {
        const defaultGeo: Geo = {
            latitude: this.lat,
            longitude: this.lng,
            radius: this.radius
        };
        this.newOrderService.newOrder.geo = this.newOrderService.newOrder.geo || defaultGeo;
        this.newOrderService.setDisabledButton(
            this.newOrderService.newOrder.geo.latitude &&
            this.newOrderService.newOrder.geo.longitude &&
            this.newOrderService.newOrder.geo.radius
        );
    }


    circleDragEnd($event: MouseEvent) {
        this.newOrderService.newOrder.geo.latitude = $event.coords.lat;
        this.newOrderService.newOrder.geo.longitude = $event.coords.lng;
        this.newOrderService.newOrder.geo.radius = this.radius;

        this.newOrderService.setDisabledButton(
            this.newOrderService.newOrder.geo.latitude &&
            this.newOrderService.newOrder.geo.longitude &&
            this.newOrderService.newOrder.geo.radius
        );
    }
}
