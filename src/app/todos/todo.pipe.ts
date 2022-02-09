import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoPipe',
})
export class TodoPipe implements PipeTransform {
  transform(value: boolean, ...args: unknown[]): unknown {
    if (value) return 'Tamamlandı';
    else return 'Tamamlanmadı';
  }
}

// ekranda görünmesini istemediğiniz bir formatı pipe ile başka bir formatta component içerisinde gösterebiliz
