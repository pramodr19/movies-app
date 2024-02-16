import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeExample'
})
export class PipeexamplePipe implements PipeTransform {


  transform(value: any): any {
    let transformValue: any = 0;

    // if (typeof value === 'string') {
    //   transformValue = `$ ---` as string;
    // } else {
    //   transformValue = `$ ${value}`
    // }
    return transformValue;
  }

}
