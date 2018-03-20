import {Component} from '@angular/core';
import {AppOptionsService} from './services/app-options.service';


@Component({
    selector: 'bp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {

    constructor(public appOptionsService: AppOptionsService) {
        //this.checkProcessing();
    }


    checkProcessing() {
        this.appOptionsService.options.showProcessing = true;
        setTimeout(() => {
            this.appOptionsService.options.showProcessing = false;
        }, 2000);
    }

}
