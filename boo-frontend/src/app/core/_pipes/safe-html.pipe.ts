import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

    constructor(private domSanitizer: DomSanitizer) {
    }

    transform(value: any, prefix = '') {
        return this.domSanitizer.bypassSecurityTrustUrl(prefix + value);
    }

}
