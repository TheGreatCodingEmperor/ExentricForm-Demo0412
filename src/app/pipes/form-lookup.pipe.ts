import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formLookup'
})
export class FormLookupPipe implements PipeTransform {

  transform(value: any, items: any[], labelField: string, valueField: string): string {
    if (!value) return '';
    else{
      let index = items.findIndex(x => x[valueField] == value);
      if(index<0){
        return '';
      }
      else{
        return items[index][labelField];
      }
    }
  }

}
