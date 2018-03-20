import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../../services/user.service';


@Component({
    selector: 'bp-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent {

    email: string;
    password: string;


    constructor(public userService: UserService,
                public router: Router) {
    }


    loginUser() {
        this.userService.logIn(this.email, this.password);
    }
}
