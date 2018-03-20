import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';


import {RegistrationService} from '../../../services/registration.service';
import {ValidationService} from '../../../validation/validation.service';


@Component({
    selector: 'bp-start-registration',
    templateUrl: './start-registration.component.html',
    styleUrls: ['./start-registration.component.less']
})
export class StartRegistrationComponent {

    mask = ['+', '1', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    userForm: any;


    constructor(public router: Router,
                public registrationService: RegistrationService,
                public formBuilder: FormBuilder,
                public validationService: ValidationService) {
        this.createForm();
    }


    createForm() {
        this.userForm = this.formBuilder.group({
            firstName: ['',
                [
                    Validators.required,
                    Validators.maxLength(50),
                    this.validationService.nameValidator
                ]
            ],
            lastName: ['',
                [
                    Validators.required,
                    Validators.maxLength(50),
                    this.validationService.nameValidator
                ]
            ],
            email: ['',
                [
                    Validators.required,
                    Validators.maxLength(50),
                    this.validationService.emailValidator
                ]
            ],
            phone: ['',
                [
                    Validators.required,
                    Validators.maxLength(50),
                    this.validationService.phoneValidator
                ]
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.maxLength(50),
                    Validators.minLength(4),
                    this.validationService.passwordValidator
                ]
            ],
        });
    }


    registerUser(event: any) {
        event.preventDefault();

        this.registrationService.newUserData = this.userForm.value;
        this.router.navigate(['registration/license-number']);
    }
}
