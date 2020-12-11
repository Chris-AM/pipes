import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Pipe({
  name: 'secureDom'
})
export class SecureDomPipe implements PipeTransform {

  constructor(private domSan: DomSanitizer){}
  transform(value: string): SafeResourceUrl {
    return this.domSan.bypassSecurityTrustResourceUrl(value);
  }

}
