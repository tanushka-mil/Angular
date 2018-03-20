import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';



import {RegistrationService} from '../../../services/registration.service';
import {ValidationService} from '../../../validation/validation.service';


@Component({
    selector: 'bp-license-number',
    templateUrl: './license-number.component.html',
    styleUrls: ['./license-number.component.less']
})
export class LicenseNumberComponent {

    userForm: any;


    constructor(public registrationService: RegistrationService,
                public router: Router,
                public formBuilder: FormBuilder,
                public validationService: ValidationService) {
        this.createForm();
    }


    createForm() {
        this.userForm = this.formBuilder.group({
            licenseNumber: ['',
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(20),
                    this.validationService.licenseNumberValidator,
                ]
            ]
        });
    }


    registrationUser(event: any) {
        event.preventDefault();

        this.registrationService.newUserData.licenseNum = this.userForm.controls.licenseNumber.value;
        this.registrationService.saveNewUserData();

        this.router.navigate(['/order/new']);
    }
}

