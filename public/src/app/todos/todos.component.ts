import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  private todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {

    this.todoService.apiGetTodos();
    this.todos = this.todoService.getTodos();

  }

  clicked() {
    console.log('got clicked! Hureeyyyy!');
    this.todos = this.todoService.getTodos();
    console.log(this.todos);
  }

}
