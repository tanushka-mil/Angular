import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'keys'
})
export class KeysPipe implements PipeTransform {

    transform(object: object): string[] {
        return Object.keys(object);
    }

}
