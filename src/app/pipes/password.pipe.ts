import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, pass: boolean = true): unknown {

    return (pass) ? '*'.repeat(value.length) : value;
  }

}
