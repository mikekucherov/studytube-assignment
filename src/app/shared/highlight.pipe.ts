import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(srcString: string, query: string, ...args: unknown[]): unknown {
    if (query && query.length) {
      const reg = new RegExp(query, 'gi');
      return (
        srcString.replace(reg, function(str) {
          return '<mark>' + str + '</mark>';
        })
      );
    } else {
      return srcString;
    }
  }

}
