import { Injectable } from '@angular/core';
import { TodoStore } from './store';
import { Observable, Subject } from 'rxjs';
import { ApiService } from '../services/api.service';
import { TodoStatus } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private todoStore: TodoStore, private apiService: ApiService) {}

  addTodo(title: string, description: string): Observable<boolean> {
    const storeUpdated = new Subject<boolean>();
    this.todoStore.setLoading(true);
    this.apiService.addTodo(title, description).subscribe((res) => {
      res.title = title;
      res.description = description;
      res._id = String(Math.random());
      this.todoStore.add(res);
      this.todoStore.setLoading(false);
      storeUpdated.next(true);
    });
    return storeUpdated.asObservable();
  }

  getTodos(): void {
    this.todoStore.setLoading(true);
    this.apiService.getTodos().subscribe(
      (res) => {
        this.todoStore.set(res);
        this.todoStore.setLoading(false);
        this.todoStore.update({ isLoaded: true });
      },
      (err) => {
        console.log(err);
        this.todoStore.setLoading(false);
      }
    );
  }

  markAsComplete(id: string, status: { status: TodoStatus }): void {
    this.apiService.updateTodo(id, status).subscribe(
      (res) => {
        this.todoStore.update((state) => {
          const todos = [...state.todos];
          const index = todos.findIndex((t) => t._id === id);
          todos[index] = {
            ...todos[index],
            status: TodoStatus.DONE,
          };
          return {
            ...state,
            todos,
          };
        });
      },
      (err) => console.log(err)
    );
  }

  deleteTodo(id: string): void {
    this.apiService.deleteTodo(id).subscribe(
      (res) => {
        this.todoStore.update((state) => {
          return {
            ...state,
            todos: state.todos.filter((t) => t._id !== id),
          };
        });
      },
      (error) => console.log(error)
    );
  }
}
