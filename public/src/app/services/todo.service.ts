import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Todo} from '../models/todo'

@Injectable()
export class TodoService {

  private todos: Todo[] = [];

  constructor(private http: Http) {}

  apiGetTodos() {
    return this.http.get('http://localhost:3000/api/todos/test').subscribe(
      (response: Response) => {

          const todos = response.json();
          this.setTodos(todos);

      }
    );
  }

  setTodos(todos: Todo[]) {
    console.log(todos);
    this.todos = todos;
  }

  getTodos() {
    return this.todos.slice();
  }

}
