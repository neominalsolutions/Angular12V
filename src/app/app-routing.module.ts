import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './todos/todos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// router module angularda sayfalar arası link geçişleri yapmamızı sağlar
//  Routes ile hangi path url hangi component gelecek belirtiriz.

const routes: Routes = [
  {
    component: TodosComponent,
    path: 'todos',
  },
  {
    component: HomeComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
