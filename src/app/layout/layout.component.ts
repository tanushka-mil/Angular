import {Component} from '@angular/core';

import {UserService} from '../services/user.service';


@Component({
    selector: 'bp-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.less']
})
export class LayoutComponent {

    constructor(public userService: UserService) {
    }
}
