import { AbstractControl } from '@angular/forms';


export function PasswordValidator(control: AbstractControl) {
    if (!control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
        return {'invalidPassword': true};
    }
}
