import {Injectable} from '@angular/core';
import {appOptions} from '../interfaces/app-options.interface';


@Injectable()
export class AppOptionsService {

    options: appOptions = {
        showProcessing: false
    };


    constructor() {
    }

}
