import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'rangeNumber'
})
export class RangeNumberPipe implements PipeTransform {

    transform(value, start: number, end: number): number[] {
        let result = [];

        if (start !== undefined) {
            for (let i = start; i <= end; i++) {
                result.push(i);
            }
        }

        return result;
    }
}
