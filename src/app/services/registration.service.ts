import {Injectable} from '@angular/core';

import {UserService} from './user.service';


@Injectable()
export class RegistrationService {

    newUserData: any = {};


    constructor(public userService: UserService) {
    }


    saveNewUserData() {
        //TODO should rewrite when backend will be written
        sessionStorage.setItem('newUser', this.newUserData);
        this.userService.logIn('admin', 'admin');
    }
}
