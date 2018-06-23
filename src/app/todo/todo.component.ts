import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  imageUrl:string="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  todos:string[]=['hello','world']
  
  newtodo:string='hello'
  arr:any[]=[{
    id:1,
    name:'puja',
    status:false

  },
  {
    id:2,
    name:'chandni',
    status:true

  }
  
]
onAddtodo(todoname){
  this.arr.push({
    id:this.arr.length+1,
    name:todoname,
    status:false

  })
}
onValuechange(i){
  this.arr[i].status=!this.arr[i].status
  alert("changed")
}

  constructor() { }

  ngOnInit() {
  }
 

}
