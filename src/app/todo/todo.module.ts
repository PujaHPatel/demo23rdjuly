import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from '../todolist/todolist.component';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { HomeComponent } from '../home/home.component';
import { TodoHomeComponent } from '../todo-home/todo-home.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodoComponent, TodolistComponent, TodoInputComponent, HomeComponent, TodoHomeComponent],
  exports:[TodoComponent]
})
export class TodoModule { }
