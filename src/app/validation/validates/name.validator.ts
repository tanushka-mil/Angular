import { AbstractControl } from '@angular/forms';


export function NameValidator(control: AbstractControl) {
    if (!control.value.match(/^[a-zA-Z'.-]{0,50}$/)) {
        return {'invalidName': true};
    }
}
