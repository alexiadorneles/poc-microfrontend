import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo, TodoStatus } from '../model/todo.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseURL: string = environment.baseUrl;
  private todoList: Todo[] = [];
  private readonly fakeID = 'something';

  addTodo(title: string, description: string): Observable<Todo> {
    const todo = {
      title,
      description,
      _id: this.fakeID,
      status: TodoStatus.OPEN,
    };

    this.todoList.push(todo);
    return of(todo);
    // return this.http.post<Todo>(this.baseURL, { title, description });
  }

  getTodos(): Observable<Todo[]> {
    return of(this.todoList);
    // return this.http
    //   .get<{ data: Todo[] }>(this.baseURL)
    //   .pipe(map((res) => res.data));
  }

  deleteTodo(id: string): Observable<Todo> {
    const todo = this.todoList.find((todo) => todo._id === id)!;
    this.todoList.splice(this.todoList.indexOf(todo), 1);
    return of(todo);
    // return this.http.delete<Todo>(`${this.baseURL}/${id}`);
  }

  updateTodo(id: string, changes: Partial<Todo>): Observable<Todo> {
    const todo = this.todoList.find((todo) => todo._id === id)!;
    this.todoList.splice(this.todoList.indexOf(todo), 1, {
      ...todo,
      ...changes,
    });
    return of({ ...todo, ...changes });
    // return this.httpe.put<Todo>(`${this.baseURL}/${id}`, changes);
  }
}
