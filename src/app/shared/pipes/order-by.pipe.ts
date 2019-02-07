import { Pipe, PipeTransform } from '@angular/core';

function comparFn(a: any, b: any) {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
    return 0;
}

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(array: any[], prop: string, acs: boolean = true): any[] {
        if (!Array.isArray(array)) {
            return array;
        }
        return this.order(array, prop, acs);
    }

    private order(value: any[], name: string, direction: boolean): any[] {
        value.sort((a: any, b: any) => comparFn(a[name], b[name]));
        return direction ? value : value.reverse();
    }

}
