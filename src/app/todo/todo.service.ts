import { Injectable } from '@angular/core';
import { ITodo, TTodos } from './todo.types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  id = 0;
  todos: ITodo[] = [];

  constructor() {}

  createTodos() {
    return this.todos;
  }

  clear() {
    this.todos = [];
  }

  addTodo(userInput: string) {
    const todo = {
      id: (this.id += 1),
      data: userInput,
      completed: false,
      isEdited: false,
    };
    this.todos.push(todo);
  }

  editTodo(id: number, data: string, event: string) {
    this.todos.find((todo) => {
      if (todo.id === id) {
        if (event === 'blur') {
          todo.isEdited = false;
        } else {
          todo.data = data;
          todo.isEdited = true;
        }
      }
    });
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    return this.todos;
  }

  toggleTodo(id: number) {
    this.todos.find((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
    });
  }
}
