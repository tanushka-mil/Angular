import {Injectable} from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class UserService {

    userData: any = {};
    redirectUrl: string = '/dashboard';


    constructor(public router: Router) {
    }


    logIn(login, password) {
        if (this.loginAdminHack(login, password)) {
            //TODO should rewrite when backend will be written
            sessionStorage.setItem('isUserLogin', 'true');
            this.router.navigate([this.redirectUrl]);
        }
    }


    loginAdminHack(login, password) {
        return login === 'admin' && password === 'admin';
    }


    logOut() {
        //TODO should rewrite when backend will be written
        sessionStorage.clear();
        this.router.navigate(['../login']);
    }


    isLoggedIn(): Boolean {
        //TODO should rewrite when backend will be written
        return !!sessionStorage.getItem('isUserLogin');
    }
}
