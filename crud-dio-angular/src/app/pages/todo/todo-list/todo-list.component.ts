import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = []

  constructor() { }

  ngOnInit(): void {
    let items: any = localStorage.getItem('todos')
    let todos: any = JSON.parse(items)
    if(!todos) {
      this.todos = []
    }else {
      this.todos = todos
    }
  }

  addTodo(title: string) {
    const id = this.todos.length + 1
    this.todos.push(new Todo(id, title, false))
    console.log(this.todos)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  removeTodo(todo: any) {
    console.log('O elemento pai recebeu', todo)
    let index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
