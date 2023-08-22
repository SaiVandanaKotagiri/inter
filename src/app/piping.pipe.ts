import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piping'
})
export class PipingPipe implements PipeTransform {

  transform(size: number, extension: string = 'MB'): string {
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }

}
