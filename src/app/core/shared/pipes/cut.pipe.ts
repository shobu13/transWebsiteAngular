import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(value: string, len = 100, end = '...'): string {
    if (value.length > len) {
      return value.slice(0, len) + end;
    }
    return value;
  }

}
