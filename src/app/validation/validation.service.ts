import {Injectable} from '@angular/core';

import {LicenseNumberValidator} from './validates/license-numder.validator';
import {NameValidator} from './validates/name.validator';
import {EmailValidator} from './validates/email.validator';
import {PasswordValidator} from './validates/password.validator';
import {PhoneValidator} from './validates/phone.validator';


@Injectable()
export class ValidationService {

    licenseNumberValidator = LicenseNumberValidator;
    nameValidator = NameValidator;
    emailValidator = EmailValidator;
    passwordValidator = PasswordValidator;
    phoneValidator = PhoneValidator;


    constructor() {
    }


    getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config = {
            'required': 'Field is required',
            'minlength': `This field should has more than ${validatorValue.requiredLength} symbols`,
            'maxlength': `This field should has less than ${validatorValue.requiredLength} symbols`,
            'invalidName': 'Enter your real name',
            'invalidEmailAddress': 'Email is not valid',
            'invalidPhone': 'Phone is not valid',
            'invalidLicenseNumber': 'License number is not valid',
            'invalidPassword': 'Password can contain letters, digits and special symbols',
        };

        return config[validatorName];
    }
}
