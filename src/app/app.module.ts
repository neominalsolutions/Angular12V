import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoPipe } from './todos/todo.pipe';
import { TodosService } from './todos/todos.service';
import { TodoBoldDirective } from './todos/todo-bold.directive';
import { ComponentsModule } from './components/components.module';

// not: angularda declarations kısmında directive,pipe ve component tanımlıyoruz.
// provider kısmında ise service tanımlaması yapıyoruz
@NgModule({
  declarations: [AppComponent, TodosComponent, TodoPipe, TodoBoldDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ComponentsModule, // Ana AppModule Kendi modüllerimizi import ederiz
  ],
  providers: [TodosService], // providers kısmında ise servislerimiz olacaktır.
  bootstrap: [AppComponent],
})
export class AppModule {}
