import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { ITodo, TTodos } from './todo.types';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todosService: TodoService;
  todos: TTodos;
  userInput = '';

  constructor(ts: TodoService) {
    this.todosService = ts;
    this.todos = this.todosService.createTodos();
  }

  setClassState(todo: ITodo) {
    if (todo.completed && !todo.isEdited) {
      return 'completed';
    } else if (todo.isEdited) {
      return 'edit';
    }

    return 'active';
  }

  clearInput() {
    this.userInput = '';
  }

  clear() {
    this.todosService.clear();
    this.todos = this.todosService.createTodos();
  }

  addTodo() {
    if (this.userInput) {
      this.todosService.addTodo(this.userInput);
      this.clearInput();
    }
  }

  editTodo(id: number, data: string | null = '', event = 'input'): void {
    this.todosService.editTodo(id, data as string, event);
  }

  toggleTodo(id: number): void {
    this.todosService.toggleTodo(id);
  }

  removeTodo(id: number): void {
    this.todos = this.todosService.removeTodo(id);
  }
}
