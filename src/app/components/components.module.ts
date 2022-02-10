import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
// ng g component dropdown --module=components.module.ts  module importlu

@NgModule({
  declarations: [
    ButtonComponent,
    DropdownComponent,
    LayoutComponent,
    NavbarComponent, // bu module içerisinde kullanmak için  tanımladık
  ],
  imports: [CommonModule, RouterModule], // router outlet kullanmak için RouterModule import ettik
  exports: [ButtonComponent, DropdownComponent, LayoutComponent], // moduleden dışarı çık. başka modulede kullanılabilir
})
export class ComponentsModule {}
