import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';
import { TodoState, TodoStore } from './store';

@Injectable({
  providedIn: 'root',
})
export class TodoQuery extends QueryEntity<TodoState> {
  constructor(private todoStore: TodoStore) {
    super(todoStore);
  }

  getTodos(): Observable<Todo[]> {
    return this.selectAll();
  }

  getIsLoaded(): Observable<boolean> {
    return this.select((store) => store.isLoaded);
  }

  getIsLoading(): Observable<boolean> {
    return this.selectLoading();
  }

  getNumberOfTodos(): Observable<number> {
    return this.selectCount();
  }
}
