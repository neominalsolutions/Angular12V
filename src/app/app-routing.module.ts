import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// router module angularda sayfalar arası link geçişleri yapmamızı sağlar
//  Routes ile hangi path url hangi component gelecek belirtiriz.

const routes: Routes = [
  {
    component: TodosComponent,
    path: 'todos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
