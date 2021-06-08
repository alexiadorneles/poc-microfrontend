import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from '../model/todo.model';

export interface TodoState extends EntityState<Todo, number> {
  isLoaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'todo', idKey: '_id' })
export class TodoStore extends EntityStore<TodoState> {
  constructor() {
    super({ isLoaded: false });
  }

  akitaPreAddEntity(newEntity: Todo): Todo & { id: string } {
    return {
      ...newEntity,
      id: newEntity._id,
    };
  }
}
