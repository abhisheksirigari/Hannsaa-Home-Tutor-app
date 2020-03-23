import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(items: Array<any>, filter: { [key: string]: any }): Array<any> {
    return items.filter(item => {
      let notMatchingField = Object.keys(filter).find(key => {
        if (item[key] && item[key] !== undefined) {
          item[key] !== filter[key]
        }        
      });

      return !notMatchingField; // true if matches all fields
    });
  }

}
