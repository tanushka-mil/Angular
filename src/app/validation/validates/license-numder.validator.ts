import { AbstractControl } from '@angular/forms';


export function LicenseNumberValidator(control: AbstractControl) {
    if (!control.value.match(/^[A-Za-z0-9]{0,100}$/)) {
        return {'invalidLicenseNumber': true};
    }
}
