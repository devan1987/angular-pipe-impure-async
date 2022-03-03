import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  pure: false,
})
export class AppendPipe implements PipeTransform {
  transform(value, text) {
    console.log('Pipe', value);
    return value + text;
  }
}
