import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {

    value = value.toLowerCase();
    let names = value.split(' ');

    
      names = names.map(myName => {
        return myName[0].toUpperCase() + myName.substr(1);
      });
    
    return names.join(' ');
  }

}
