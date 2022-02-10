import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent, // bu module içerisinde kullanmak için  tanımladık
  ],
  imports: [CommonModule],
  exports: [ButtonComponent], // moduleden dışarı çık. başka modulede kullanılabilir
})
export class ComponentsModule {}
