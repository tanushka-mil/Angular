import { AbstractControl } from '@angular/forms';


export function PhoneValidator(control: AbstractControl) {
    if (!control.value.match(/^\+[1-9](\([1-9]{3}\))[0-9]{3}-[0-9]{4}$/)) {
        return {'invalidPhone': true};
    }
}
