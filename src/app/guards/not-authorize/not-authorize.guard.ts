import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {UserService} from '../../services/user.service';


@Injectable()
export class NotAuthorizeGuard implements CanActivate {

    constructor(public userService: UserService,
                public router: Router) {
    }


    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.userService.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
            return false;
        } else {
            return true;
        }
    }
}
