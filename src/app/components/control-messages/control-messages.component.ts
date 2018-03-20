import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

import {ValidationService} from '../../validation/validation.service';


@Component({
    selector: 'bp-control-messages',
    templateUrl: './control-messages.component.html',
    styleUrls: ['./control-messages.component.less']
})
export class ControlMessagesComponent {

    @Input()
    control: FormControl;


    constructor(public validationService: ValidationService) {
    }

    get errorMessage() {
        for (const propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return this.validationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
    }
}
