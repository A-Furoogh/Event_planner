import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {
  transform(value: boolean | undefined): string {
    if (value === true){
      return 'Ja';
    } else if (value === false) {
      return 'Nein';
    }
    else {
      return 'Nein';
    }
  }
}
