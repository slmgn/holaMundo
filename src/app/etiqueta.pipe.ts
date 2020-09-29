import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'etiqueta'
})
export class EtiquetaPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: unknown, ...args: unknown[]): SafeHtml {
    console.log(value)
    if(value >= 5){
      return this.sanitizer.bypassSecurityTrustHtml('<span>Esta Bicicleta no es asegurable</span>');
    }
    return null;
  }

}
