import { Component, OnInit,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Output() onAddTodo:EventEmitter <any> = new EventEmitter<any>() 
  constructor() { }
   newtodo:string=''
  ngOnInit() {
  }

  addTodo(){
    if(this.newtodo){
      this.onAddTodo.emit(this.newtodo)
    }
  }

}
