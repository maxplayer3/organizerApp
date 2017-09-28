import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumIterator'
})
export class EnumIteratorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: Array<Object> = [];
    let keys = Object.keys(value);
    keys = keys.slice(keys.length / 2);
    keys.forEach((key: any) => {
      result.push({ key: key, value: value[key] });
    });
    return result;
  }

}
